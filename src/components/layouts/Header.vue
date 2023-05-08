<template>
    <header :class="{ active : isActive }" >
        <div class="inner">
            <h1>
                <router-link to="/" tag="a">
                    <img src="@/assets/images/logo.svg" alt="">
                </router-link>
            </h1>
            <nav>
                <ul class="nav_list">
                    <li>
                        <router-link to="about" tag="a">ABOUT</router-link>
                    </li>
                    <li>
                        <router-link to="work" tag="a">WORK</router-link>
                    </li>
                    <li>
                        <router-link to="blog" tag="a">BLOG</router-link>
                    </li>
                    <li>
                        <router-link to="content" tag="a">CONTENT</router-link>
                    </li>
                </ul>
            </nav>
            <span class="linebar"></span>
        </div>
    </header>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { gsap, TimelineMax, Power0, Expo } from "gsap";

export default {
    name: "Header",
    data(){
        return{
            isActive: false
        }
    },  
    mounted() { 
      this.$nextTick(() => {
        this.emitter.on("loading-checkmessage",
          msg => {
              this.isActive = msg; 
              this.headerShow();
          }
        );
      });
    },
    methods: {
        headerShow(){
            const logo = document.querySelector( "h1" );
            const nav = document.querySelector( "nav" );
            const linebar = document.querySelector( ".linebar" );
            const headerNav = gsap.utils.toArray( [logo, nav] );
            headerNav.forEach( ( ele, index ) =>{
                gsap.set( ele, { opacity:0, y: 10 });
                gsap.to( ele, 0.3, { opacity:1, y:0,  ease:Power0.easeInOut,  delay: index * 0.25 });
            });
            gsap.set( linebar, { width:0 });
            gsap.to( linebar, 0.75, { width:100+"%", ease:Expo.easeOut, delay:0.75 });

        }
    }
   
}
</script>


<style lang="scss" scoped>
 header {
    opacity: 0;
  .inner{
    position: relative;
    margin: 2em  3em 0; 
    display: flex;
    justify-content: flex-start; 
    h1{
        a{ 
            display: inline-flex;
            @extend %en-font;
            color: #000;
            font-size: 1.5em;
            text-decoration: none;
            img{ width: 6em;}
            &:before{
                // content: '';
                display: inline-flex;
                width:20px;
                height: 20px;
                margin-right: 0.2em;
                background:url(
                    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAABCAYAAABXChlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAACPSURBVChTXVAJDsMgDOsrVpELiqb+/4c0DgStQ7JMYogNh2gdvg5VfXFCRIZaC6BOtnoNFpvaumNmwb/71Frrm8XvgYkker1/g9WzMOsohaOGNziRs5inDsAn8yEPengTapJ5bmdZ2Yv7VvfPN6AH2NJx7nOWPTf1/78hoqgxhzw3ZqYG1Dr/9ur3y8vMxgNZhcAUnR4xKgAAAABJRU5ErkJggg==
                )
            }
        }
    }
    nav{
        margin-left:auto;
        align-items: center;
        display: flex;
        .nav_list{
            li{
                display: inline-flex;
                margin-left: 1em;
                a{
                    font-size: 1.5em;
                    text-decoration: none;
                    font-weight: 600;
                    color: #000;
                    @extend %en-font;
                }
                &:first-child{ 
                    margin-left:0;
                }
            }
        }

    }
    .linebar{
        position: absolute;
        top:0; left:0;
        width: 100%;
        height: 0.1em;
        background: #757575;
        top:3em;
    }
  }

  &.active{ opacity: 1;}
 }

 
 </style>