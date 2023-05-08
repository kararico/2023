<template>
    <section class="visual" v-show="visualTarget" ref="trigger">
        <div class="inner">
            <div class="visual_text_area">
                <h2>
                    <div><em class="js-visual_text"  ref="title">INTERACIVE</em></div>
                    <div ref="subtitle">
                        <div><em class="js-visual_text">PUBLISH</em></div>
                        <div class="visual_text">
                            <div class="about_text" ref="paragraph">
                                <h3>
                                 Hello! My name is Jung won Hea and I'm delighted to introduce myself to you. 
                                </h3>
                                <span><span class="label">TEL</span><a href="tel:82-9181-9744">82.9181.9744</a></span>
                                <span><span class="label">ADDRESS</span>.39, Ieum 5-ro, Seo-gu, Incheon, Republic of Korea</span>
                            </div>
                        </div>
                        <div><em class="js-visual_text">ER</em></div>
                    </div>
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap, TimelineMax, Expo } from "gsap";

export default {
    components: {
    },
    data() { 
      return {
        visualTarget: false
      }
    },
    mounted(){
        this.$nextTick(() => {
        this.emitter.on("loading-checkmessage", (msg) => {
            this.visualTarget = msg;
            setTimeout(() => {
                this.visualTextShow();
                this.visualScrollMotions();
                }, 500);
            });
        });
    },
    methods: {
        visualTextShow(){
            const visualText = gsap.utils.toArray( ".js-visual_text" ); 
            visualText.forEach( ( ele, index ) =>{
                gsap.set( ele, { y: ele.clientHeight, opacity:0 })
                gsap.to( ele, 0.75, { y: 0, opacity:1,  ease:Expo.easeInOut, delay: index * 0.15, onComplete: visualTextEnd })
            });
            let callbackCalled = false;
            function visualTextEnd(){
                if( !callbackCalled ){
                    setTimeout( () =>{
                        const tl = new TimelineMax();
                        const visualTextHidden = document.querySelector( ".visual_text" );
                        tl.to( visualTextHidden, 0.35,{ width: 14+"%"});
                        tl.to( visualTextHidden, 0.35,{ opacity:1 });
                        callbackCalled = true;
                    },1000 );
                 
                }
            }
        },
        visualScrollMotions(){
            const timeline = new TimelineMax();
           
            timeline
            .fromTo(this.$refs.title, { opacity: 1, x:0 }, {opacity: 0, x: -window.innerWidth })
            .fromTo(this.$refs.subtitle, { opacity: 1, x:0 },  { opacity: 0, x: window.innerWidth }, "-=0.5")

            this.$scrollTrigger.create({
                trigger: this.$refs.trigger,
                animation: timeline,
                start: "top top",
                end: "bottom center",
                scrub: true,
           
            });
        }
     },
}
</script>

<style lang="scss" scoped>
    .visual{
        overflow: hidden;
        .inner{
            position: relative;
            margin: 4em  3em 0; 
            .visual_text_area{
                padding-top:3em;
                h2{
                    word-break: break-all;
                    div{
                        display: inline-flex;
                        overflow: hidden;
                        em{
                            position: relative;
                            font-size:19em;
                            color: #000;
                            @extend %en-font;
                            font-weight: bold;
                            letter-spacing: -0.04em;
                            opacity: 0;
                        }
                        &.visual_text{
                            width:0;
                            opacity: 0;
                            overflow: hidden;
                            vertical-align:top;
                            padding-top: 3.3em;
                            .about_text{
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                word-wrap: break-word;
                                @extend %en-font;
                                 h3{ 
                                    flex: 1 0 100%;
                                     font-size: 1.2em;
                                 }
                                 >span{
                                    flex: 1 0 100%;
                                    padding-top:0.8em;
                                    font-size: 1.1em;
                                    @extend %en-font;
                                    a{
                                        color: #000;
                                        text-decoration: none;
                                    }
                                 }
                                 .label{
                                    display: block;
                                    padding:0.2em;
                                    margin-bottom: 0.3em;
                                    background: #000;
                                    color: #fff;
                                    box-sizing: border-box;
                                 }
                            }
                        }
                    }
                }
            }
        }
    }

</style>
