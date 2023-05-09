<template>
    <section class="contents" v-show="contents">
        <div class="inner">
            <h2>With PRO-V</h2>
            <h3>Being with Probe is the fastest way to find out who you are.</h3>
            <div class="video_content">
                <div class="video_box">
                    <video autoplay="autoplay" muted="muted" loop="true">
                        <source src="@/assets/video/contents.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="form_content">
                <h4>I'M READY</h4>
                <form @submit.prevent="handleSubmit">
                    <ul class="form_list">
                        <li>
                            <input type="text" v-model="userForm.company" id="usercompany" name="company"
                                class="form-control">
                            <label for="company">COMPANY</label>
                            <div v-if="isFormSubmit && v$.userForm.company.required.$invalid" class="invalid-feedback">company field is
                                required</div>
                        </li>
                        <li>
                            <input type="text" v-model="userForm.name" id="username" name="name">
                            <label for="name">NAME</label>
                            <div v-if="isFormSubmit && v$.userForm.name.required.$invalid" class="invalid-feedback">username field is
                                required</div>
                        </li>
                        <li>
                            <input type="text" v-model="userForm.email" id="useremail" name="email">
                            <label for="email">EMAIL</label>
                            <div
                                v-if="isFormSubmit && v$.userForm.email.$error"
                                class="invalid-feedback"
                                >
                                <span v-if="!v$.userForm.email.required.$invalid"
                                    >Email field is required</span
                                >
                                <span v-if="!v$.userForm.email.email"
                                    >Please provide valid email</span
                                >
                            </div>

                        </li>
                        <li>
                            <input type="text" v-model="userForm.phone" id="userephone" name="phone"  maxlength="11">
                            <label for="phone">PHONE</label>
                            <div v-if="isFormSubmit && v$.userForm.phone.required.$invalid" class="invalid-feedback">phone field is
                                required</div>
                        </li>
                        <li>
                            <select v-model="userForm.service">
                                <option value="">Please select a service area</option>
                                <option value="promotional site">promotional site</option>
                                <option value="brand site">brand site</option>
                                <option value="e-commerce site">e-commerce site</option>
                                <option value="etc">etc</option>
                            </select>
                            <div v-if="v$.userForm.site.$error">
                                <span v-if="v$.userForm.site.required">Please select a service</span>
                            </div> 
                        </li>
                        <li>
                            <select  v-model="userForm.budget">
                                <option value="">Please select a budget</option>
                                <option value="100만원 미만">Less than 1 million won</option>
                                <option value="100만원~300만원">100만원~300만원</option>
                                <option value="300만원~500만원">300만원~500만원</option>
                                <option value="500이상">500이상</option>
                            </select>
                            <div v-if="v$.userForm.budget.$error">
                                <span v-if="v$.userForm.budget.required">Please select a budget</span>
                            </div> 
                        </li>
                        <li class="col-1">
                            <textarea name="userTextarea" v-model="userForm.message" placeholder="프로젝트 내용을 설명해주세요. 최대 100글자입니다."></textarea>
                            <div v-if="v$.userForm.message.$error">
                                <span v-if="v$.userForm.message.required">Please enter a message</span>
                                <span v-if="v$.userForm.message.maxLength">Message is too long</span>
                            </div>
                        </li>
                        <li class="col-1">
                            <div class="file_box">
                                <label class="custom-file-label" for="customFile">파일 업로드, 최대 10MB</label>
                                <input id="customFile" type="file" @change="handleFileUpload"/>
                                <div>
                                    <span>{{ fileName }}</span>
                                </div>
                            </div>
                        </li>
                        <li class="col-1">
                            <div class="checks">
                                <input type="checkbox" id="agreement"  v-model="isChecked">
                                <label for="agreement"><span>개인정보보호정책</span>에 동의합니다 </label>
                            </div>
                            <button type="button" @click="submitForm">프로젝트 문의하기</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, maxLength } from '@vuelidate/validators'


// Import Swiper styles
export default {
    setup () {
        const fileName = ref('');

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            fileName.value = file.name;

            const regex = /^.*\.(jpg|jpeg|png|gif)$/i;
            const MAX_FILE_SIZE = 10485760; 

            if (!regex.test(file.name)) {
                fileName.value = '';
                event.target.value = ''; 
                alert('jpg, jpeg, png, gif 파일만 등록 가능합니다. 최대 10mb 크기만 업로드 가능합니다.');
            }else if( file.size > MAX_FILE_SIZE ){
                alert( "이미지 용량 10mb 미만 업로드 가능합니다." );
            }
        };
        return { 
            v$: useVuelidate(),
            fileName,
            handleFileUpload 
        }
    },
    components: {
    },

    data() {
        return {
            contents: false,
            userForm: {
                company: "",
                name: "",
                email: "",
                phone: "",
                service: "",
                budget:"",
                message:"",
                file:null
            },
            isFormSubmit: false,
            isChecked: false
        }
    },
    
    validations: {
        userForm: {
            company:{
                required,
            },
            name: {
                required
            },
            email: {
                required,
                email
            },
            phone: {
                required: helpers.withMessage('Phone number is required', helpers.req),
                phone: value => /^\d{10}$/.test(value) || 'Phone number must be 10 digits' ,
            },
            site: {
                required,
            },
            budget:{
                required,
            },
            message:{
                required,
                maxLength: maxLength(100)
            },
        }
    },
   

    mounted() {
        this.$nextTick(() => {
            this.emitter.on("loading-checkmessage",
                msg => {
                    this.contents = msg;
                }
            );
        });
    },
    methods: {
        async submitForm() {
            this.isFormSubmit = true;
            const isFormCorrect = await this.v$.$validate();

            console.log("form submit", this.isFormSubmit, this.v$.userForm.email.$error );
            if( !isFormCorrect ) return;
        },
    }
}
</script>

<style lang="scss" scoped>
.contents {
    .inner {
        position: relative;
        margin: 4em 3em 0;

        h2 {
            position: relative;
            font-size: 14em;
            color: #000;
            @extend %en-font;
            font-weight: bold;
            letter-spacing: -0.04em;
        }

        h3 {
            position: relative;
            margin-top: 0.5em;
            font-size: 8em;
            color: #000;
            @extend %en-font;
            font-weight: 400;
            letter-spacing: -0.04em;
            width: 11em;
            line-height: 1;
        }

        .video_content {
            position: relative;

            .video_box {
                position: relative;
                width: 100%;
                padding-bottom: 27.5%;
                margin-top: -19em;
                z-index: -1;
                overflow: hidden;

                video {
                    position: absolute;
                    top: -10em;
                    left: 0;
                    width: 100%;
                    object-fit: fill;
                }

                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: #838383;
                    opacity: .7;
                }
            }
        }

        .form_content {
            h4 {
                margin-top: 0.3em;
                font-size: 8em;
                color: #000;
                @extend %en-font;
                font-weight: 400;
                letter-spacing: -0.04em;
            }

            .form_list {
                margin-top: 3em;

                li {
                    position: relative;
                    float: left;
                    width: 50%;
                    padding-right: 3em;
                    margin-top: 1.5em;
                    box-sizing: border-box;

                    >input {
                        width: 100%;
                        background: none;
                        // border: solid #000;
                        border-width: 0 0 .1em;
                        box-shadow: none;
                        color: #000;
                        height: 2em;
                        transition: all .15s ease-out 0s;
                        font-size: 2.5em;
                        @extend %en-font;
                        font-weight: 400;
                        letter-spacing: -0.04em;
                        &:focus {
                            outline: none
                        }
                    }

                    >label {
                        position: absolute;
                        top: .4em;
                        left: 0.2em;
                        font-size: 2.5em;
                        color: #000;
                        transition: all .15s ease-out 0s;
                        @extend %en-font;
                        font-weight: 400;
                        letter-spacing: -0.04em;
                    }

                    >select {
                        width: 100%;
                        padding: 0.2em;
                        font-size: 2.5em;
                        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAYAAADam2dgAAAABHNCSVQICAgIfAhkiAAAAHJJREFUGFd1zLEJwlAUBdATBBewtLYLuEEcwRW0cYZkgmSGNMkIOoJuELBzBhcQhPCKDx+Jt7vvHW6BK47+51ZgiwmbBffGPlDkhGEBnTEmFP87qgw+cIieox2eWOODEq9fFL1GiwZdWs2X4rZCjwu+Cc0M3g7TPnxF0QAAAABJRU5ErkJggg==) no-repeat;
                        background-position: 98% 50%;
                        border: solid #000;
                        border-width: 0 0 .1em;
                        border-radius: 0;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        &:focus {
                            outline: none
                        }
                    }

                    &.col-1 {
                        width: 100%;
                        float: none;
                        overflow: hidden;

                        textarea {
                            margin-top: 1.5em;
                            width: 96%;
                            height: 8em;
                            padding: 1em;
                            background: none;
                            border: 2px solid #000;
                            color: #000;
                            font-size: 2.5em;
                            &:focus {
                                outline: none
                            }
                        }

                        .file_box {
                            input {
                                position: absolute;
                                width: 1px;
                                height: 1px;
                                padding: 0;
                                margin: -1px;
                                overflow: hidden;
                                clip: rect(0, 0, 0, 0);
                                border: 0;
                                &:focus {
                                    outline: none
                                }

                            }

                            label {
                                position: relative;
                                display: block;
                                width: 96%;
                                height: 2em;
                                line-height: 2em;
                                padding: 0 0.8em;
                                top: 0;
                                left: 0;
                                color: #000;
                                font-size: 2.5em;
                                vertical-align: middle;
                                background-color: #fff;
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAYAAADZsVyDAAAABHNCSVQICAgIfAhkiAAAALxJREFUOE/t07ERQUEQANAnkuqAEqQyMm0oQQX8UKYDOlACJShBqgMZs3/+N5f4d2a+zM1sdvtuZ3dvoOyMcMIa15KUQcGlQM+Y4oFZCZ6DUzRquGOIRQ7vglN0hQN2WGKcw7vgLTYI9IgnKuxxQTw8+dTKXCvmDRL5LRwPtujHQebgtKAUzs78D79b9NNWxOrEOkV0ndLh1V5UXJoQq3drIlvAN3B2xZoLdaE/h6MvEX2c+JnvivsAU6N6AXwZNfJtiwelAAAAAElFTkSuQmCC) no-repeat;
                                background-position: 97% 50%;
                                cursor: pointer;
                                border: 2px solid #000;
                            }
                        }

                        .checks {
                            position: relative;
                            line-height: 3em;
                            margin-top: 2em;
                            text-align: center;

                            input {
                                position: absolute;
                                width: 1px;
                                height: 1px;
                                padding: 0;
                                margin: -1px;
                                overflow: hidden;
                                clip: rect(0, 0, 0, 0);
                                border: 0;
                                &:checked+label{
                                    &:before{
                                        content: '';
                                        background: #000;
                                        border-color: #000;
                                    }
                                }
                            }

                            label {
                                display: inline-block;
                                position: relative;
                                cursor: pointer;
                                font-size: 2em;
                                -webkit-user-select: none;

                                span {
                                    border-bottom: 1px solid #000;
                                }

                                &:before {
                                    content: " ";
                                    display: inline-block;
                                    width: 1em;
                                    height: 1em;
                                    line-height: 1em;
                                    margin: -.3em .5em 0 0;
                                    text-align: center;
                                    vertical-align: middle;
                                    background: #fff;
                                    border: 2px solid #000;
                                }
                            }
                        }

                        button {
                            display: block;
                            margin: 1.5em auto;
                            background-color: transparent;
                            -webkit-appearance: button;
                            border-radius: 0;
                            cursor: pointer;
                            width: 10em;
                            height: 3em;
                            font-size: 2.5em;
                            border: 2px solid #000;
                        }
                    }
                }

                &:after {
                    content: '';
                    display: block;
                    clear: both;
                }
            }
        }
    }
}</style>