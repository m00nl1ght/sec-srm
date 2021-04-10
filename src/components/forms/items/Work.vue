<template>
  <div class="row">
    <div class="col-6">
      <v-text-field
        :label="title.description"
        :value="value.description"
        name="work-description"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-6">
      <v-text-field
        :label="title.place"
        :value="value.place"
        name="work-place"
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