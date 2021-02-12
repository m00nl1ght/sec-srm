<template>
  <button @click="onClick">Тест</button>
</template>

<script>
import {HTTP} from "@/plugins/axios"
export default {
  methods: {
    onClick() {
        this.$http.post('api/getuser')
    }
  }
}
</script>


