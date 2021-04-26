<template>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          dark
          color="indigo"
          v-bind="attrs"
          v-on="on"
          @click="$emit('onClick')"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      
      <span>Добавить сотрудника</span>
    </v-tooltip>
</template>