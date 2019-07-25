<template>
  <div class="charts">
    <div class="chart-container">
      <h3>Bar chart</h3>
      <canvas ref="barchart" />
    </div>
    <div class="chart-container">
      <h3>Circle chart</h3>
      <canvas ref="circlechart" />
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
          tooltips: {
            enabled: false
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
          tooltips: {
            enabled: true
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
  watch: {
    // watch for prop-change
    chartData() {
      this.createBarChart();
      this.createCircleChart();
    }
  },
  mounted() {
    this.createBarChart();
    this.createCircleChart();
  }
};
</script>

<style lang="scss" scoped>
.charts {
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
