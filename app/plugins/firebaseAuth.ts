import { Middleware } from '@nuxt/types';
import firebase from '~/plugins/firebase';

const firebaseAuth: Middleware = (context) => {
  const { store } = context;

  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.commit('setUser', user);
      } else {
        store.commit('clearUser');
      }
      resolve();
    });
  });
};

export default firebaseAuth;
