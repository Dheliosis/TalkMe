<script setup>
const props = defineProps(
	{
		title: String,
	}
)
</script>

<template>
	<li class="w-1/5">
		<input type="checkbox" :id="title" value="" class="hidden peer" required="">
		<label :for="title"
			class="inline-flex items-center justify-between w-full p-5 text-black font-bold bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-500 hover:text-dark dark:peer-checked:text-gray-300 peer-checked:text-black peer-checked:bg-primary-50 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div class="block">
				<div class="w-full text-sm">{{ title }}</div>
			</div>
		</label>
	</li>
</template>
