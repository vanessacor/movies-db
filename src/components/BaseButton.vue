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

<style scope>
    .button {
        padding: 10px;
		font-size: calc(18px + 0.5vw);
		border: none;
		border-radius: 3px;
    }
    
    .submit {
		background-color: #dce2e7;
		color: #191919;
	}

	.clear, .delete {
		background-color: #c10e0e;
		color: #dce2e7;
	}

</style>