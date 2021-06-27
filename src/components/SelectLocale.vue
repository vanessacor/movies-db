<template>
  <form>
    <label for="select language"></label>
    <select v-model="selectedLocale" id="" @change="setLocale">
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        locale: this.$i18n.locale,
        selectedLocale: "",
      };
    },

    methods: {
      setLocale() {
        this.$i18n.locale = this.selectedLocale;
        localStorage.setItem('locale', this.selectedLocale)
      },
    },
  };
</script>

<style>
</style>