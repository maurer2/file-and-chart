<template>
  <div class="table">
    <h2>Table</h2>
    <table class="table">
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
      const entryKeysUnique = this.tableData
        .map((tableRow) => Object.keys(tableRow))
        .flat()
        .filter((key, index, entryKeysWithDuplicates) => entryKeysWithDuplicates.indexOf(key) === index);

      return entryKeysUnique;
    }
  },
  methods: {
    getTd(content, fieldName) {
      console.log('dqwdqw', content.name);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
