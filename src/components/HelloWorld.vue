<template>
  <v-row
    align="center"
    justify="space-around"
  >
    <v-btn depressed>
      Normal
    </v-btn>
    <v-btn
      depressed
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      depressed
      color="error"
    >
      Error
    </v-btn>
    <v-btn
      depressed
      disabled
    >
      Disabled
    </v-btn>
  </v-row>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],

      formElem: ["Номер ТЗ", "Номер БСАП", "Номер договора", "Наличие ППР, ТК"]
    }),
  }
</script>

<style scoped>
</style>
