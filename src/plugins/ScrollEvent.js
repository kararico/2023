export default {
    install(app) {
      app.mixin({
        data() {
          return {
            scrollTop: 0,
          };
        },
        mounted() {
          window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
          handleScroll() {
            this.scrollTop = window.pageYOffset;
          },
        },
      });
    },
  };