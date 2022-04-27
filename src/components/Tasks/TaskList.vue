<template>
  <q-card :style="styles" :class="classes">
    <q-list>
      <task-item v-for="task in taskView" :task="task" :key="task.id"></task-item>
    </q-list>
  </q-card>
</template>

<script>


import baseStyleMixin from "src/vuepagebuilder/components/BaseStyleMixin";
import TaskListMixin from "components/Tasks/TaskListMixin";

export default {
  name: "TaskList",
  mixins:[baseStyleMixin,TaskListMixin],

}
</script>

<style scoped>

</style>
