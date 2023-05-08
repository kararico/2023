<template>
    <section class="section_content">
        <div class="inner">
            <div class="hot_box">
                <h2>HOT KEYWORD</h2>
                <!--<p class="tit">#<//?=$hotkeyword_string?></p>-->
                <p class="tit"><a href="/tag/뷰티인스타그램/">#뷰티인스타그램</a></p>
            </div>
            <div class="post_content">
                <ul class="post_list">
                    <li id="p_352865">
                        <a href="https://www.vogue.co.kr/2023/04/18/ive-%ec%9a%b0%ec%95%84%ed%95%98%ea%b2%8c-%ed%98%b9%ec%9d%80-%ed%82%a4%ec%b9%98%ed%95%98%ea%b2%8c-4%ec%9b%94-%ec%85%8b%ec%a7%b8-%ec%a3%bc%ec%9d%98-%eb%b7%b0%ed%8b%b0-%ec%9d%b8%ec%8a%a4%ed%83%80/">
                            <div class="thum"> 
                                <img src="https://img.vogue.co.kr/vogue/2023/04/style_643e1e7e3ea2c-500x500.jpg" alt="">
                            </div>
                            <div class="text_content">
                                <p class="category">뷰티 트렌드</p>
                                <h3>IVE, 우아하게 혹은 키치하게! 4월 셋째 주의 뷰티 인스타그램</h3>
                                <p class="date"><span>2023.04.18</span><span>by 이정미</span></p>
                            </div>
                        </a>
                    </li>
                    <li id="p_350336" > 
                        <a href="https://www.vogue.co.kr/2023/04/11/%ec%85%80%eb%9f%bd%eb%93%a4%ec%9d%98-%ec%97%ac%ed%96%89%ec%a7%80-%ed%97%a4%ec%96%b4-%ec%8a%a4%ed%83%80%ec%9d%bc%eb%a7%81-4%ec%9b%94-%eb%91%98%ec%a7%b8-%ec%a3%bc%ec%9d%98-%eb%b7%b0%ed%8b%b0-%ec%9d%b8/">
                            <div class="thum"> 
                                <img src="https://img.vogue.co.kr/vogue/2023/04/style_6434eba434dce-500x500.jpg" alt="">
                            </div>
                            <div class="text_content">
                                <p class="category">뷰티 트렌드</p>
                                <h3 class="s_tit">셀럽들의 여행지 헤어 스타일링, 4월 둘째 주의 뷰티 인스타그램</h3>
                                <p class="date"><span>2023.04.18</span><span>by 이정미</span></p>
                            </div>
                        </a></li>
                    <li id="p_347882" >
                         <a href="https://www.vogue.co.kr/2023/04/03/%eb%b8%94%eb%9e%99%ed%95%91%ed%81%ac-%ec%a7%80%ec%88%98%ec%9d%98-%ea%bd%83-%eb%a9%94%ec%9d%b4%ed%81%ac%ec%97%85-4%ec%9b%94-%ec%b2%ab%ec%a7%b8-%ec%a3%bc%ec%9d%98-%eb%b7%b0%ed%8b%b0-%ec%9d%b8/">
                            <div class="thum"> 
                                <img src="https://img.vogue.co.kr/vogue/2023/04/style_642acd2dd77cb-500x500.jpg" alt="">
                            </div>
                            <div class="text_content">
                                <p class="category">뷰티 트렌드</p>
                                <h3 class="s_tit">블랙핑크 지수의 '꽃' 속 아름다움, 4월 첫째 주의 뷰티 인스타그램</h3>
                                <p class="date"><span>2023.04.18</span><span>by 이정미</span></p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

// Import Swiper styles
export default {

    data() {

    },

    setup() {

    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>.section_content {
    position: relative;
    margin-bottom: 160px;
    padding: 80px 150px 0;
    .inner{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
        .hot_box{
            width: calc(25% - 30px);
            padding: 40px 0 0 0;
            margin: 0 15px;
            h2{
                margin: 0 0 35px 0;
                font-size: 1.5rem;
                letter-spacing: 0.1em;
                color: #888;
                text-transform: uppercase;
            }
            .tit{
                margin: 0 0 30px 0;
                a{
                    display: block;
                    font-weight: 700;
                    letter-spacing: -0.002em;
                    text-decoration: underline;
                    text-underline-position: under;
                    word-break: break-all;
                    line-height: 1.5;
                    font-family: 'Pretendard', AppleGothic, 'Dotum', sans-serif;
                    font-size: 3rem;
                    text-transform: uppercase;
                    color: #111;
                }
            }
        }
        .post_content{
            width: calc(75% - 30px);;
            padding: 40px 0 0 0;
            margin: 0 15px;
            .post_list{
                display: flex;
                flex-wrap: wrap;
                margin: -82px -15px 0;
                li{
                    margin: 82px 15px 0;
                    width: calc(33.333% - 30px);
                    a{ 
                        display: block;
                        text-decoration: none;
                        .thum{
                            position: relative;
                            overflow: hidden;
                            height: 0;
                            margin: 0 0 30px 0;
                            padding-top: 100%;
                            img{
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                        .text_content{
                          .category{
                            margin: 0 0 12px 0;
                            font-weight: 500;
                            letter-spacing: -0.02em;
                            font-size: 0.937rem;
                            color: #111;
                          }
                          h3{
                            max-height: 99px;
                            overflow: hidden;
                            margin: 0 0 20px 0;
                            font-size: 1.375rem;
                            font-weight: 600;
                            line-height: 1.5;
                            color: #111;
                          }
                          .date{
                            font-family: 'Pretendard';
                            font-size: 0.81rem;
                            color: #999;
                            letter-spacing: 0;
                            font-weight: 400;
                            display: flex;
                            align-items: center;
                            line-height: 1rem;
                          }
                        }
                    }
                }
            }
        }
    }
    &:before {
        position: absolute;
        left: 50%;
        top: 0;
        z-index: -1;
        width: 100vw;
        height: 377px;
        background: #f5f5f5;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        content: '';
    }
}

.blind {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
}</style>