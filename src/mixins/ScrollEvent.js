const scrollMixin = {
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    data() {
      return {
        scrollY: 0,
      };
    },
    methods: {
      handleScroll() {
        this.scrollY = window.scrollY;
      },
    },
     beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    
  };

  export default scrollMixin;