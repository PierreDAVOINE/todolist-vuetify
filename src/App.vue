<template>
  <v-app theme="myLight" class="rounded rounded-md">
    <v-app-bar title="Ma to-do list journalière" :elevation="2" color="primary"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Menu"></v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="d-flex align-center justify-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss" setup></style>
