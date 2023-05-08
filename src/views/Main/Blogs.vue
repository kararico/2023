<template>
    <section class="blog" v-show="blog">
        <div class="inner">
            <h2>Blog's</h2>
            <div class="blog_list_content">
                <ul class="blog_list">
                    <li>
                        <div class="text_content">
                            <h3>vinyl culture: nick helderman</h3>
                            <p class="text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p class="date">
                                <span>September</span>
                                <span>15</span>
                                <span>2020</span>
                            </p>
                            <a href="javascript:;" class="btn_arrow_link"></a>
                        </div>
                        <div class="figure_content">
                            <figure>
                                <img src="@/assets/images/blog_img_01.jpg" alt="blog">
                            </figure>
                        </div>
                    </li>
                    <li>
                        <div class="text_content">
                            <h3>vinyl culture: nick helderman</h3>
                            <p class="text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p class="date">
                                <span>September</span>
                                <span>15</span>
                                <span>2020</span>
                            </p>
                            <a href="javascript:;" class="btn_arrow_link"></a>
                        </div>
                        <div class="figure_content">
                            <figure>
                                <img src="@/assets/images/blog_img_01.jpg" alt="blog">
                            </figure>
                        </div>
                    </li>
                    <li>
                        <div class="text_content">
                            <h3>vinyl culture: nick helderman</h3>
                            <p class="text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p class="date">
                                <span>September</span>
                                <span>15</span>
                                <span>2020</span>
                            </p>
                            <a href="javascript:;" class="btn_arrow_link"></a>
                        </div>
                        <div class="figure_content">
                            <figure>
                                <img src="@/assets/images/blog_img_01.jpg" alt="blog">
                            </figure>
                        </div>
                    </li>
                    <li>
                        <div class="text_content">
                            <h3>vinyl culture: nick helderman</h3>
                            <p class="text">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p class="date">
                                <span>September</span>
                                <span>15</span>
                                <span>2020</span>
                            </p>
                            <a href="javascript:;" class="btn_arrow_link"></a>
                        </div>
                        <div class="figure_content">
                            <figure>
                                <img src="@/assets/images/blog_img_01.jpg" alt="blog">
                            </figure>
                        </div>
                    </li>
                </ul>
            </div> 

        </div>
    </section>
</template>

<script>

// Import Swiper styles
export default {
    components: {
    },
    data(){
        return{
            blog: false,
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.emitter.on("loading-checkmessage",
                msg => {
                    this.blog = msg;
                }
            );
        });
    },
}
</script>

<style lang="scss" scoped>
.blog{
    overflow: hidden;
    .inner{
        position: relative;
        h2{
            margin-left:0.15em;
            font-size:14em;
            color: #000;
            @extend %en-font;
            font-weight: bold;
            letter-spacing: -0.04em;
        }
        .blog_list_content{
            position: relative;
            margin-top: 4em;
            .blog_list{
                position: relative;
                li{
                    position: relative;
                    display: flex;
                    flex-flow: wrap;
                    margin: 0 3em; 
                    border-left: 1px solid #000;
                    border-right: 1px solid #000;
                    .text_content,
                    .figure_content{ flex: 0  50%; border-top: 1px solid #000;}
                    .text_content{
                        position: relative;
                        border-right: 1px solid #000;
                        padding:3em;
                        box-sizing: border-box;
                        h3{
                            width:100%;
                            font-size:5em;
                            @extend %en-font;
                            font-weight: 600;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            letter-spacing: -0.03em;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            text-transform: uppercase;
                        }
                        .text{
                            padding:1.2em 0;
                            width:100%;
                            font-size:2em;
                            @extend %en-font;
                            font-weight: 300;
                            line-height: 1.2;
                        }
                        .date{
                            font-size:1.2em;
                            @extend %en-font;
                            font-weight: 500;
                            color: #767575;
                            span{ padding-left:0.2em;
                               &:first-child{ padding-left:0; }
                            }
                        }
                        .btn_arrow_link{
                           position: absolute;
                           bottom:1em;
                           right:2em;
                           width: 4em;
                           height: 4em;
                           background:url( @/assets/images/arrow.png) 0 0 no-repeat;
                           background-size:100% auto; 
                           transform: rotate(180deg);
                        }
                    }
                    .figure_content{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    &::after{
                        content: '';
                        display: block;
                        position: absolute;
                        top:0;
                        right:-3.2em;
                        width: 4em;
                        height: 1px;
                        background: #000;
                    }
                    &::before{
                        content: '';
                        display: block;
                        position: absolute;
                        top:0;
                        left:-3.2em;
                        width: 4em;
                        height: 1px;
                        background: #000;
                    }
                    &:last-child{
                        border-bottom: 1px solid #000;
                    }
                }
                &::after{
                        content: '';
                        display: block;
                        position: absolute;
                        bottom:0;
                        right:0;
                        width: 4em;
                        height: 1px;
                        background: #000;
                    }
                    &::before{
                        content: '';
                        display: block;
                        position: absolute;
                        bottom:0;
                        left:0;
                        width: 4em;
                        height: 1px;
                        background: #000;
                    }
            }
        }


        
    }
}

</style>