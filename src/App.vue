<template>
  <div id="app">
    <ScrollTextAnimation />
  </div>
</template>

<script>
import ScrollTextAnimation from './components/ScrollTextAnimation.vue';

export default {
  name: 'App',
  components: {
    ScrollTextAnimation,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
</style>
