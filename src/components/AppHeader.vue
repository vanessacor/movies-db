<template>
  <header id="appHeader">
    <h1>Movies DB</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/movies">Movies</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'appHeader',
  }
</script>

<style scoped>
  #appHeader {
    background-color: rgba(8, 8, 8, 0);
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
  color: #2c3e50;
}

  #nav a.router-link-exact-active {
  color: #42b983;
}

</style>>

