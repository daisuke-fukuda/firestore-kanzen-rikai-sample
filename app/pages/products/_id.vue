<template>
  <v-container fluid>
    <v-btn to="/products" class="mb-5">
      戻る
    </v-btn>

    <v-card class="mx-auto" max-width="1200">
      <v-img
        :src="card.photoURL"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      ></v-img>

      <v-card-title v-text="card.name"></v-card-title>

      <v-card-subtitle>
        {{ card.description }}
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          カートに入れる
        </v-btn>
      </v-card-actions>
    </v-card>

    <h2 class="pt-5">購入者のレビュー</h2>

    <v-row dense>
      <v-col v-for="review in reviews" :key="review.title" :cols="12">
        <v-card class="mx-auto" max-width="1200">
          <v-card-title v-text="review.title"></v-card-title>

          <v-card-subtitle>
            {{ review.createdAt }}
          </v-card-subtitle>
          <v-card-text>{{ review.body }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            レビューを書く
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump',
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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

interface Review {
  user: string;
  title: string;
  createdAt: string;
  body: string;
}

export default defineComponent({
  setup(_, context) {
    const reviews: Review[] = [
      {
        user: 'テストユーザー',
        title: 'レビューたいとる',
        createdAt: '2020/XX/XX',
        body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        user: 'テストユーザー',
        title: 'Pre-fab homes',
        createdAt: '2020/XX/XX',
        body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        user: 'テストユーザー',
        title: 'Pre-fab homes',
        createdAt: '2020/XX/XX',
        body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
    ];

    const state = reactive({
      card: {} as Card,
      reviews,
      dialog: false,
    });

    onMounted(async () => {
      const id = context.root.$route.params.id;
      const snapshot = await context.root.$db
        .collection('products')
        .doc(id)
        .get();
      if (snapshot.exists) {
        state.card = snapshot.data() as Card;
      }
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
