<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      <h1>これは何</h1>
      <p>
        Firestoreを使ったサンプルアプリケーションです
      </p>
      <ul>
        <li>
          author:
          <a href="https://github.com/daisuke-fukuda/">@daisuke-fukuda</a>
        </li>
        <li>
          <a
            href="https://github.com/daisuke-fukuda/firestore-kanzen-rikai-sample"
            >github repo</a
          >
        </li>
      </ul>
    </v-flex>

    <v-flex xs12 sm8 md6 class="pt-5">
      <h1>ページリンク</h1>
      <p>
        <nuxt-link to="/products">商品一覧</nuxt-link>
      </p>
    </v-flex>
  </v-layout>
</template>

<script lang="ts"></script>
