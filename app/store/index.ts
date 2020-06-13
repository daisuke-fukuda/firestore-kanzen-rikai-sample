import { GetterTree, ActionTree, MutationTree } from 'vuex';
import firebase from '~/plugins/firebase';

export const state = () => ({
  displayName: '',
  uid: '',
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  setUser(state, { displayName, uid }) {
    state.displayName = displayName;
    state.uid = uid;
  },
  clearUser(state) {
    state.displayName = '';
    state.uid = '';
  },
};

export const actions: ActionTree<RootState, RootState> = {
  autoSignIn({ commit }, payload) {
    commit('setUser', payload);
  },

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return new Promise((resolve) => {
      firebase.auth().signInWithRedirect(provider);
      resolve();
    });
  },

  signOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('clearUser');
      });
  },
};

export const getters: GetterTree<RootState, RootState> = {
  getUser: (state) => {
    return { displayName: state.displayName, uid: state.uid };
  },
  isLogin: (state) => {
    return !!state.uid;
  },
};
