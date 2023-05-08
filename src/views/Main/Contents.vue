<template>
    <section class="contents" v-show="contents">
        <div class="inner">
            <h2>With PRO-V</h2>
            <h3>Being with Probe is the fastest way to find out who you are.</h3>
            <div class="video_content">
                <div class="video_box">
                    <video  autoplay="autoplay" muted="muted" loop="true">
                        <source src="@/assets/video/contents.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="form_content">
                <h4>I'M READY</h4>
                <!-- <form action="post"> -->
                    <ul class="form_list">
                        <li>
                            <input type="text">
                            <label for="company">COMPANY</label>
                        </li>
                        <li>
                            <input type="text">
                            <label for="name">NAME</label>
                        </li>
                        <li>
                            <input type="text">
                            <label for="email">EMAIL</label>
                        </li>
                        <li>
                            <input type="text">
                            <label for="phone">PHONE</label>
                        </li>
                        <li>
                            <select>
                                <option value="Please select a service area">Please select a service area</option>
                                <option value="promotional site">promotional site</option>
                                <option value="brand site">brand site</option>
                                <option value="e-commerce site">e-commerce site</option>
                                <option value="etc">etc</option>
                            </select>
                        </li>
                        <li>
                            <select name="" id="">
                                <option value="Please select a budget">Please select a budget</option>
                                <option value="100만원 미만">Less than 1 million won</option>
                                <option value="100만원~300만원">100만원~300만원</option>
                                <option value="300만원~500만원">300만원~500만원</option>
                                <option value="500이상">500이상</option>
                            </select>
                        </li>
                        <li class="col-1">
                            <textarea name="userTextarea" id="" placeholder="프로젝트 내용을 설명해주세요."></textarea>
                        </li>
                        <li class="col-1">
                            <div class="file_box">
                                <label for="file">파일 업로드, 최대 10MB</label> 
                                <input type="file" id="file">
                            </div>
                        </li>
                        <li class="col-1">
                            <div class="checks">
                                <input type="checkbox">
                                <label for=""><span>개인정보보호정책</span>에 동의합니다 </label>
                            </div>
                            <button type="button">프로젝트 문의하기</button>
                        </li>
                    </ul>
                <!-- </form> -->
            </div>
        </div>
    </section>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.css';
export default {
    components: {
    },
    data(){
        return{
            contents:false
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
}
</script>

<style lang="scss" scoped>
   .contents{
    .inner{
        position: relative;
        margin: 4em  3em 0; 
        h2{
            position: relative;
            font-size:14em;
            color: #000;
            @extend %en-font;
            font-weight: bold;
            letter-spacing: -0.04em;
        }
        h3{
            position: relative;
            margin-top: 0.5em;
            font-size:8em;
            color: #000;
            @extend %en-font;
            font-weight: 400;
            letter-spacing: -0.04em;
            width:11em;
            line-height: 1;
        }
        .video_content{
            position: relative;
            .video_box{
                position: relative;
                width:100%;
                padding-bottom: 27.5%;
                margin-top: -19em;
                z-index: -1;
                overflow: hidden;
                video{
                    position: absolute;
                    top: -10em;
                    left: 0;
                    width: 100%;
                    object-fit: fill;
                }
                &:after{
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
        .form_content{
            h4{ 
                margin-top: 0.3em;
                font-size:8em;
                color: #000;
                @extend %en-font;
                font-weight: 400;
                letter-spacing: -0.04em;
            }
            .form_list{
                margin-top: 3em;
                li{
                    position: relative;
                    float: left;
                    width: 50%;
                    padding-right: 3em;
                    margin-top: 1.5em;
                    box-sizing: border-box;
                    >input{
                        width: 100%;
                        background: none;
                        border: solid #000;
                        border-width: 0 0 .1em;
                        box-shadow: none;
                        color: #000;
                        height: 2em;
                        transition: all .15s ease-out 0s;
                        font-size: 2.5em;
                        @extend %en-font;
                        font-weight: 400;
                        letter-spacing: -0.04em;
                    }
                    >label{
                        position: absolute;
                        top: .4em;
                        left:0.2em;
                        font-size: 2.5em;
                        color: #000;
                        transition: all .15s ease-out 0s;
                        @extend %en-font;
                        font-weight: 400;
                        letter-spacing: -0.04em;
                    }
                    >select{
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
                    }
                    &.col-1{
                        width: 100%;
                        float: none;
                        overflow: hidden;
                        textarea{
                            margin-top: 1.5em;
                            width: 96%;
                            height: 8em;
                            padding: 1em;
                            background: none;
                            border: 2px solid #000;
                            color: #000;
                            font-size: 2.5em;
                        }
                        .file_box{
                            input{
                                position: absolute;
                                width: 1px;
                                height: 1px;
                                padding: 0;
                                margin: -1px;
                                overflow: hidden;
                                clip: rect(0,0,0,0);
                                border: 0;
                            }
                            label{
                                position: relative;
                                display:block;
                                width: 96%;
                                height: 2em;
                                line-height: 2em;
                                padding: 0 0.8em;
                                top:0;
                                left:0;
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
                        .checks{
                            position: relative;
                            line-height: 3em;
                            margin-top: 2em;
                            text-align: center;
                            input{
                                position: absolute;
                                width: 1px;
                                height: 1px;
                                padding: 0;
                                margin: -1px;
                                overflow: hidden;
                                clip: rect(0,0,0,0);
                                border: 0;
                            }
                            label{
                                display: inline-block;
                                position: relative;
                                cursor: pointer;
                                font-size:2em;
                                -webkit-user-select: none;
                                span{
                                    border-bottom: 1px solid #000;
                                }
                                &:before{
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
                        button{
                            display: block;
                            margin:1.5em auto;
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
                &:after{
                    content: '';
                    display: block;
                    clear: both;
                }
            }
        }
    }
   }

</style>