import firebase from 'firebase';
import Vue from 'vue';

declare module '@nuxt/types' {
  interface Context {
    $firebase: typeof firebase;
    $db: firebase.firestore.Firestore;
  }
  interface NuxtAppOptions {
    $firebase: typeof firebase;
    $db: firebase.firestore.Firestore;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $firebase: typeof firebase;
    $db: firebase.firestore.Firestore;
  }
}

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  });
}

Vue.prototype.$firebase = firebase;
Vue.prototype.$db = firebase.firestore();

export default firebase;
