<template>
  <div class="row">
    <div class="col-6">
      <v-text-field
        :label="work.description.label"
        :name="work.description.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-6">
      <v-text-field
        :label="work.place.label"
        :name="work.place.name"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ['work'],

  methods: {
      onChange() {
        this.$emit('onChange', event.target)
      }
  }
}
</script>