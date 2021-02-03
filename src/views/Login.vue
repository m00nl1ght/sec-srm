<template>
  <form class="form" @submit.prevent="login">
    <p class="h4 text-center mb-4">Sign in</p>
    <div class="grey-text">
      <v-text-field v-model="email" label="Your email" type="email"/>
      <v-text-field v-model="password" label="Your password" type="password"/>
    </div>
    <div class="text-center">
      <v-btn type="submit" outlined color="#1565C0">Logins</v-btn>
    </div>
  </form>

</template>

<script>
export default {
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    login() {
      this.$store.dispatch('user/retrieveToken', 'anytoken')
      .then(response => {
        console.log(response)
        if(response) {
          this.$router.push({name: 'home'})
        }
      })
    }
  },

  // computed: mapState([
  //   'user'
  // ])
}
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
    max-width: 500px;
    min-height: 100vh;
  }
</style>