<template>
  <div>
    <div class="header">
      <router-link class="header__link" :to="{name: 'act-dashboard'}">
        <v-btn outlined>Назад</v-btn>
      </router-link>

      <v-btn outlined color="orange darken-2" @click="onClick">
        <v-icon  class="header__icon">mdi-printer</v-icon>
        Печать
      </v-btn>
    </div>

    <v-divider class="header__divider"></v-divider>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      window.print()
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    max-width: 210mm;
    margin: 0 auto;
    padding: 10px;

    display: flex;
    justify-content: space-between;
  }

  .header__link {
    text-decoration: none;
  }

  .header__icon {
    margin-right: 10px;
  }

  @media print {
    .header {
      display: none;
    }

    .header__divider {
      display: none;
    }
  }
</style>