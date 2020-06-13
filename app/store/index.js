import firebase from '~/plugins/firebase'

export const state = () => ({
  displayName: '',
  uid: ''
})

export const mutations = {
  setUser(state, { displayName, uid }) {
    state.displayName = displayName
    state.uid = uid
  },
  clearUser(state) {
    state.displayName = ''
    state.uid = ''
  }
}

export const actions = {
  autoSignIn({ commit }, payload) {
    commit('setUser', payload)
  },

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return new Promise((resolve) => {
      firebase.auth().signInWithRedirect(provider)
      resolve()
    })
  },

  signOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('clearUser')
      })
  }
}

export const getters = {
  getUser: (state) => {
    return { displayName: state.displayName, uid: state.uid }
  },
  isLogin: (state) => {
    return !!state.uid
  }
}
