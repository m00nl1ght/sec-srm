<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="title.number"
      ></v-text-field>
    </div>

    <div class="col-9">
      <v-text-field
        :label="title.url"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],

  methods: {
    onChange() {
        this.$emit('onChange', event.target)
    }
  }
}
</script>