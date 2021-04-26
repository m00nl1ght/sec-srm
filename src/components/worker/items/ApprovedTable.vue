<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="workers"
      item-key="id"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Поиск"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
      }
    },
    computed: {
      headers () {
        return [
          {
            text: 'Фамилия',
            align: 'start',
            sortable: false,
            value: 'surname',
          },
          {
            text: 'Имя',
            value: 'name',
          },
          { text: 'Отчество', value: 'patronymic' },
          { text: 'Должность', value: 'position' },
          { text: 'Фирма', value: 'firm' },
        ]
      },
      workers() {
          return this.$store.getters['worker/getApproved']
      }
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search.toLocaleUpperCase()) !== -1
      },
    },
  }
</script>