<template>
  <v-sheet width="300" class="mx-auto">

    <v-card max-height="500" style="overflow-y: auto;">
      <v-card-title>To do :</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="task in   store.state.taskList  " :key="task.id">

            <template v-slot:prepend>
              <v-list-item-action start>
                <v-checkbox-btn :model-value="task.done" @click="store.commit('updateTaskDone', task)"></v-checkbox-btn>
              </v-list-item-action>
            </template>

            <v-list-item-title :class="{ done: task.done }">{{ task.title }}</v-list-item-title>

            <template v-slot:append>
              <v-btn icon="mdi-trash-can-outline" size="x-small" variant="tonal"
                @click="store.commit('deleteTask', task)"></v-btn>
            </template>

          </v-list-item>
        </v-list>

      </v-card-text>
    </v-card>

    <v-form ref="form" @submit.prevent @submit="handleAddTask" class="mt-5">
      <v-text-field v-model="inputValue" :counter="25" maxlength="25" label="Nouvelle tâche" required>
        <template v-slot:append>
          <v-btn icon="mdi-plus-circle" size="x-small" variant="tonal"></v-btn>
        </template>
      </v-text-field>

    </v-form>

  </v-sheet>
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

<style lang="scss">
.done {
  text-decoration: line-through;
}
</style>
