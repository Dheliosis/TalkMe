<script setup>
const props = defineProps({
    handler: {
        type: Function,
        required: false,
    },
    action: {
        type: String,
        required: false,
    }
});
const { action, handler } = props;
</script>

<template>
    <div class="flex">
        <div class="flex items-center h-5">
            <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2" v-on:click="handler">
                {{ action }}
                <svg class="w-4 h-4 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                </svg>
            </button>
        </div>
    </div>
</template>
