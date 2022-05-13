<template>
  <div :class="{'page-builder':true,'edit':editPage}" >
    <div class="component-wrapper"
         v-for="component in componentStructure(gui)"
    >
      <div v-if="editPage" class="options">
        <span style="color:grey;" @click="setActiveComponent({gui,component})">
          {{componentTypes[component.type].label}}
        </span>
        <div style="display: flex; border-radius: 50px; justify-content: end;">
<!--          <component-form :componentModel="component" :gui="gui"></component-form>-->
          <button class="" @click="removeComponentClick(component.id)">
            <img @click="setActiveComponent" :src="deleteIcon">
          </button>
          <button class="" @click="moveComponentUpClick(component.id)">
            <img :src="upIcon">
          </button>
          <button class="" @click="moveComponentDownClick(component.id)">
            <img :src="downIcon">
          </button>
        </div>
      </div>
      <component
          :is="componentTypes[component.type].component"
          v-bind="{component:component, ...component.props}">
      </component>
    </div>
    <component-form v-if="editPage" :gui="gui"></component-form>
  </div>
</template>

<script>



import pageBuilderMixin from "./PageBuilderMixin";
import pageBuilderStoreMixin from "./PageBuilderStoreMixin";

export default {
  name: "PageBuilder",
  mixins:[pageBuilderStoreMixin,pageBuilderMixin, ]
}
</script>

<style scoped>
.edit {
  border: dotted gray 1px;
}

.edit .component-wrapper .options{
  display: none;
}
.edit .component-wrapper:hover > .options:first-child {
  display: flex;  justify-content: space-between;
  transition-delay: 1s;
}
.edit .component-wrapper {
  padding: 10px;
}

</style>
