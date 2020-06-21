<template>
  <div>
    <div v-if="$store.getters.isLogin">
      <p>
        <nuxt-link to="/products">商品一覧</nuxt-link>
      </p>
    </div>

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
      this.$store.dispatch('signInWithTwitter');
    },
    logout(): void {
      this.$store.dispatch('signOut');
    },
  },
});
</script>
