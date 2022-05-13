<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "PageBuilderMutationsMixin",
  computed: {
    ...mapState('pageBuilder', [
      "editPage",
      "pageName"
    ]),
    ...mapGetters('pageBuilder', [
      "componentStructure",
      "componentTypes",
    ])
  },
  methods: {
    ...mapActions('pageBuilder', [
      'saveGuis',
      'getGuis'
    ]),
    ...mapMutations('pageBuilder', [
      'setActiveComponent',
      "toggleEditPage",
      "cancelEditPage",
      "moveComponentUp",
      "moveComponentDown",
      "removeComponent",
      "removeComponentChildGuis",
      "initGui"
    ])
  }
}
</script>

<style scoped>

</style>
