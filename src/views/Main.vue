<script setup>
import Visual from './Main/Visual.vue'
import Works from './Main/Works.vue'
import Blogs from './Main/Blogs.vue' 
import Contents from './Main/Contents.vue'  
</script>

<template>
  <main>
    <Visual />
    <Works />
    <Blogs />
    <Contents />
  </main>
</template>
<script> 
export default {
  components:{
    Visual,
    Works,
    Blogs,
    Contents
    // HotKeyWord
  },
  data() { 
        return {
        }
    },
    methods: {
    },
    mounted() {

    }
}
</script>


<style lang="scss" scoped>
</style>
