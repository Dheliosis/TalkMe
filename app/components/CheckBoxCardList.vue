<script setup>
import Checkbox from './CheckboxCard.vue';

const props = defineProps(
	{
		inputs: Array
	}
)

</script>

<template>
	<ul class=" flex flex-wrap w-full gap-6">
		<Checkbox v-for="input in inputs" :title="input.title" />
	</ul>
</template>
