import firebase from '~/plugins/firebase'

export const state = () => ({
  uid: '',
  displayName: ''
})

export const mutations = {
  setUid(state, uid) {
    state.uid = uid
  },
  setDisplayName(state, displayName) {
    state.displayName = displayName
  }
}

export const actions = {
  login({ commit }) {
    console.log('login action')
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const user = result.user
        console.log('success : ', user)
        commit('setUid', user.uid)
        commit('setDisplayName', user.displayName)
      })
      .catch(function(error) {
        const errorCode = error.code
        console.log('error : ', errorCode)
      })
  }
}

export const getters = {
  getUid(state) {
    return state.uid
  },
  getDisplayName(state) {
    return state.displayName
  }
}
