import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'

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

export const auth = firebase.auth()
export const db = firebase.firestore()

console.log( db );