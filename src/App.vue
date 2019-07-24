<template>
  <div id="app">
    <h1 class="title">File-and-chart</h1>

    <section class="section">
      <h2 class="subtitle">File input</h2>
      <Form @fileUpload='handleFormChange' />
    </section>

    <section class="section" v-if="showTable">
      <h2 class="subtitle">Data table</h2>
      <Table :tableData="inputData" />
    </section>

    <section class="section" v-if="showCharts">
      <h2 class="subtitle">Charts</h2>
      <Charts :chartData="inputData" />
    </section>
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
  computed: {
    showTable() {
      return this.inputData.length > 0;
    },
    showCharts() {
      return this.inputData.length > 0;
    }
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
html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

<style lang="scss" scoped>
#app {
  border: 1px solid black;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.section {
  padding: 1.5rem 1rem;
  border-top: 1px solid black;
}

.title {
  margin: 2rem 1rem;
}

.subtitle {
  margin-top: 0;
  margin-bottom: 1rem;
}

</style>
