<template>
  <v-card>
    <v-card-title>
      <label class="checkbox_w100 py-3 ml-3" :for="title">
        <input 
        type="checkbox" 
        class="mr-3"
        :id="title" 
        :value="title"
        @change="activate()"
        >{{ title }}
      </label>
    </v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-list>
      <v-list-item class="list__item" v-for="(val, name) in main" :key="name">
        <v-checkbox
          v-model="checked"
          :label="val"
          :value="name"
          :disabled="!isShowing">
        ></v-checkbox>
      </v-list-item>
    </v-list>

    <v-card-subtitle>Подтип выполняемых работ</v-card-subtitle>

    <v-divider class="mx-4"></v-divider>

    <v-list>
      <v-list-item class="list__item" v-for="(val, name) in sub" :key="name">
        <v-checkbox
          v-model="checked"
          :label="val"
          :value="name"
                    :disabled="!isShowing">
        ></v-checkbox>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>


import { toggle } from '@/components/mixins/toggle'

export default {
  props: ['title', 'main', 'sub', 'value'],
  mixins: [toggle],

  data: function() {
    return {
      checkedItem: this.value,
    }
  },

  computed: {
    checked: {
      get: function() {
        return this.value
      },
      set(val) {
        this.$emit('onChange', val)
      }

    }
  },

  methods: {
    activate: function() {
      this.toggleShow()

      if(!this.isShowing) {
        this.$emit('input', [])
        this.checkedItem = []
      }
    },

    onChange() {
      this.$emit('input', this.checkedItem)
    }
  },

}
</script>

<style lang="scss" scoped>
  .checkbox_w100 {
    width: 100%;
  }

  .list__item {
    min-height: 0;

    &:hover {
      background: chartreuse;
    }
  }
</style>