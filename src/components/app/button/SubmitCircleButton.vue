<template>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          dark
          color="indigo"
          v-bind="attrs"
          v-on="on"
          type="submit"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      
      <span>Добавить сотрудника</span>
    </v-tooltip>
</template>