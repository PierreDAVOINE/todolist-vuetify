<template>
  <v-app theme="myLight" class="rounded rounded-md">

    <v-app-bar title="My Work App" :elevation="2" color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item prepend-icon="mdi-playlist-check" title="To-do list" value="todolist" to="/"
          color="secondary"></v-list-item>
        <v-list-item prepend-icon="mdi-clock-check-outline" title="Pomodoro" value="pomodoro" to="/pomodoro"
          color="secondary"></v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="d-flex align-center justify-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<style lang="scss" setup></style>
