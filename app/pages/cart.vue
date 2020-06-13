<template>
  <v-container fluid>
    <h1>カートに入っている商品</h1>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="12">
        <v-card class="mx-auto" max-width="800">
          <v-container fluid>
            <v-row>
              <v-col :cols="4">
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  max-width="200px"
                ></v-img>
              </v-col>
              <v-col :cols="8">
                <v-card-title v-text="card.title"></v-card-title>
                <v-card-subtitle>
                  {{ card.subTitle }}
                </v-card-subtitle>
                <v-card-text> 数量：{{ card.count }} </v-card-text>

                <v-card-actions>
                  <v-btn>削除</v-btn>
                  <v-btn>+</v-btn>
                  <v-btn>-</v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-btn to="/thanks">購入する</v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

interface Card {
  title: string;
  subTitle: string;
  src: string;
  count: number;
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
        count: 1,
      },
      {
        title: 'Favorite road trips',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        count: 1,
      },
      {
        title: 'Best airlines',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        count: 2,
      },
      {
        title: 'Best airlines',
        subTitle: 'testtesttest',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        count: 2,
      },
    ],
  }),
});
</script>
