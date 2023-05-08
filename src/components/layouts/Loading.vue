
<template>
    <div class="loading-container">
        <div class="barcode_area">
            <div class="barcode_box">
                <ul class="barcode_list">
                    <li class="start"></li>
                    <li class="digit-0"></li>
                    <li class="digit-4"></li>
                    <li class="digit-2"></li>
                    <li class="digit-1"></li>
                    <li class="digit-0"></li>
                    <li class="digit-0"></li>
                    <li class="mid"></li>
                    <li class="digit-0"></li>
                    <li class="digit-0"></li>
                    <li class="digit-5"></li>
                    <li class="digit-2"></li>
                    <li class="digit-6"></li>
                    <li class="digit-4"></li>
                    <li class="end"></li>
                </ul>
            </div>
        </div>
    <div class="loading-wave"></div>
</div>
</template>

<script>
import { gsap, Expo } from "gsap";
export default {
    data() {
        return {
            isIn: true,
            isLoadingCheck : false,
        }
    },
    mounted() { 
        this.$nextTick(() => {
            this.loadingMotions();
        });
    },
    methods: {
        loadingMotions(){
            const loading = document.querySelector( ".loading-container" );
            const barcode  = document.querySelector( ".barcode_list" );
            const loadingWave = document.querySelector( ".loading-wave" );
            const delays = 1.1;
            gsap.set( barcode, { y: 0 })
            gsap.set( loadingWave, { y: window.outerHeight});
            gsap.to( barcode, delays, { y: -(barcode.clientHeight+7),   ease:Expo.easeInOut, onComplete: () =>{
                gsap.to( loadingWave, delays,  { y: 0, ease:Expo.easeInOut, onComplete: () =>{
                    gsap.to( loadingWave, delays,  { y: -window.outerHeight, ease:Expo.easeInOut, onComplete: () =>{
                        loading.remove();
                        this.loadingCheckEvent();
                    }}); 
                }}); 
            }});
        },
        loadingCheckEvent(){
            this.isLoadingCheck = true; 
            this.emitter.emit("loading-checkmessage", this.isLoadingCheck);
        }     
    }
}
</script>


<style lang="scss" scoped>
$black: #343434;

.loading-container {
    position: fixed;
    display: flex;
    align-items: end;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1000;

    .barcode_area {
        overflow: hidden;
        width: 220px;
        height: 120px;
        margin: 0 auto 150px;

        .barcode_box {
            overflow: hidden;
            ul {
                position: relative;
                display: table;
                margin: 0 auto;
                padding: 10px 15px;
                background: #f0f0f0;
                box-shadow: 0px 1px 10px -5px #000;
                border-radius: 3px;

                li {
                    display: table-cell;
                    position: relative;
                    width: 14px;
                    height: 100px;
                    overflow: hidden;

                    &::before {
                        content: '';
                        position: absolute;
                        left: -2px;
                        top: 0;
                        width: 2px;
                        bottom: 18px;
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        text-align: center;
                        height: 18px;
                        line-height: 18px;
                        color: #802020;
                        font-family: 'Courier New', mono;
                        font-weight: bold;
                        font-size: 14px;
                    }

                    &:nth-child(2).digit-0::before,
                    &:nth-child(3).digit-0::before,
                    &:nth-child(4).digit-0::before,
                    &:nth-child(5).digit-0::before,
                    &:nth-child(6).digit-0::before,
                    &:nth-child(7).digit-0::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-0::after,
                    &:nth-child(3).digit-0::after,
                    &:nth-child(4).digit-0::after,
                    &:nth-child(5).digit-0::after,
                    &:nth-child(6).digit-0::after,
                    &:nth-child(7).digit-0::after {
                        content: '0';
                    }

                    &:nth-child(2).digit-1::before,
                    &:nth-child(3).digit-1::before,
                    &:nth-child(4).digit-1::before,
                    &:nth-child(5).digit-1::before,
                    &:nth-child(6).digit-1::before,
                    &:nth-child(7).digit-1::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-1::after,
                    &:nth-child(3).digit-1::after,
                    &:nth-child(4).digit-1::after,
                    &:nth-child(5).digit-1::after,
                    &:nth-child(6).digit-1::after,
                    &:nth-child(7).digit-1::after {
                        content: '1';
                    }

                    &:nth-child(2).digit-2::before,
                    &:nth-child(3).digit-2::before,
                    &:nth-child(4).digit-2::before,
                    &:nth-child(5).digit-2::before,
                    &:nth-child(6).digit-2::before,
                    &:nth-child(7).digit-2::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-2::after,
                    &:nth-child(3).digit-2::after,
                    &:nth-child(4).digit-2::after,
                    &:nth-child(5).digit-2::after,
                    &:nth-child(6).digit-2::after,
                    &:nth-child(7).digit-2::after {
                        content: '0';
                    }

                    &:nth-child(2).digit-3::before,
                    &:nth-child(3).digit-3::before,
                    &:nth-child(4).digit-3::before,
                    &:nth-child(5).digit-3::before,
                    &:nth-child(6).digit-3::before,
                    &:nth-child(7).digit-3::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-3::after,
                    &:nth-child(3).digit-3::after,
                    &:nth-child(4).digit-3::after,
                    &:nth-child(5).digit-3::after,
                    &:nth-child(6).digit-3::after,
                    &:nth-child(7).digit-3::after {
                        content: '3';
                    }

                    &:nth-child(2).digit-4::before,
                    &:nth-child(3).digit-4::before,
                    &:nth-child(4).digit-4::before,
                    &:nth-child(5).digit-4::before,
                    &:nth-child(6).digit-4::before,
                    &:nth-child(7).digit-4::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-4::after,
                    &:nth-child(3).digit-4::after,
                    &:nth-child(4).digit-4::after,
                    &:nth-child(5).digit-4::after,
                    &:nth-child(6).digit-4::after,
                    &:nth-child(7).digit-4::after {
                        content: '1';
                    }

                    &:nth-child(2).digit-5::before,
                    &:nth-child(3).digit-5::before,
                    &:nth-child(4).digit-5::before,
                    &:nth-child(5).digit-5::before,
                    &:nth-child(6).digit-5::before,
                    &:nth-child(7).digit-5::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-5::after,
                    &:nth-child(3).digit-5::after,
                    &:nth-child(4).digit-5::after,
                    &:nth-child(5).digit-5::after,
                    &:nth-child(6).digit-5::after,
                    &:nth-child(7).digit-5::after {
                        content: '5';
                    }

                    &:nth-child(2).digit-6::before,
                    &:nth-child(3).digit-6::before,
                    &:nth-child(4).digit-6::before,
                    &:nth-child(5).digit-6::before,
                    &:nth-child(6).digit-6::before,
                    &:nth-child(7).digit-6::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-6::after,
                    &:nth-child(3).digit-6::after,
                    &:nth-child(4).digit-6::after,
                    &:nth-child(5).digit-6::after,
                    &:nth-child(6).digit-6::after,
                    &:nth-child(7).digit-6::after {
                        content: '6';
                    }

                    &:nth-child(2).digit-7::before,
                    &:nth-child(3).digit-7::before,
                    &:nth-child(4).digit-7::before,
                    &:nth-child(5).digit-7::before,
                    &:nth-child(6).digit-7::before,
                    &:nth-child(7).digit-7::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-7::after,
                    &:nth-child(3).digit-7::after,
                    &:nth-child(4).digit-7::after,
                    &:nth-child(5).digit-7::after,
                    &:nth-child(6).digit-7::after,
                    &:nth-child(7).digit-7::after {
                        content: '7';
                    }

                    &:nth-child(2).digit-8::before,
                    &:nth-child(3).digit-8::before,
                    &:nth-child(4).digit-8::before,
                    &:nth-child(5).digit-8::before,
                    &:nth-child(6).digit-8::before,
                    &:nth-child(7).digit-8::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-8::after,
                    &:nth-child(3).digit-8::after,
                    &:nth-child(4).digit-8::after,
                    &:nth-child(5).digit-8::after,
                    &:nth-child(6).digit-8::after,
                    &:nth-child(7).digit-8::after {
                        content: '8';
                    }

                    &:nth-child(2).digit-9::before,
                    &:nth-child(3).digit-9::before,
                    &:nth-child(4).digit-9::before,
                    &:nth-child(5).digit-9::before,
                    &:nth-child(6).digit-9::before,
                    &:nth-child(7).digit-9::before {
                        box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #404040;
                    }

                    &:nth-child(2).digit-9::after,
                    &:nth-child(3).digit-9::after,
                    &:nth-child(4).digit-9::after,
                    &:nth-child(5).digit-9::after,
                    &:nth-child(6).digit-9::after,
                    &:nth-child(7).digit-9::after {
                        content: '9';
                    }

                    &:nth-child(9).digit-0::before,
                    &:nth-child(10).digit-0::before,
                    &:nth-child(11).digit-0::before,
                    &:nth-child(12).digit-0::before,
                    &:nth-child(13).digit-0::before,
                    &:nth-child(14).digit-0::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-0::after,
                    &:nth-child(10).digit-0::after,
                    &:nth-child(11).digit-0::after,
                    &:nth-child(12).digit-0::after,
                    &:nth-child(13).digit-0::after,
                    &:nth-child(14).digit-0::after {
                        content: '0';
                    }

                    &:nth-child(9).digit-1::before,
                    &:nth-child(10).digit-1::before,
                    &:nth-child(11).digit-1::before,
                    &:nth-child(12).digit-1::before,
                    &:nth-child(13).digit-1::before,
                    &:nth-child(14).digit-1::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-1::after,
                    &:nth-child(10).digit-1::after,
                    &:nth-child(11).digit-1::after,
                    &:nth-child(12).digit-1::after,
                    &:nth-child(13).digit-1::after,
                    &:nth-child(14).digit-1::after {
                        content: '1';
                    }

                    &:nth-child(9).digit-2::before,
                    &:nth-child(10).digit-2::before,
                    &:nth-child(11).digit-2::before,
                    &:nth-child(12).digit-2::before,
                    &:nth-child(13).digit-2::before,
                    &:nth-child(14).digit-2::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-2::after,
                    &:nth-child(10).digit-2::after,
                    &:nth-child(11).digit-2::after,
                    &:nth-child(12).digit-2::after,
                    &:nth-child(13).digit-2::after,
                    &:nth-child(14).digit-2::after {
                        content: '0';
                    }

                    &:nth-child(9).digit-3::before,
                    &:nth-child(10).digit-3::before,
                    &:nth-child(11).digit-3::before,
                    &:nth-child(12).digit-3::before,
                    &:nth-child(13).digit-3::before,
                    &:nth-child(14).digit-3::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-3::after,
                    &:nth-child(10).digit-3::after,
                    &:nth-child(11).digit-3::after,
                    &:nth-child(12).digit-3::after,
                    &:nth-child(13).digit-3::after,
                    &:nth-child(14).digit-3::after {
                        content: '3';
                    }

                    &:nth-child(9).digit-4::before,
                    &:nth-child(10).digit-4::before,
                    &:nth-child(11).digit-4::before,
                    &:nth-child(12).digit-4::before,
                    &:nth-child(13).digit-4::before,
                    &:nth-child(14).digit-4::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-4::after,
                    &:nth-child(10).digit-4::after,
                    &:nth-child(11).digit-4::after,
                    &:nth-child(12).digit-4::after,
                    &:nth-child(13).digit-4::after,
                    &:nth-child(14).digit-4::after {
                        content: '4';
                    }

                    &:nth-child(9).digit-5::before,
                    &:nth-child(10).digit-5::before,
                    &:nth-child(11).digit-5::before,
                    &:nth-child(12).digit-5::before,
                    &:nth-child(13).digit-5::before,
                    &:nth-child(14).digit-5::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #404040, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-5::after,
                    &:nth-child(10).digit-5::after,
                    &:nth-child(11).digit-5::after,
                    &:nth-child(12).digit-5::after,
                    &:nth-child(13).digit-5::after,
                    &:nth-child(14).digit-5::after {
                        content: '5';
                    }

                    &:nth-child(9).digit-6::before,
                    &:nth-child(10).digit-6::before,
                    &:nth-child(11).digit-6::before,
                    &:nth-child(12).digit-6::before,
                    &:nth-child(13).digit-6::before,
                    &:nth-child(14).digit-6::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-6::after,
                    &:nth-child(10).digit-6::after,
                    &:nth-child(11).digit-6::after,
                    &:nth-child(12).digit-6::after,
                    &:nth-child(13).digit-6::after,
                    &:nth-child(14).digit-6::after {
                        content: '6';
                    }

                    &:nth-child(9).digit-7::before,
                    &:nth-child(10).digit-7::before,
                    &:nth-child(11).digit-7::before,
                    &:nth-child(12).digit-7::before,
                    &:nth-child(13).digit-7::before,
                    &:nth-child(14).digit-7::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-7::after,
                    &:nth-child(10).digit-7::after,
                    &:nth-child(11).digit-7::after,
                    &:nth-child(12).digit-7::after,
                    &:nth-child(13).digit-7::after,
                    &:nth-child(14).digit-7::after {
                        content: '7';
                    }

                    &:nth-child(9).digit-8::before,
                    &:nth-child(10).digit-8::before,
                    &:nth-child(11).digit-8::before,
                    &:nth-child(12).digit-8::before,
                    &:nth-child(13).digit-8::before,
                    &:nth-child(14).digit-8::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #404040, 10px 0px 0px 0px #f0f0f0, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-8::after,
                    &:nth-child(10).digit-8::after,
                    &:nth-child(11).digit-8::after,
                    &:nth-child(12).digit-8::after,
                    &:nth-child(13).digit-8::after,
                    &:nth-child(14).digit-8::after {
                        content: '8';
                    }

                    &:nth-child(9).digit-9::before,
                    &:nth-child(10).digit-9::before,
                    &:nth-child(11).digit-9::before,
                    &:nth-child(12).digit-9::before,
                    &:nth-child(13).digit-9::before,
                    &:nth-child(14).digit-9::before {
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #404040, 6px 0px 0px 0px #404040, 8px 0px 0px 0px #f0f0f0, 10px 0px 0px 0px #404040, 12px 0px 0px 0px #f0f0f0, 14px 0px 0px 0px #f0f0f0;
                    }

                    &:nth-child(9).digit-9::after,
                    &:nth-child(10).digit-9::after,
                    &:nth-child(11).digit-9::after,
                    &:nth-child(12).digit-9::after,
                    &:nth-child(13).digit-9::after,
                    &:nth-child(14).digit-9::after {
                        content: '9';
                    }

                    &.start,
                    &.end {
                        width: 6px;
                    }

                    &.start::before,
                    &.end::before {
                        bottom: 9px;
                        box-shadow: 2px 0px 0px 0px #404040, 4px 0px 0px 0px #f0f0f0, 6px 0px 0px 0px #404040;
                    }

                    &.mid {
                        width: 10px;

                        &::before {
                            bottom: 9px;
                            box-shadow: 2px 0px 0px 0px #f0f0f0, 4px 0px 0px 0px #802020, 6px 0px 0px 0px #f0f0f0, 8px 0px 0px 0px #802020, 10px 0px 0px 0px #f0f0f0;
                        }
                    }
                }
            }
        }
    }
    .loading-wave {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #111;
        z-index: 1000;
    }
}
</style>