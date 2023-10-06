<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Menu"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="Ma to-do list journalière" :elevation="2"></v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <router-view />
    </v-main>
  </v-layout>
</template>

<style lang="scss" setup></style>
