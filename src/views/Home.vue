<template>
  <button @click="onClick">Тест</button>
</template>

<script>
import {HTTP} from '@/plugins/axios'
export default {

  methods: {
    onClick() {
        this.$http.post('api/act/test')
        
        .then(response => console.log(response))
    }
  }
}
</script>


