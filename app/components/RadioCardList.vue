<script setup>
import Checkbox from './CheckboxCard.vue';

const props = defineProps(
	{
		inputs: Array
	}
)

</script>

<template>
	<ul class="w-full flex flex-wrap">
		<RadioCard v-for="input in inputs" :title="input.title" :subtitle="input.subtitle" :chiffre="input.chiffre" />
	</ul>
</template>
