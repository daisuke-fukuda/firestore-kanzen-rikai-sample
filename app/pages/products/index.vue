<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card class="mx-auto" max-width="344">
          <nuxt-link to="/products/hoge">
            <v-img
              to="/products/hoge"
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
          </nuxt-link>

          <v-card-title v-text="card.title"></v-card-title>

          <v-card-subtitle>
            {{ card.subTitle }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn to="/products/hoge">
              詳細
            </v-btn>

            <v-spacer></v-spacer>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

interface Card {
  title: string;
  subTitle: string;
  src: string;
  flex: number;
}

interface Data {
  cards: Card[];
}

export default Vue.extend({
  data: (): Data => ({
    cards: [
      {
        title: 'Pre-fab homes',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 4,
      },
      {
        title: 'Favorite road trips',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 4,
      },
      {
        title: 'Best airlines',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 4,
      },
      {
        title: 'Best airlines',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 4,
      },
      {
        title: 'Best airlines',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 4,
      },
      {
        title: 'Best airlines',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 4,
      },
    ],
  }),
});
</script>
