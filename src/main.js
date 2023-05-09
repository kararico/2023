import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

import { gsap } from "gsap";
import gsapScrollTrigger from "./plugins/ScrollTrigger";
import ScrollPlugin from './plugins/ScrollEvent';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDQsTthMjSgug3-QVNNmkA_c7ze28XhHcE",
    authDomain: "portfolio-29071.firebaseapp.com",
    projectId: "portfolio-29071",
    storageBucket: "portfolio-29071.appspot.com",
    messagingSenderId: "206752202787",
    appId: "1:206752202787:web:0b222e9a1e83c62ba0f196",
    measurementId: "G-4MEEF16HWP"
}


firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const collectionRef = db.collection('collectionName');

// const auth = firebase.auth();

export { db };
import 'reset-css';
import mitt from 'mitt';
//vue form 
import * as  Vuelidate from '@vuelidate/validators';

const emitter = mitt();
const app = createApp(App)



app.use(router)
app.use(store)
app.use(gsapScrollTrigger)
app.use(ScrollPlugin)
app.use(Vuelidate);
app.config.globalProperties.emitter = emitter

app.mount('#app')
 