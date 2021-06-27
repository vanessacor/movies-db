<template>
  <div id="app">
    <app-header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>


<script>
  // @ is an alias to /src
  import AppHeader from "@/components/AppHeader.vue";

  export default {
    name: "Home",
    components: {
      AppHeader,
    },
    created() {
      const locale = localStorage.getItem("locale");
      if (locale) {
        this.$i18n.locale = locale;
      } else if (navigator.language) {
        this.$i18n.locale = navigator.language.substring(0, 2);
      }
    },
  };
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #dce2e7;
  }
  .main {
    padding-top: 20px;
    margin: 0 20px 80px 20px;
  }

  @media only screen and (min-width: 768px) {
    .main {
      max-width: 900px;
      margin: 0 auto;
    }
  }
</style>
