<template>
  <form @submit.prevent="submit" class="form">
    <p class="h4 text-center mb-4">Sign up</p>
    <div class="grey-text">
      <v-text-field v-model="form.name" label="Your name" type="text" required/>
      <v-text-field v-model="form.email" label="Your email" type="email" required/>
      <v-text-field v-model="form.password" label="Confirm your email" icon="exclamation-triangle" type="text" required/>
      <v-text-field v-model="form.confirmpassword" label="Your password" icon="lock" type="password" required/>
    </div>

    <div class="text-center">
      <v-btn color="primary" type="submit">Register</v-btn>
    </div>
  </form>
</template>

<script>

export default {
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    }
  }),

  methods: {
    submit() {
      
    }
  }
}
</script>

<style scoped>
  .form{
    max-width: 500px;
    margin: 0 auto;
  }
</style>