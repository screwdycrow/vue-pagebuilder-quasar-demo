import PageBuilder from "src/vuepagebuilder/components/core/PageBuilder";
import PageBuilderSpacer from "src/vuepagebuilder/components/PageBuilderSpacer";
import ToggleEditPage from "src/vuepagebuilder/components/core/ToggleEditPage";
import PageBuilderSideTools from "src/vuepagebuilder/components/core/PageBuilderSideTools";
import ComponentForm from "src/vuepagebuilder/components/core/ComponentForm";
import GlobalPageBuilder from "src/vuepagebuilder/components/core/GlobalPageBuilder";
import GlobalToggleEditPage from "src/vuepagebuilder/components/core/GlobalToggleEditPage";
import PageBuilderPage from "src/vuepagebuilder/components/core/PageBuilderPage";
import PageListEditor from "src/vuepagebuilder/components/core/PageListEditor";
import PageForm from "src/vuepagebuilder/components/core/PageForm";
import {pageBuilderModule} from "src/vuepagebuilder/modules/PageBuilderModule";
import {pagesModule} from "src/vuepagebuilder/modules/PagesModule";
import './styles/main.css'
import ComponentProps from "src/vuepagebuilder/components/core/ComponentProps";
/**
 * @desc Creates an object instance of the plugin with its required store module components.
 * @param componentTypes
 * @returns {{install: install}}
 */
export function createPageBuilder(componentTypes) {
    return {
        install: (app, {store,router}) => {
            app.component('PageBuilder', PageBuilder)
            app.component('ComponentProps', ComponentProps)
            app.component('PageBuilderSpacer', PageBuilderSpacer)
            app.component('PageBuilderToggleEdit', ToggleEditPage)
            app.component('PageBuilderSideTools', PageBuilderSideTools)
            app.component('ComponentForm', ComponentForm)
            app.component('GlobalPageBuilder', GlobalPageBuilder)
            app.component('GlobalToggleEditPage', GlobalToggleEditPage)
            app.component('PageBuilderPage',PageBuilderPage)
            app.component('PageListEditor',PageListEditor)
            app.component('PageForm',PageForm)
            registerComponents(app, componentTypes)
            store.registerModule('pageBuilder', pageBuilderModule)
            store.registerModule('pageBuilderGlobals', pageBuilderModule)
            store.registerModule('pageBuilderPages',pagesModule)
            store.dispatch('pageBuilderPages/getPages').then(()=>{
                const pages = store.getters['pageBuilderPages/routePages']
                pages.forEach(p=>router.addRoute(p))
            })
            store.commit('pageBuilderGlobals/setPageName', 'GLOBALS')
            store.commit('pageBuilder/setTypes', componentTypes)
            store.commit('pageBuilderGlobals/setTypes', getGlobalComponentTypes(componentTypes))
        }
    }
}

/**
 *
 * @param componentTypes
 * @returns {{}}
 */
function getGlobalComponentTypes(componentTypes) {
    const globalComponentTypes = {}
    for(const key in componentTypes){
        if(componentTypes[key].isGlobal  && componentTypes.hasOwnProperty(key)){
            globalComponentTypes[key] = componentTypes[key]
        }
    }
    return globalComponentTypes;
}

/**
 * @desc registers all component types so that they are globally accessible
 * @param app
 * @param componentTypes
 */
function registerComponents(app, componentTypes) {
    for (const key in componentTypes) {
        if (componentTypes.hasOwnProperty(key)) {
            console.log(componentTypes[key])
            app.component(key, componentTypes[key].component)
        }
    }
}


