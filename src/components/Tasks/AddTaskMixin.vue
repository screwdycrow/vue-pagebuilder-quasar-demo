
<script>
import {mapActions} from "vuex";
import Task from "components/Tasks/Task";

export default {
  name: "AddTaskMixin",
  data:()=>({
    task: new Task()
  }),
  methods:{
    ...mapActions('tasks',[
      "postTask"
    ])
  }

}
</script>

<style scoped>

</style>
