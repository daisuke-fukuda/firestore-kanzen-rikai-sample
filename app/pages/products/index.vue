<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.name" cols="4">
        <v-card class="mx-auto" max-width="344">
          <nuxt-link to="/products/hoge">
            <v-img
              to="/products/hoge"
              :src="card.photoURL"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
          </nuxt-link>

          <v-card-title v-text="card.name"></v-card-title>

          <v-card-subtitle>
            {{ card.description }}
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
  name: string;
  description: string;
  photoURL: string;
}

interface Data {
  cards: Card[];
}

export default Vue.extend({
  data: (): Data => ({
    cards: [],
  }),
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      const snapshot = await this.$db.collection('products').get();
      snapshot.forEach((doc) => {
        this.cards.push(doc.data() as Card);
      });
    },
  },
});
</script>
