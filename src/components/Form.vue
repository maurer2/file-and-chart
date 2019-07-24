<template>
  <form class="form" action="/" method="post">
    <label class="label" for="field">Upload a CSV-file</label>
    <input
      class="field"
      type="file"
      name="field"
      id="field"
      @change="handleChangeEvent"
    />
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {},
  data() {
    return {
      test: ''
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

        this.$emit('fileUpload', results);
      };

      fileReader.readAsText(file);
    }
  },
};
</script>

<style scoped lang="scss">
.form {
  position: relative;
  padding: 0;
}

.label {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: whitesmoke;
  border: 1px solid black;
}

.field {
  position: absolute;
  left: -9999px;
  opacity: 0.01;
}
</style>
