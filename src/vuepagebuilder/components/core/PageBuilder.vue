<template>
  <div :class="{'page-builder':true,'edit':editPage}" >
    <div class="component-wrapper"
         v-for="component in componentStructure(gui)"
    >
      <div v-if="editPage" class="options">
        <span class="label" @click="setActiveComponent({gui,component})">
          {{componentTypes[component.type].label}}
        </span>
        <div class="buttons">
<!--          <component-form :componentModel="component" :gui="gui"></component-form>-->
          <button class="button" @click="removeComponentClick(component.id)">
            <img :src="deleteIcon">
          </button>
          <button class="button" @click="moveComponentUpClick(component.id)">
            <img :src="upIcon">
          </button>
          <button class="button" @click="moveComponentDownClick(component.id)">
            <img :src="downIcon">
          </button>
        </div>
      </div>
      <div class="component">
        <component
          :is="componentTypes[component.type].component"
          v-bind="{component:component, ...component.props}">
        </component>
      </div>

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
.label{
  color:grey;
  cursor: pointer;
}
.edit {
  margin:2px;
  border: dotted grey 1px;
}

.edit .component {

}
.edit .buttons{
  margin-left: 10px;
  overflow: hidden;
  opacity: 0;
  display: flex;  border-radius: 50px; align-items: center; justify-content: end;
}
.edit .component-wrapper .options{
  display: flex;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 0.5em;

}
.edit .component-wrapper:hover > .options:first-of-type .buttons {
  opacity: 1;
  background: #eee;
  transition: all .25s ease-in;
}
.edit .component-wrapper {
  transition: 0.5s ease;
  padding: 10px;
  margin:5px;
  border: dotted grey 1px;


}

.button{
  background: none;
  border:none;
  opacity: 0.6;
}
.button:hover{
  background: #ccc;
  cursor: pointer;
}


</style>
