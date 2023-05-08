<template>
    <section class="section_content swiper-contents">
        <h1 class="blind">메인 섹션 비주얼영역</h1>
        <swiper         :modules="modules"
            :slides-per-view="1"
            :autoplay="autoplay"
            :loop=true
            :grabCursor=true
            :watchSlidesProgress=true
            :threshold=10
            :speed="1000"
            :preloadImages=true
            :pagination="{ clickable: true }"  
            navigation
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            @touch-start="handleTouchStart"
            @progress="handleProgress"
            @set-Transition="setTransition"
            class="swiper  visualSwiper"
        >
        <swiper-slide>
            <div class="slide-inner" style="background-image:url(/src/assets/images/test_img_01.jpg)">
                <div class="slide-text-content">
                    <p>
                        <span>fashion</span>
                        <span>2022-12-01 ~ 2023-12-31</span> 
                    </p>
                    <h2>MLB, DISCOVERY<br />사이트 운영</h2>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slide-inner" style="background-image:url(https://pp.userapi.com/c412624/v412624691/4136/_da_uAA6ha8.jpg)">
                <div class="slide-text-content">
                    <p>
                        <span>엔터테인먼트</span>
                        <span>2023.04.18</span>
                    </p>
                    <h2>세븐틴의 호시, 우지, 버논_불규칙의 규칙</h2>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slide-inner" style="background-image:url(https://pp.userapi.com/c637331/v637331691/48f5f/spHnV42iYVw.jpg)">
                <div class="slide-text-content">
                    <p>
                        <span>엔터테인먼트</span>
                        <span>2023.04.18</span>
                    </p>
                    <h2>세븐틴의 호시, 우지, 버논_불규칙의 규칙</h2>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slide-inner" style="background-image:url(https://pp.userapi.com/c837139/v837139407/67f52/fFqjq4U2mEk.jpg)">
                <div class="slide-text-content">
                    <p>
                        <span>엔터테인먼트</span>
                        <span>2023.04.18</span>
                    </p>
                    <h2>세븐틴의 호시, 우지, 버논_불규칙의 규칙</h2>
                </div>
            </div>
        </swiper-slide>
        </swiper>
    </section>
</template>

<script>
  // import Swiper core and required modules
  import { Navigation, Pagination } from 'swiper';
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() { 
      return {
        swiperOptions: {
            loop: true,
        }
      }
    },
    mounted(){
       this.$nextTick( ()=> {
            this.visualSwiperInit();
       })
    },
    methods: {
        visualSwiperInit(){
        }
     },
     setup() {
      const onSwiper = (swiper) => {
        swiper.pagination.bullets[0].innerHTML =  
        '<svg version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve"><circle fill="none" stroke="red" stroke-width="4" stroke-mitterlimit="0" cx="50" cy="50" r="48" stroke-dasharray="360" stroke-linecap="round" transform="rotate(-90 ) translate(-100 0)" ><animate attributeName="stroke-dashoffset" values="360;0" dur="5.7s" repeatCount="indefinite"></animate></circle></svg>'     
      };
      const onSlideChange = (swiper) => {
        const slideIndex = swiper.realIndex;
        for (var i = 0; i < swiper.slides.length; i++) {
            swiper.pagination.bullets[i].innerHTML = "";
            swiper.pagination.bullets[slideIndex].innerHTML =  
            '<svg version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve"><circle fill="none" stroke="red" stroke-width="4" stroke-mitterlimit="0" cx="50" cy="50" r="48" stroke-dasharray="360" stroke-linecap="round" transform="rotate(-90 ) translate(-100 0)" ><animate attributeName="stroke-dashoffset" values="360;0" dur="5.7s" repeatCount="indefinite"></animate></circle></svg>' 
        
        }      

          console.log('slide change',  swiper, slideIndex );
      };
      const handleTouchStart = ( target ) => {
          const swiper = target.el.swiper;
          for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = "";
        }
      };

      const setTransition = ( target ) => {
        const swiper = target.el.swiper;
        for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = 1000 + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition = 1000 + "ms";
        }
      };

      const handleProgress = ( target ) => {
        const swiper = target.el.swiper;
        for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * 0.5;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        }      
      }
      return {
        onSwiper,
        onSlideChange,
        handleProgress,
        handleTouchStart,
        setTransition,
        modules: [ Navigation, Pagination],
      }; 
    },
}
</script>

<style lang="scss">
.swiper-contents{
    position: relative;
    margin-bottom: 160px;
    transition: all .4s ease;
    padding:0 0 40vw 0; 
    z-index: 0;
    margin:0 150px 160px;
    .visualSwiper{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        .swiper-wrapper{
            .swiper-slide{ 
                overflow: hidden;
                .slide-inner{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background-size: cover;
                    background-position: center;
                    &:before{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 50%;
                        background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
                        opacity: 0.9;
                        content: '';
                    }
                    .slide-text-content{
                        position: absolute;
                        left: 0;
                        top: 230px;
                        width: 60%;
                        text-align: left;
                        color: #fff;
                        font-family: "noto-sans-kr";
                        box-sizing: border-box;
                        padding-left: 130px;
                        p{
                            display: flex;
                            flex-wrap: wrap;
                            margin: 0 0 15px 0;
                            font-weight: 600;
                            color: rgba(255,255,255,.5);
                            span{
                                margin-top: -2px;
                                font-size: 1.06rem;
                                letter-spacing: -0.002em;
                                color: #fff;
                                @extend %kr-font;
                                &:after{
                                    display: inline-block;
                                    width: 1px;
                                    height: 12px;
                                    margin: 0 10px;
                                    background: #fff;
                                    opacity: .7;
                                    content: '';
                                }
                                &:last-child{
                                    &:after{ display: none;}
                                }
                            }
                        
                        }
                        h2{
                            font-size: 5rem;
                            font-weight: 700;
                            letter-spacing: -0.02em;
                            @extend %kr-font;
                            @extend %en-font;
                            text-transform: capitalize;
                            transition: all .4s ease;
                            line-height: 1.1;
                        } 
                    }
                }
            }
        }
        .swiper-pagination 
        .swiper-pagination-bullet-active{
            &:before{
                content: "";
                width: 32px;
                height: 32px;
                border: 1px solid #fff;
                position: absolute;
                top: 0;
                bottom: 0;
                left: -13px;
                right: 0;
                margin: auto;
                border-radius: 50%;
                display: block;
            }
        }
        .swiper-pagination 
        .swiper-pagination-bullet{ 
            >svg{
                width: 32px;
                height: 32px;
                position: absolute;
                top: -13px;
                bottom: 0;
                left: -13px;
                right: 0;
                display: block;
            }
        }
            

        .swiper-button-next{
            transform: rotate(180deg);
            right:40px;
        }
        .swiper-button-next{
            &:after{ opacity:0;}
        }
        .swiper-button-prev{
            left:40px;
            &:after{ opacity:0;}
        }
        .swiper-button-next,
        .swiper-button-prev{ width:16.5px; height:34px;  background:url( @/assets/images/top_visual_button.png) 0 0 no-repeat; background-size:16.5px auto;  }
        .swiper-button-next.swiper-button-disabled, 
        .swiper-button-prev.swiper-button-disabled{ display: none; }
        .swiper-pagination .swiper-pagination-bullet{
            position: relative;
            width: 12px;
            width: 1.2rem;
            height: 12px;
            height: 1.2rem;
            background: #fff;
            opacity: 1;
            margin-left: 4.6rem;
            &-active{
                background: #da291c;
                width: 6px;
                width: 0.6rem;
                height: 6px;
                height: 0.6rem;
                &::before{
                    content: "";
                    width: 32px;
                    height: 32px;
                    border: 1px solid #fff;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: -13px;
                    right: 0;
                    margin: auto;
                    border-radius: 50%;
                    display: block;
                }
            }
        }
    }
}

.blind{
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
}
</style>
