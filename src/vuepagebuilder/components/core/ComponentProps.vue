<template>
  <form class="component-form" v-if="component.props !== null">

    <div
      class="control"
      v-for="(item, key ) in selectedComponentProps">
      <label class="label">
        {{ item.label }}
      </label>
      <div class="field">
        <input class="input"
               v-on:change="updateComponentClick()"
               v-if="item.type!== 'select'"
               :type="item.type"
               v-model="component.props[key]"
        />
        <div class="select" v-if="item.type === 'select'">
          <select v-model="component.props[key]" v-on:change="updateComponentClick()">
            <option v-for="option in item.items" v-bind:value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import editIcon from "src/vuepagebuilder/assets/icons/edit_black_24dp.svg";
import addIcon from "src/vuepagebuilder/assets/icons/add_black_24dp.svg";
import {mapGetters, mapMutations} from "vuex";


export default {
  name: "ComponentProps",
  data: () => ({
    dialog: false,
    valid: true,
    editIcon: editIcon,
    addIcon: addIcon,
    component: {
      type: null,
      props: null,
    }
  }),
  created() {
    if (this.isEditMode) {
      this.component.type = this.componentModel.type;
    }
  },
  props: {
    isGlobal: Boolean,
  },
  watch: {
    componentModel() {
      this.component.type = this.componentModel.type
      this.componentSelectionChange()
    }
  },
  computed: {
    gui() {
      if (this.isGlobal) {
        return this.$store.state.pageBuilderGlobals.activeGui
      } else {
        return this.$store.state.pageBuilder.activeGui
      }
    },
    componentModel() {
      if (this.isGlobal) {
        return this.$store.getters['pageBuilderGlobals/activeComponent']
      } else {
        return this.$store.getters['pageBuilder/activeComponent']
      }
    },
    isEditMode() {
      return this.componentModel !== null
    },
    selectedComponentProps() {
      if (!this.component.type) return []
      return this.types[this.component.type].props
    },
    componentTypesKeys() {
      if (this.isGlobal) {
        return Object.keys(this.componentTypesGlobals)
      } else {
        return Object.keys(this.componentTypes)
      }
    },
    types() {
      if (this.isGlobal) {
        return this.componentTypesGlobals
      } else {
        return this.componentTypes
      }
    },
    ...mapGetters('pageBuilder', [
      'componentTypes'
    ]),
    ...mapGetters('pageBuilderGlobals',
      {componentTypesGlobals: 'componentTypes'}
    )
  },
  methods: {
    ...mapMutations('pageBuilder', [
      'addComponent',
      "updateComponent"
    ]),
    ...mapMutations('pageBuilderGlobals', {
        addComponentGlobal: 'addComponent',
        updateComponentGlobal: "updateComponent"
      }
    ),
    validate() {
      if (this.$refs.componentForm) {
        this.$refs.componentForm.validate();
      }
    },
    updateComponentClick() {
      if (this.isGlobal) {
        this.updateComponentGlobal({gui: this.gui, props: this.component.props, id: this.componentModel.id})
      } else {
        this.updateComponent({gui: this.gui, props: this.component.props, id: this.componentModel.id})
      }
    },
    addComponentClick() {
      if (this.isGlobal) {
        this.addComponentGlobal({gui: this.gui, type: this.component.type, props: this.component.props})
      } else {
        this.addComponent({gui: this.gui, type: this.component.type, props: this.component.props})

      }
      this.resetDialog()
    },
    resetDialog() {
      this.dialog = false;
      this.component.props = null;
      this.component.type = null;
    },
    componentSelectionChange() {
      this.component.props = null
      for (const [key, value] of Object.entries(this.selectedComponentProps)) {
        if (this.component.props === null) {
          this.component.props = {}
          this.component.props[key] = this.isEditMode ? this.componentModel.props[key] : value.default;
        } else {
          this.component.props[key] = this.isEditMode ? this.componentModel.props[key] : value.default;
        }
      }
    }
  }

}
</script>

<style scoped>

</style>
