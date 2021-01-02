<template>
	<div class="input-wrapper">
		<label class="input-label">{{ label }}</label>
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
		name: "inputText",
		inheritAttrs: false,
		props: ["label", "value"],
	};
</script>

<style lang="scss">
	.input-wrapper {
		display: flex;
		flex-direction: column;
	}
	.input {
		padding: 10px;
		width: 100%;
		font-size: 16px;
		box-shadow: none;
		outline: none;
		border: none;
		background-color: transparent;
		border-bottom: 2px solid $base-color-light;
		color: $base-color-light;
	}
	.input-label {
		margin-bottom: 5px;
		
	}
</style>