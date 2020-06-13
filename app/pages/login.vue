<template>
  <div>
    <p>user: {{ displayName }}</p>

    <v-btn v-if="$store.getters.isLogin" color="warning" @click="logout">
      ログアウト
    </v-btn>
    <v-btn v-else color="primary" @click="login">
      ログイン
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    displayName() {
      return this.$store.getters.getUser
        ? this.$store.getters.getUser.displayName
        : '';
    },
  },
  methods: {
    login() {
      this.$store.dispatch('signInWithGoogle');
    },
    logout() {
      this.$store.dispatch('signOut');
    },
  },
};
</script>
