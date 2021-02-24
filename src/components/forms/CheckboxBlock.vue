<template>
  <div class="d-flex">
    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.build"
        :main="checkboxBlock.checkboxArrMain.build"
        :sub="checkboxBlock.checkboxArrSub.build"
        :value="checkboxBlock.checkBoxValue.build"
        @input="(props) => onChange(props, 'build')"
      />
    </div>
    
    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.warm"
        :main="checkboxBlock.checkboxArrMain.warm"
        :sub="checkboxBlock.checkboxArrSub.warm"
        :value="checkboxBlock.checkBoxValue.build"
        @input="(props) => onChange(props, 'warm')"
      />
    </div>

    <div class="col-4">
      <CheckboxCard 
        :title="checkboxBlock.checkboxHead.another"
        :main="checkboxBlock.checkboxArrMain.another"
        :sub="checkboxBlock.checkboxArrSub.another"
        :value="checkboxBlock.checkBoxValue.build"
        @input="(props) => onChange(props, 'another')"
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
  }),

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
  }
}
</script>

<style scoped>
  .checkbox_w100 {
    width: 100%;
  }
</style>