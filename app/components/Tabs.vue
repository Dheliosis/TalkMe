<script setup>
import { Tabs } from 'flowbite';

const props = defineProps({
    steps: {
        type: Array[String],
        required: true,
    },
});
const { steps } = props;

// initialize components based on data attribute selectors
onMounted(() => {
    let tabElements = [];

    // create an array of objects with the id, trigger element (eg. button), and the content element
    steps.forEach(element => {
        tabElements.push({
            id: element,
            triggerEl: document.querySelector(`#${element}-tab`),
            targetEl: document.querySelector(`#${element}`)
        })
    });

    // options with default values
    const options = {
        defaultTabId: steps[0],
        activeClasses: 'text-primary-500 hover:text-primary-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
        inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
        onShow: () => {
            console.log('tab is shown');
        }
    };

    /*
    * tabElements: array of tab objects
    * options: optional
    */
    const tabs = new Tabs(tabElements, options);
})
</script>

<template>
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 hidden">
        <ul class="flex flex-wrap mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabExample"
            role="tablist">
            <li class="mr-2" role="presentation" v-for="step in steps">
                <button
                    class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    :id="step + '-tab'" type="button" role="tab" :aria-controls="step" aria-selected="false">{{
                        step.charAt(0).toUpperCase() + step.slice(1) }}</button>
            </li>
        </ul>
    </div>
    <div id="tabContentExample">
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
            aria-labelledby="profile-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                    class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking
                another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling.</p>
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel"
            aria-labelledby="dashboard-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                    class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking
                another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling.</p>
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel"
            aria-labelledby="settings-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                    class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking
                another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling.</p>
        </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel"
            aria-labelledby="contacts-tab">
            <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                    class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking
                another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
                the content visibility and styling.</p>
        </div>
    </div>
</template>