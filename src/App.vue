<template>
  <div id="app">
    <h1>Headline</h1>

    <Form @fileUpload='handleFormChange' />

    <template v-if="inputData.length > 0">
      <Table :tableData="inputData" />
      <Charts :chartData="inputData" />
    </template>

  </div>
</template>

<script>
import { csvParse } from 'd3';

import Form from './components/Form.vue';
import Table from './components/Table.vue';
import Charts from './components/Charts.vue';

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
    Charts,
  },
  methods: {
    handleFormChange(inputData) {
      const inputParsed = csvParse(inputData);

      this.inputData = inputParsed;
    }
  },
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
