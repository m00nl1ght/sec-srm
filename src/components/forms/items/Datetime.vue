<template>
  <div class="row">
    <div class="col-6">
        <h3>Даты выполнения работ</h3>

        <div class="d-flex">
        <v-text-field
            class="col-6"
            type="date"
            :label="label.from_date"
            :value="value.from_date"
            :name="nameKey + '-from_date'"
            @input="onChange"
        ></v-text-field>

        <v-text-field
            class="col-6"
            type="date"
            :label="label.till_date"
            :value="value.till_date"
            :name="nameKey + '-till_date'"
            @input="onChange"
        ></v-text-field>
        </div>
    </div>

    <div class="col-6">
        <h3>Время выполнения работ</h3>

        <div class="d-flex">
            <v-text-field
            class="col-6"
                type="time"
                :label="label.from_time"
                :value="value.from_time"
                :name="nameKey + '-from_time'"
                @input="onChange"
            ></v-text-field>

            <v-text-field
                class="col-6"
                type="time"
                :label="label.till_time"
                :value="value.till_time"
                :name="nameKey + '-till_time'"
                @input="onChange"
            ></v-text-field>

        </div>

        <v-checkbox
            class="ma-0"
            type="checkbox"
            :label="label.weekend"
            :value="value.weekend"
            @change="onChangeCheckbox"
        ></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
    props: ['label', 'value', 'nameKey'],

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