<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="tz.number.label"
        :name="tz.number.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-9">
      <v-text-field
        :label="tz.url.label"
        :name="tz.url.name"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tz'],

  methods: {
    onChange() {
        this.$emit('onChange', event.target)
    }
  }
}
</script>