<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="title.number"
        :value="value.number"
        name="tz-number"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-9">
      <v-text-field
        :label="title.url"
        :value="value.url"
        name="tz-url"
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