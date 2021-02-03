<template>
  <div class="d-flex">
    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.build"
        :main="checkboxBlock.checkboxArrMain.build"
        :sub="checkboxBlock.checkboxArrSub.build"
        v-model="build"
      />
    </div>
    
    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.warm"
        :main="checkboxBlock.checkboxArrMain.warm"
        :sub="checkboxBlock.checkboxArrSub.warm"
        v-model="warm"
      />
    </div>

    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.another"
        :main="checkboxBlock.checkboxArrMain.another"
        :sub="checkboxBlock.checkboxArrSub.another"
        v-model="another"
      />
    </div>
  </div>


</template>

<script>
import CheckboxCard from './items/CheckboxCard.vue'
import {mapState} from 'vuex'

export default {
  components: { CheckboxCard },

  data: () => ({
    build: [],
    warm: [],
    another: []
  }),

  methods: {
    onChange(prop) {
      console.log(prop.value)
    },

    onDrop(data) {
      console.log(data)
    }
  },

  computed: {
    ...mapState([
        'checkboxBlock'
    ]),
  }
}
</script>

<style scoped>
  .checkbox_w100 {
    width: 100%;
  }
</style>