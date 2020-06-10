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

      <v-btn icon to="/cart">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
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

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'index',
          to: '/'
        },
        {
          icon: 'mdi-shopping',
          title: '商品一覧',
          to: '/products'
        },
        {
          icon: 'mdi-cart',
          title: 'カート',
          to: '/cart'
        }
      ],
      title: 'Firestore sample'
    }
  }
}
</script>
