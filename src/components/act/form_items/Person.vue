<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="label.surname"
        :name='nameKey + "-surname"'
        :value="value.surname"
        @input="onChange"
        :rules="[rules.required]"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="label.name"
        :name='nameKey + "-name"'
        :value="value.name"
        @input="onChange"
        :rules="[rules.required, rules.counter]"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="label.patronymic"
        :name='nameKey + "-patronymic"'
        :value="value.patronymic"
        :rules="[rules.required]"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="label.position"
        :name='nameKey + "-position"'
        :value="value.position"
        @input="onChange"
        :rules="[rules.required]"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'value', 'nameKey'],

    data () {
      return {
        rules: {
            required: value => !!value || 'Required.',
            counter: value => value.length > 1 || 'Write full name',
        },
      }
    },

    methods: {
        onChange() {
            this.$emit('onChange', event.target)
        }
    }
}
</script>