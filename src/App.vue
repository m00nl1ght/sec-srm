<template>
  <v-app>
    <v-app-bar app clipped-left>
      <Menu />
    </v-app-bar>

    <v-navigation-drawer app clipped>
      <!-- -->
    </v-navigation-drawer>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view class="col-8"></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'App',

  components: {
    Menu
  },

  data: () => ({
    //
  }),
};
</script>