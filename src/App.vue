<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/layouts/Header.vue'
  import Footer from './components/layouts/Footer.vue'
  import Loading from './components/layouts/Loading.vue'
  
</script>
<template>
    <Header></Header> 
    <RouterView />
    <Footer></Footer> 
    <Loading v-if="isLoading"></Loading>
   
</template>
<script>
  export default {
    components: {
      Header,
      Footer,
      Loading
    },

    data() { 
      return {
        isLoading: false,
        message: false,
      }
    },
    created() {
      this.isLoading = true;
    },
    mounted() { 
      this.$nextTick(() => {
       
      });
    },
  }

</script>

<style lang="scss" >
body{ background:#e2e2e2; }
@import url('https://fonts.cdnfonts.com/css/roboto'); //영문
@import url('https://cdn.jsdelivr.net/npm/noto-sans-kr@0.1.1/styles.min.css'); //국문
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'); //국문 
  html{ font-size:16px; }
  // @import url(@/assets/scss/reset.scss); 
</style> 
