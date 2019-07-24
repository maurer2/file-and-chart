<template>
  <form class="form" action="" method="">
    <label for="field">Upload file:</label>
    <input type="file" name="field" id="field" @change="handleChangeEvent" />

    <template v-if="uploadedData.length > 0">
      <pre>{{ uploadedData }}</pre>
    </template>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {},
  data() {
    return {
      uploadedData: '',
    }
  },
  methods: {
    handleChangeEvent(event) {
      const [file] = event.target.files;

      if (file.type !== 'text/csv') {
        return;
      }

      this.getFileContent(file);
    },
    getFileContent(file) {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const results = fileReader.result;

        this.uploadedData = results;
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
