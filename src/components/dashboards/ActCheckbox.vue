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
import {mapState} from 'vuex'
import CheckboxCard from '@/components/forms/items/CheckboxCard.vue'

export default {
  components: { CheckboxCard },
  props: ['item'],

  data: function() {
    return {
      build: this.item.build,
      warm: this.item.warm,
      another: this.item.another
    }
  },

  computed: {
    ...mapState([
        'checkboxBlock'
    ]),
  }
}
</script>