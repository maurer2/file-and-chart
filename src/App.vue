<template>
  <div id="app">
    <Form @fileUpload='handleFormChange' />

    <template v-if="inputData.length > 0">
      <h1>Debug</h1>
      {{ inputData }}
      <Table :tableData="inputData" />
    </template>

  </div>
</template>

<script>
import * as d3 from 'd3';

import Form from './components/Form.vue';
import Table from './components/Table.vue';

export default {
  name: 'app',
  data() {
    return {
      inputData: [],
    }
  },
  components: {
    Form,
    Table,
  },
  methods: {
    handleFormChange(inputData) {
      const inputParsed = d3.csvParse(inputData);

      this.inputData = inputParsed;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
