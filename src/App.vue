<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Form from './components/Form.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Form,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
