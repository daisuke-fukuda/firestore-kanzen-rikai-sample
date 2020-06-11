<template>
  <div class="container">
    <p class="title is-1 is-spaced">user: {{ displayName }}</p>
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>

    <button class="button is-primary is-rounded" @click="logout">
      ログアウト
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    displayName() {
      return this.$store.getters.getUser
        ? this.$store.getters.getUser.displayName
        : ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('signInWithGoogle')
    },
    logout() {
      this.$store.dispatch('signOut')
    }
  }
}
</script>
