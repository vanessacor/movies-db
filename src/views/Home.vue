<template>
  <div class="home">
    <h2>{{ $t("message") }}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {  },
  };
</script>

<style lang="scss">
  body {
    background-color: $base-color-dark;
    color: $base-color-light;
  }
</style>