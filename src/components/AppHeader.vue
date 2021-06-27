<template>
  <header id="appHeader">
    <h1>{{ $t("movies") }} DB</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Movies' }">{{ $t("movies") }}</router-link>
      <SelectLocale />
    </nav>
  </header>
</template>

<script>
  import SelectLocale from "./SelectLocale.vue";
  export default {
    components: { SelectLocale },
  };
</script>
<style scoped lang="scss">
  #appHeader {
    padding: 10px;
    margin-bottom: 50px;
  }

  #nav {
    display: flex;
    flex-direction: row;
    padding: 30px;
  }

  #nav a {
    padding: 10px;
    font-weight: bold;
    color: $base-color-dark;
  }
</style>>

