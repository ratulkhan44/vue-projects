<template>
  <AppHeader />
  <DcHeros />
</template>

<script>
import AppHeader from "./components/AppHeader";
import DcHeros from "./components/DcHeros";
export default {
  name: "App",
  components: { AppHeader, DcHeros },
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
