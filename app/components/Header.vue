<script setup>
const props = defineProps({
    progress1: {
        type: String,
        required: true,
    },
    progress2: {
        type: String,
        required: true,
    },
    progress3: {
        type: String,
        required: true,
    },
    full: {
        type: Boolean,
        required: true,
    },
});
const { progress1, progress2, progress3, full } = props;

</script>

<template>
    <header class="mx-24 fixed top-0 w-[100vw]">
        <nav class="bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center max-w-screen-xl">
                <img src="@/public/img/talkme.png" class="mr-3 h-6" alt="TalkMe Logo" />
                <div class="justify-between grow grid gap-4 grid-cols-5" id="mobile-menu-2">
                    <span class="flex w-3 h-3 bg-primary-500 rounded-full justify-self-end"></span>
                    <ProgressBar :progress="`${progress1}`"></ProgressBar>
                    <ProgressBar :progress="`${progress2}`"></ProgressBar>
                    <ProgressBar :progress="`${progress3}`"></ProgressBar>
                    <span :class="`flex w-3 h-3 ${full ? 'bg-primary-500' : 'bg-gray-600'} rounded-full`"></span>
                </div>
            </div>
        </nav>
    </header>
</template>