<template>
  <div style="display: flex; align-content: center">
    <button v-if="!editPage"  @click="toggleEditPage()"> <img :src="editIcon" > </button>
    <button  v-if="editPage" @click="saveGuis()"> <img :src="saveIcon" > </button>
    <button v-if="editPage"  @click="cancelEditPage()"> <img :src="cancelIcon" > </button>
  </div>
</template>

<script>
import saveIcon from '../../assets/icons/save_black_24dp.svg'
import cancelIcon from '../../assets/icons/clear_black_24dp.svg'
import editIcon from '../../assets/icons/edit_black_24dp.svg'
import pageBuilderStoreMixin from "./PageBuilderStoreMixin";

export default {
  name: "ToggleEditPage",
  data:()=>({
    editIcon: editIcon,
    saveIcon: saveIcon,
    cancelIcon: cancelIcon
  }),
  mixins:[pageBuilderStoreMixin]
}
</script>

<style scoped>

</style>
