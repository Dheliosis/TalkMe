<script setup>
const props = defineProps(
	{
		title: String,
		subtitle: String,
		chiffre: String
	}
)
</script>

<template>
	<li class="w-[15rem] justify-center items-center">
		<input type="radio" :id="title" name="hosting" :value="title" class="hidden peer" required>
		<label :for="title"
			class="flex justify-center w-full p-5 text-black bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:text-dark hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:border-primary-500 peer-checked:bg-primary-50">

			<div class="flex flex-col justify-center">
				<p class="text-center text-base font-semibold">{{ title }}</p>
				<p class="text-center text-sm">{{ subtitle }}</p>
				<p class="text-center text-xs text-gray-500">{{ chiffre }}</p>
			</div>
		</label>
	</li>
</template>
