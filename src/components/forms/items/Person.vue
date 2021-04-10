<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="label.surname"
        :name='nameKey + "-surname"'
        :value="value.surname"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="label.name"
        :name='nameKey + "-name"'
        :value="value.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="label.patronymic"
        :name='nameKey + "-patronymic"'
        :value="value.patronymic"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="label.position"
        :name='nameKey + "-position"'
        :value="value.position"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'value', 'nameKey' ],

    methods: {
        onChange() {
            this.$emit('onChange', event.target)
        }
    }
}
</script>