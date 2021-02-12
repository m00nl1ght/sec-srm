<template>
  <div class="row">
    <div class="col-6">
        <h3>Даты выполнения работ</h3>

        <v-text-field
            type="date"
            :label="datetime.from_date.label"
            :name="datetime.from_date.name"
            @input="onChange"
        ></v-text-field>

        <v-text-field
            type="date"
            :label="datetime.till_date.label"
            :name="datetime.till_date.name"
            @input="onChange"
        ></v-text-field>
    </div>

    <div class="col-6">
        <h3>Время выполнения работ</h3>

        <v-text-field
            type="time"
            :label="datetime.from_time.label"
            :name="datetime.from_time.name"
            @input="onChange"
        ></v-text-field>

        <v-text-field
            type="time"
            :label="datetime.till_time.label"
            :name="datetime.till_time.name"
            @input="onChange"
        ></v-text-field>

        <v-checkbox
            :label="datetime.weekend.label"
            :name="datetime.weekend.name"
            @change="onChangeCheckbox"
        ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
    props: ['datetime'],

    methods: {
    onChange() {
        this.$emit('onChange', event.target)
    },

    onChangeCheckbox() {
         this.$emit('onChangeCheckbox')
    }
  }
}
</script>