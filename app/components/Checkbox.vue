<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
});
const { label, description } = props;
</script>

<template>
    <div class="flex">
        <div class="flex items-center h-5">
            <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                class="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:text-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <div class="ml-2 text-sm">
            <label for="helper-checkbox" class="font-medium text-font-primary dark:text-gray-300 hover:cursor-pointer"
                v-if="label">{{ label
                }}</label>
            <p id="helper-checkbox-text" class="text-xs font-normal text-font-secondary dark:text-gray-300"
                v-if="description">{{
                    description }}</p>
        </div>
    </div>
</template>