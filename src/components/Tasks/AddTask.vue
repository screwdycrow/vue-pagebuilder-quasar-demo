<template>
  <q-card>
    <q-card-section>
      <q-form>
        <q-input label="Task Title" texlabel="Title" v-model="task.title"></q-input>
        <q-input type="textarea" label="Description" v-model="task.description"></q-input>
        <q-input type="date" v-model="task.deadLine"/>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <q-btn @click="postTask(task)"> Add Task </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import AddTaskMixin from "./AddTaskMixin";

export default {
  name: "AddTask",
  mixins:[AddTaskMixin]
}
</script>

<style scoped>

</style>