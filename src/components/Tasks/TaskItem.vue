<template>
  <q-item clickable v-ripple @click="toggleDoneClick()">
    <q-item-section avatar top>
      <q-avatar icon="folder" color="primary" text-color="white" />
    </q-item-section>

    <q-item-section >
      <q-item-label lines="1">{{task.title}}</q-item-label>
      <q-item-label caption>{{task.description}}</q-item-label>
    </q-item-section>

    <q-item-section side>
      {{task.deadLine}}
    </q-item-section>
  </q-item>

</template>

<script>

import taskItemMixin from "components/Tasks/TaskItemMixin";

export default {
  name: "TaskItem",
  mixins:[taskItemMixin]

}
</script>

<style scoped>

</style>
