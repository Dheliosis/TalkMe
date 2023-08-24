<script setup>
const props = defineProps({
    progressBarLabel: {
        type: String,
        required: false,
    },
    progress: {
        type: String,
        required: false,
    },
});
const { progressBarLabel, progress } = props;
</script>

<template>
    <div class="mb-1 text-base font-medium dark:text-white" v-if="progressBarLabel">
        {{ progressBarLabel }}</div>
    <div class="w-full bg-gray-200 rounded-full h-2 m-auto dark:bg-gray-700">
        <div class="bg-primary-500 h-2 rounded-full" :style="`width: ${progress}%`"></div>
    </div>
</template>