<template>
  <AppHeader />
  <!-- <DcHeros /> -->
  <Calendar />
</template>

<script>
import AppHeader from "./components/AppHeader";
// import DcHeros from "./components/DcHeros";
import Calendar from "./components/Calendar";
export default {
  name: "App",
  components: { AppHeader, Calendar },
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
