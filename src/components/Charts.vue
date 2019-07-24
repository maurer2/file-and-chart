<template>
  <div class="charts">
    <h2>Charts</h2>
    <div class="wrapper">
      <div class="chart-container">
        <h3>Bar chart</h3>
        <canvas ref="barchart" />
      </div>
      <div class="chart-container">
        <h3>Circle chart</h3>
        <canvas ref="circlechart" />
      </div>
    </div>
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
      barChart: undefined,
      circleChart: undefined,
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
  methods: {
    createBarChart() {
      this.barChart = new Chart(this.$refs.barchart, {
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
            hoverBorderColor: 'red',
          }],
          labels: this.chartLabels,
        },
      });
    },
    createCircleChart() {
      this.circleChart = new Chart(this.$refs.circlechart, {
        type: 'doughnut',
        options: {
          cutoutPercentage: 40,
          legend: {
            display: false,
          },
        },
        data: {
          datasets: [{
            label: 'Cat ages',
            type: 'doughnut',
            data: this.chartValues,
            hoverBorderColor: 'red',
          }],
          labels: this.chartLabels,
        },
      });
    }
  },
  mounted() {
    this.createBarChart();
    this.createCircleChart();
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.chart-container {
  position: relative;
  flex-basis: 480px;
  flex-shrink: 0;
  flex-grow: 0;
}

</style>
