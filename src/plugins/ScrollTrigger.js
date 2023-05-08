import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { createApp } from "vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  install: (app) => {
    app.config.globalProperties.$gsap = gsap;
    app.config.globalProperties.$scrollTrigger = ScrollTrigger;
  },
};