<template >
  <button class="button" :class="type" v-on:click="$emit('click', $event)">
    {{ title }}
  </button>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
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

    &:hover {
      background-color: transparent;
      border: 2px solid $highlight-color;
      color: $base-color-light;
    }
  }

  .clear,
  .delete,
  .cancel {
    background-color: $highlight-color;
    color: $base-color-light;

    &:hover {
      background-color: transparent;
      border: 2px solid $base-color-light;
      color: $highlight-color;
    }
  }
</style>