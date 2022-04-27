
import {markRaw} from "vue";
import PageBuilderSpacer from "src/vuepagebuilder/components/PageBuilderSpacer";
import {createPageBuilder} from "src/vuepagebuilder";
import PageBuilderColumns from "src/vuepagebuilder/components/PageBuilderColumns";
import {baseStyleProps} from "src/vuepagebuilder/props/BaseStyleProps";
import TaskList from "components/Tasks/TaskList";
import AddTask from "components/Tasks/AddTask";
import PageListEditor from "src/vuepagebuilder/components/core/PageListEditor";
import PageForm from "src/vuepagebuilder/components/core/PageForm";

export default createPageBuilder({
    'PageBuilderSpacer': {
        isGlobal: true,
        component: markRaw(PageBuilderSpacer),
        label: 'Spacer',
        description: 'Spacer',
        props: {space: {type: String, default: '10px'}}
    },


    'PageBuilderColumns': {
        isGlobal: true,
        component: markRaw(PageBuilderColumns),
        label: 'Columns',
        description: 'Generates page builders for  multiple columns',
        props: {
            ...baseStyleProps,
            cols: {
                type: 'number', label: 'Στείλες', default: 1, rules: [
                    (v) => (Number(v) > 0 || 'απαιτείτε αριθμός μεγαλύτερος του 0 ')
                ]
            }
        }
    },

    'TaskList': {
        isGlobal: true,
        component: markRaw(TaskList),
        label: 'List with Tasks',
        description: 'Shows your tasks',
        props: {
            ...baseStyleProps,
            mode: {
                type: 'select', label: 'mode', default: 'all', items: [
                    {value: 'all', text: 'All Tasks'},
                    {value: 'done', text: 'All Done Tasks'},
                    {value: 'pending', text: 'All Pending Tasks'},
                    {value: 'overdue', text: 'All Overdue Tasks'},
                ]
            }
        }
    },
    'AddTask': {
        component: markRaw(AddTask),
        label: 'Add Task',
        description: 'Add Task Form',
        props: {
            ...baseStyleProps,
        }
    },

    'PageListEditor': {
        isGlobal: true,
        component: markRaw(PageListEditor),
        label: 'Manage Pages',
        description: 'Delete/Edit Pages',
        props: {
            ...baseStyleProps,
        }
    },
    'PageForm': {
        isGlobal: true,
        component: markRaw(PageForm),
        label: 'Add Custom Page',
        description: 'Adds Custom Page to Page Builder',
        props: {
            ...baseStyleProps,
        }
    },


});
