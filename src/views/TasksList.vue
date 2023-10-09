<template>
  <v-card>
    <v-card-title>To do :</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="task in store.state.taskList" :key="task.id">

          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn :model-value="task.done" @click="store.commit('updateTaskDone', task)"></v-checkbox-btn>
            </v-list-item-action>
          </template>

          <v-list-item-title>{{ task.title }}</v-list-item-title>

        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
const store = useStore();

</script>
