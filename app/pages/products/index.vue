<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.name" cols="4">
        <v-card class="mx-auto" max-width="344">
          <nuxt-link :to="`/products/${card.id}`">
            <v-img
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
            <v-btn :to="`/products/${card.id}`">
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
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs,
} from 'nuxt-composition-api';
import { Card } from '~/services/card';

export default defineComponent({
  setup(_, context) {
    const state = reactive({
      cards: [] as Card[],
    });

    onMounted(async () => {
      const snapshot = await context.root.$db.collection('products').get();
      snapshot.forEach((doc) => {
        state.cards.push({ ...doc.data(), id: doc.id } as Card);
      });
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
