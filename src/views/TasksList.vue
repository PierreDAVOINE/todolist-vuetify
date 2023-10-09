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

      <v-sheet width="300" class="mx-auto">

        <v-form ref="form" @submit.prevent @submit="handleAddTask">
          <v-text-field v-model="inputValue" :counter="10" label="Nouvelle tâche" required></v-text-field>

        </v-form>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
const store = useStore();

import { ref } from "vue";
const inputValue = ref('');

const handleAddTask = () => {
  if (inputValue.value.length > 0) {
    store.commit("addTask", inputValue.value)
    inputValue.value = '';
  }
}

</script>
