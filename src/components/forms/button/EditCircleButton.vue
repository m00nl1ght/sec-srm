<template>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          dark
          color="amber"
          v-bind="attrs"
          v-on="on"
          @click="$emit('onClick')"
        >
          <v-icon dark>
            mdi-pencil
          </v-icon>
        </v-btn>
      </template>
      
      <span>Изменить запись</span>
    </v-tooltip>
</template>