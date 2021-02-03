<template>
  <v-app>
    <Appbar />

    <Sidebar />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Appbar from '@/components/app/Appbar'
import Sidebar from '@/components/app/Sidebar'
import Footer from '@/components/app/Footer'

export default {
  components: {
    Appbar, Sidebar, Footer
  },

  data: () => ({

  }),
};
</script>