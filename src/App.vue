<template>
  <AppHeader />
  <router-view></router-view>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: { AppHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
