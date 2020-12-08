<template>
  <header id="appHeader">
    <h1>Movies DB</h1>
    <nav>
        <a href="#">Movies</a>
        <a href="#">Directors</a>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'appHeader',
  }
</script>

<style scoped>
 header {
    background-color: rgba(8, 8, 8, 0);
    padding: 10px;
    margin-bottom: 50px;
  }

  nav {
    display: flex;
    flex-direction: row;
  };

  nav a {
    padding: 10px;
  }

</style>>

