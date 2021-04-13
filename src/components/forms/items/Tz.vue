<template>
  <div class="row">
    <div class="col-3">
      <v-text-field
        :label="title.number"
        :value="value.number"
        name="tz-number"
        @input="onChange"
        :rules="[rules.required]"
      ></v-text-field>
    </div>

    <div class="col-9">
      <v-text-field
        :label="title.url"
        :value="value.url"
        name="tz-url"
        @input="onChange"
        :rules="[rules.required]"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "value"],

  data() {
    return {
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },

  methods: {
    onChange() {
      this.$emit("onChange", event.target);
    },
  },
};
</script>