<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="person.surname.label"
        :name="person.surname.name"
        :value="person.surname.value"
        @input="onChange"
        :rules="[rules.required, rules.counter]"
        required
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="person.name.label"
        :name="person.name.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="person.patronymic.label"
        :name="person.patronymic.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="person.position.label"
        :name="person.position.name"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length >= 2 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }),

    props: ['person'],

    methods: {
        onChange() {
            this.$emit('onChange', event.target)
        }
    }
}
</script>