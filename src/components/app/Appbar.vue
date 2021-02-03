<template>
  <v-app-bar app clipped-left>
    <h1>Tittle</h1>

    <v-spacer></v-spacer>

    <div v-if="!isAuth">
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

  data: function() {
    return ({
      isAuth: this.$store.state.user.isAuth,
      fullname: this.$store.state.user.fullname
    })
  },

  methods: {
    login() {
      this.$router.push('login')
    },

    logout() {
      this.$router.push('logout')
    }
  },
}
</script>