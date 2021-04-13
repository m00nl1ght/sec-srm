<template>
  <v-app-bar app clipped-left>
    <h1>Tittle</h1>

    <v-spacer></v-spacer>

    <div v-if="!isLoggedIn">
      <v-btn  @click.prevent="login" href="#">
        <v-icon>mdi-import</v-icon>
        <span class="new">Войти</span>
      </v-btn>
    </div>

    <div v-else  class="d-flex align-center">
      <div class="mr-5">
        <div>Вы вошли как:</div>
        <div>{{ fullname }}</div>
      </div>
      
      <v-btn @click.prevent="logout" href="#">
        <v-icon>mdi-export</v-icon>
        <span>Выйти</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>



<script>
  export default {
    data: () => ({
      drawen: null,
      right: null,

    }),

    methods: {
      login() {
        this.$router.push({name: 'login'})
      },

      logout() {
        this.$router.push({name: 'logout'})
      }
    },

    computed: {
      isLoggedIn() {
        return this.$store.getters['user/isLoggedIn']
      },

      fullname() {
        return this.$store.state.user.fullname
      }
    },

    created: function () {
      if(this.$store.state.user.token){
        this.$store.dispatch('user/getUser')
      }
    }
  }
</script>