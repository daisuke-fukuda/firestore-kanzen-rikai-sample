<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="product in products" :key="product.name" cols="4">
        <v-card class="mx-auto" max-width="344">
          <nuxt-link :to="`/products/${product.id}`">
            <v-img
              :src="product.photoURL"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            ></v-img>
          </nuxt-link>

          <v-card-title v-text="product.name"></v-card-title>

          <v-card-subtitle>
            {{ product.description }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn :to="`/products/${product.id}`">
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
import { Product, ProductRepository } from '~/services/product';

export default defineComponent({
  setup(_, context) {
    const state = reactive({
      products: [] as Product[],
    });

    onMounted(async () => {
      const productRepository = new ProductRepository(context.root.$db);
      state.products = await productRepository.findAll();
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
