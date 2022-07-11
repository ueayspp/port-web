import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './scss/main.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBemTOj7NCoDWB3vTaLG9hx1v0YXtxTufc',
  authDomain: 'dear-diary-webapp.firebaseapp.com',
  projectId: 'dear-diary-webapp',
  storageBucket: 'dear-diary-webapp.appspot.com',
  messagingSenderId: '315225328041',
  appId: '1:315225328041:web:dc0c31e4c1e26c408ddcb8',
  measurementId: 'G-4WENDVWPY6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

createApp(App).use(router).mount('#app')
