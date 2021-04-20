<template>
  <div class="d-flex">
    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.build"
        :main="checkboxBlock.checkboxArrMain.build"
        :sub="checkboxBlock.checkboxArrSub.build"
        :value="checkboxValue.build"
        @onChange="(props) => onChange(props, 'build')"
      />
    </div>
    
    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.warm"
        :main="checkboxBlock.checkboxArrMain.warm"
        :sub="checkboxBlock.checkboxArrSub.warm"
        :value="checkboxValue.warm"
        @onChange="(props) => onChange(props, 'warm')"
      />
    </div>

    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.another"
        :main="checkboxBlock.checkboxArrMain.another"
        :sub="checkboxBlock.checkboxArrSub.another"
        :value="checkboxValue.another"
        @onChange="(props) => onChange(props, 'another')"
      />
    </div>
  </div>


</template>

<script>
import CheckboxCard from './items/CheckboxCard.vue'
import {mapState} from 'vuex'

export default {
  components: { CheckboxCard },


  methods: {
    onChange(value, index) {
      this.$store.dispatch('checkboxBlock/changedForm', {value, index})
    },

    onDrop(data) {
      console.log(data)
    }
  },

  computed: {
    ...mapState([
        'checkboxBlock'
    ]),

    checkboxValue() {
      return this.$store.getters['checkboxBlock/getCheckboxValue']
    }
  }
}
</script>

<style scoped>
  .checkbox_w100 {
    width: 100%;
  }
</style>