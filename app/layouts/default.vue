<template>
  <v-app>
    <!--    sidebar -->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--    header -->
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />

      <v-spacer></v-spacer>

      <v-btn class="mr-5" icon to="/cart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-menu v-if="$store.getters.isLogin" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar color="red">
              <span class="white--text headline">
                {{ iconName }}
              </span>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn v-else @click="login">ログイン</v-btn>
    </v-app-bar>

    <!--    content -->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <!--    footer-->
    <v-footer :fixed="false" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

interface Item {
  icon: string;
  title: string;
  to: string;
}

interface Data {
  drawer: boolean;
  items: Item[];
  title: string;
}

export default Vue.extend({
  data(): Data {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'index',
          to: '/',
        },
        {
          icon: 'mdi-shopping',
          title: '商品一覧',
          to: '/products',
        },
        {
          icon: 'mdi-cart',
          title: 'カート',
          to: '/cart',
        },
      ],
      title: 'Firestore sample',
    };
  },
  computed: {
    iconName(): string {
      const name: string = this.$store.getters.getUser.displayName as string;
      if (!name) {
        return '';
      }
      return name.substr(0, 1);
    },
  },
  methods: {
    login(): void {
      this.$store.dispatch('signInWithTwitter');
    },
    logout(): void {
      this.$store.dispatch('signOut');
      this.$router.push('/');
    },
  },
});
</script>
