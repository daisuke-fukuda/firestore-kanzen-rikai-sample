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

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    displayName(): string {
      return this.$store.getters.getUser?.displayName as string;
    },
  },
  methods: {
    login(): void {
      this.$store.dispatch('signInWithGoogle');
    },
    logout(): void {
      this.$store.dispatch('signOut');
    },
  },
});
</script>
