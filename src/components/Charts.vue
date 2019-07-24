<template>
  <div class="chart">
    <h2>Charts</h2>

    <pre>{{ chartLabels }}</pre>
    <h3>Bar chart</h3>
    <canvas ref="barchart" />
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'Charts',
  props: {
    chartData: Array,
  },
  data() {
    return {
    }
  },
  computed: {
    chartLabels() {
      const names = this.chartData.map((tableRow) => tableRow.name);

      return names;
    },
    chartValues() {
      const age = this.chartData.map((tableRow) => tableRow.age);

      return age;
    }
  },
  methods: {},
  mounted() {
    const barChart = new Chart(this.$refs.barchart, {
      type: 'horizontalBar',
      options: {
        legend: {
          display: false
        },
      },
      data: {
        datasets: [{
          label: 'Cat ages',
          type: 'horizontalBar',
          data: this.chartValues,
        }],
        labels: this.chartLabels,
      },
    });
  }
};
</script>

<style scoped lang="scss">

</style>
