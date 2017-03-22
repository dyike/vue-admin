<template>
  <div class="charts">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 图表统计</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="charts">
      <h3>Pie Basic</h3>
        <vue-highcharts :options="options" ref="pieCharts"></vue-highcharts>
    </section>
  </div>
</template>

<script>
  import VueHighcharts from 'vue2-highcharts'
  export default {
      components: {
          VueHighcharts
      },
      data() {
        return {
          options: {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Contents of Highsoft\'s weekly fruit delivery'
            },
            subtitle: {
                text: '3D donut in Highcharts'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Delivered amount',
                data: [
                    ['Bananas', 8],
                    ['Kiwi', 3],
                    ['Mixed nuts', 1],
                    ['Oranges', 6],
                    ['Apples', 8],
                    ['Pears', 4],
                    ['Clementines', 4],
                    ['Reddish (bag)', 1],
                    ['Grapes (bunch)', 1]
                ]
            }]
        }
      }
    }
  }
</script>
