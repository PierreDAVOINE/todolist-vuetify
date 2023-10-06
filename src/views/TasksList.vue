import TasksList from '@/views/TasksList.vue';
<template>
  <v-card>
    <v-card-title>Ma to-do list journalière</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="task in tasks" :key="task.id">
          <v-list-item-content>
            <v-list-item-title>{{ task.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const tasks = computed(() => {
  return store.state.taskList;
});


</script>
