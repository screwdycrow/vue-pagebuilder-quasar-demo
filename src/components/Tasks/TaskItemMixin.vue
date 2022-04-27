
<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "TaskItemMixin",
  props:{task: Object},
  created() {

  },
  methods:{
    toggleDoneClick(){
      this.toggleDone(this.task);
    },

    ...mapActions('tasks',[
      "toggleDone",
      "putTask",
    ])
  }
}
</script>

<style scoped>

</style>
