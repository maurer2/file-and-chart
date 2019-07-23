<template>
  <form class="form" action="" method="">
    <label for="field">Upload file:</label>
    <input type="file" name="field" id="field" @change="handleChangeEvent" />

    <template v-if="uploadedJSON.length > 0">
      <pre>{{ uploadedJSON }}</pre>
    </template>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {},
  data() {
    return {
      uploadedJSON: {},
    }
  },
  methods: {
    handleChangeEvent(event) {
      const [file] = event.target.files;

      if (file.type !== 'application/json') {
        return;
      }

      this.parseJsonFromFile(file);
    },
    parseJsonFromFile(file) {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const results = fileReader.result;
        const parsedResults = JSON.parse(results);

        this.uploadedJSON = parsedResults;
      };

      fileReader.readAsText(file);
    }
  },
};
</script>

<style scoped lang="scss">
.form {
  padding: 1rem;
  border: 1px solid black;
}
</style>
