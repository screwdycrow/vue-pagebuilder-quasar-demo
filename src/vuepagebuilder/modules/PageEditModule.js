import _ from "lodash";
import pageBuilderModes from "src/vuepagebuilder/modules/PageBuilderModes";

export const pageEditModule = {
  namespaced:true,
  state:() =>({
    editMode:null,
    activeComponent:null,
    activeGui:null,
  }),
  getters:{
    activeComponent:(s)=>s.activeComponent
  },
  mutations:{
    setActiveComponent(state, {gui, component} ){
      if(component && gui){
        state.activeComponent = _.cloneDeep(component);
        state.activeGui = gui
      }else{
        state.activeComponent = null
        state.activeGui = null
      }
    },
  },
  actions:{
    updateComponent({state,commit,dispatch},{gui,component}){
      if(state.editMode === pageBuilderModes.global){
        commit('pageBuilderGlobals/updateComponent',{gui,component})
      }else{
        commit('pageBuilder/updateComponent',{gui,component})
      }
    },
  }
}
