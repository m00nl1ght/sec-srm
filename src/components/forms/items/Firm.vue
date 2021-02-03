<template>
  <div class="row">
    <div class="col-6">
      <v-text-field
        :label="firm.form.label"
        :name="firm.form.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-6">
      <v-text-field
        :label="firm.name.label"
        :name="firm.name.name"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firm'],

    methods: {
        onChange() {
            this.$emit('onChange', event.target)
        }
    }
}
</script>