<template>
  <v-app theme="myLight" class="rounded rounded-md">
    <v-app-bar title="Ma to-do list journalière" :elevation="2" color="primary"></v-app-bar>

    <v-navigation-drawer>
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

<style lang="scss" setup></style>
