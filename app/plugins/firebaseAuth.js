import firebase from '~/plugins/firebase'

export default (context) => {
  const { store } = context

  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.commit('setUser', user)
      } else {
        store.commit('clearUser')
      }
      resolve()
    })
  })
}
