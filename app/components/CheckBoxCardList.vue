<script setup>
import Checkbox from './CheckboxCard.vue';

const props = defineProps(
	{
		inputs: Array
	}
)

</script>

<template>
	<ul class=" flex flex-wrap w-full gap-3">
		<Checkbox v-for="(input, index) in inputs" :title="input.title" :subtitle="input.subtitle" :index="index" />
	</ul>
</template>
