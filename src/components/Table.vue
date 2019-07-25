<template>
  <table class="table">
    <thead>
      <tr>
        <template v-for="tableColumn in tableColumns">
          <th :key="tableColumn">
            {{ tableColumn | capitalizeFirstLetter }}
          </th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in numberOfRows" :key="'row-' + row">
        <template v-for="tableColumn in tableColumns">
          <td :key="tableColumn">
            {{ tableData[row - 1][tableColumn] }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
import flatten from 'lodash/flatten';

export default {
  name: 'Table',
  filters: {
    capitalizeFirstLetter(newString) {
      if (newString === undefined || newString.length === 0) {
        return '';
      }

      return `${newString.charAt(0).toUpperCase()}${newString.slice(1)}`;
    },
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    numberOfRows() {
      return this.tableData.length;
    },
    /*
    numberOfColumns() {
      const fieldsEachEntry = this.tableData.map((tableRow) => Object.keys(tableRow).length);
      const largestNumberOfEntries = Math.max.apply(null, fieldsEachEntry);

      return largestNumberOfEntries;
    },
    */
    tableColumns() {
      const keysUniqueNested = this.tableData.map(tableRow => Object.keys(tableRow));
      const keysUniqueFlat = flatten(keysUniqueNested);
      const keysUnique = keysUniqueFlat.filter((key, index, keysWithDuplicates) => keysWithDuplicates.indexOf(key) === index);

      return keysUnique;
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid black;

  thead tr {
    &:nth-child(odd) {
      background: whitesmoke;
    }
  }

  tbody tr {
    &:nth-child(even) {
      background: whitesmoke;
    }
  }

  th,
  td {
    padding: 0.5rem;
    border-left: 1px solid black;
  }

  td {
    border-top: 1px solid black;
  }
}
</style>
