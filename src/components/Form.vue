<template>
  <form class="form" action="/" method="post">
    <label class="label" for="field">Upload a CSV-file</label>
    <input
      class="field"
      type="file"
      name="field"
      id="field"
      @change="handleChangeEvent"
    >
    <div class="button-group">
      <button class="button" type="button" @click="openCatsCSV">
        Cats
      </button>
      <button class="button" type="button" @click="openDogsCSV">
        Dogs
      </button>
    </div>
  </form>
</template>

<script>
import catsCSV from '../../csv/cats.csv';
import dogsCSV from '../../csv/dogs.csv';

export default {
  name: 'Form',
  props: {},
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

      fileReader.onload = () => {
        const results = fileReader.result;

        this.$emit('fileUpload', results);
      };

      fileReader.readAsText(file);
    },
    openCatsCSV() {
      this.$emit('fileUpload', catsCSV);
    },
    openDogsCSV() {
      this.$emit('fileUpload', dogsCSV);
    },
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
  border: 1px solid #d8d8d8;
}

// hide field visually
.field {
  position: absolute;
  left: -9999px;
  opacity: 0.01;
}

.button-group {
  display: flex;
  margin-top: 1rem;
  justify-content: center;
}

.button {
  margin: 0 0.5rem;
  padding: 0.25rem 0.5rem;
  background: whitesmoke;
}

</style>
