<template>
  <div class="container">
    <p class="title is-1 is-spaced">
      user: {{ $store.getters.getDisplayName }}
    </p>
    <button class="button is-primary is-rounded" @click="login">
      ログイン
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login')
    }
  }
}
</script>
