<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="person.surname.label"
        :name="person.surname.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="person.name.label"
        :name="person.name.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="person.patronymic.label"
        :name="person.patronymic.name"
        @input="onChange"
      ></v-text-field>
    </div>

    <div class="col-3">
      <v-text-field
        :label="person.position.label"
        :name="person.position.name"
        @input="onChange"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({

    }),

    props: ['person'],

    methods: {
        onChange() {
            this.$emit('onChange', event.target)
        }
    }
}
</script>