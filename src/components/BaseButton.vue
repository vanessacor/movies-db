<template >
	<button class="button" :class="type" v-on:click="$emit('click', $event)">
        {{ title}}
    </button>
		
</template>

<script>
	export default {
        name: "baseButton",
		props: {
            title: {
                type:String,
                required:true
            },
            type: {
                type: String,
                required: true
            }
        },
	};
</script>

<style scope lang="scss">
    .button {
        padding: 10px;
		font-size: calc(18px + 0.5vw);
		border: none;
		border-radius: 3px;
    }
    
    .submit {
		background-color: $base-color-light;
		color: $base-color-dark;
	}

	.clear, .delete {
		background-color: $highlight-color;
		color: $base-color-light;
	}

</style>