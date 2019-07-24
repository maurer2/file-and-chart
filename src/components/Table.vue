<template>
  <div class="table">
    <h2>Table</h2>
    <table class="data-table">
      <tr>
        <template v-for="tableColumn in tableColumns">
          <th :key="tableColumn">{{ tableColumn }}</th>
        </template>
      </tr>
      <tr v-for="row in numberOfRows" :key="'row-' + row">
        <template v-for="tableColumn in tableColumns">
          <td :key="tableColumn">
            {{ tableData[row - 1][tableColumn] }}
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    tableData: Array,
  },
  data() {
    return {
      activeEntry: '',
    }
  },
  computed: {
    numberOfRows() {
      return this.tableData.length;
    },
    numberOfColumns() {
      const fieldsEachEntry = this.tableData.map((tableRow) => Object.keys(tableRow).length);
      const largestNumberOfEntries = Math.max.apply(null, fieldsEachEntry);

      return largestNumberOfEntries;
    },
    tableColumns() {
      const keysUnique = this.tableData
        .flatMap((tableRow) => Object.keys(tableRow))
        .filter((key, index, keysWithDuplicates) => keysWithDuplicates.indexOf(key) === index);

      return keysUnique;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.data-table {
  margin: auto;
}
</style>
