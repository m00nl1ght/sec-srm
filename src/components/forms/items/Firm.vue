<template>
  <div class="row">
    <div class="col-6">
      <v-text-field
        :label="title.form"
        :value="value.form"
        name="firm-form"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-6">
      <v-text-field
        :label="title.name"
        :value="value.name"
        name="firm-name"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'value'],

    methods: {
        onChange() {
            this.$emit('onChange', event.target)
        }
    }
}
</script>