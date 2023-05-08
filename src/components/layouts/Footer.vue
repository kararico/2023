<template>
    <footer v-show="footerTarget">
        <button class="btn_top" type="button">top</button>
        <div class="container">
            <p class="copyright">© 2023. Heo jung won. All rights reserved.</p>
            <a class="logo" href="javascript:;">
                <img src="@/assets/images/logo-w.png" alt="PRO-V">
            </a>
        
        </div>
    </footer>
</template>
<script>
export default {
    name: "Header",
    data(){
        return{
            footerTarget: false
        }
    },  
    mounted() { 
      this.$nextTick(() => {
        this.emitter.on("loading-checkmessage",
          msg => {
              this.footerTarget = msg; 
          }
        );
      });
    },
}
</script>
<style lang="scss" scoped>
footer {
    position: relative;
    padding: 2em 0;
    background: #000;
    text-align: center;
    border: 0;

    .btn_top {
        display: none;
        position: fixed;
        right: 94px;
        bottom: 40px;
        z-index: 100;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        background: transparent;

        &:before {
            content: '';
            display: block;
            width: 8px;
            height: 18px;
            margin: 0 auto 10px;
            background: url(@/assets/images/ic_top.svg)no-repeat;
        }
    }
    .logo{
        position: relative;
        display: block;
        width: 12em;
        margin-left:auto;
        img{
            max-width: 100%;
        }
    }
    .container {
        position: relative;
        display: flex;
        justify-content: flex-start;
        margin: 0 3em; 
        .copyright {
            display: flex;
            align-items: center;
            font-size: 1em;
            font-weight: 500;
            color: #fff;
            opacity: .5;
            text-transform: uppercase;
        }

    }

}</style>