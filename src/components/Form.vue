<template>
  <form class="form" action="" method="">
    <h2>Form</h2>
    <label for="field">Upload file:</label>
    <input type="file" name="field" id="field" @change="handleChangeEvent" />
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

        this.$emit('fileUpload', results);
      };

      fileReader.readAsText(file);
    }
  },
};
</script>

<style scoped lang="scss">
.form {
  padding: 1rem;

}
</style>
