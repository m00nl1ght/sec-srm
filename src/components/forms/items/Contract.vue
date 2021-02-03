<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="contract.number.label"
        :name="contract.number.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-9">
      <v-text-field
        :label="contract.url.label"
        :name="contract.url.name"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contract'],

  methods: {
    onChange() {
        this.$emit('onChange', event.target)
    }
  }
}
</script>