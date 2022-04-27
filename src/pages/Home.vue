<template>
  <q-page padding>
    <page-builder gui="main-page" ></page-builder>
  </q-page>
</template>

<script>
import PageBuilder from "src/vuepagebuilder/components/core/PageBuilder";
import {mapActions, mapMutations, mapState} from "vuex";
export default {
  components: {PageBuilder},
  created() {
    this.setPageName('Home')
    this.getGuis()
  },
  computed:{
    ...mapState("pageBuilder",[
      "loadingGuis"
    ])
  },
  methods:{
    ...mapActions('pageBuilder',[
      'getGuis'
    ]),
    ...mapMutations('pageBuilder',[
      "setPageName",
    ])
  }

  // name: 'PageName',
}
</script>
