<template>
  <div>
    <component :is="layout">
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import PrintLayout from '@/layouts/PrintLayout'

export default {
  name: 'App',
  data: () => ({
    //
  }),

  components: {
    EmptyLayout, MainLayout, PrintLayout
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
};
</script>