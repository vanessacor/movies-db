<template>
	<div>
		<label for="title">{{ label }}</label>
		<input
			class="input"
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
		/>
	</div>
</template>

<script>
	export default {
		name: "inputNumber",
		inheritAttrs: false,
		props: ["label", "value"],
	};
</script>