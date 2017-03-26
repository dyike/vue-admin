<template>
  <div class="charts">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 图表统计</el-breadcrumb-item>
        <el-breadcrumb-item> 折线图</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips" style="color: red">
        特别声明: Highcharts 是一个用纯 JavaScript编写的一个图表库，仅免费提供给个人学习、个人网站，如果在商业项目中使用，请去Highcharts官网网站购买商业授权。或者您也可以选择其他免费开源图表插件，比如百度echarts。vue-admin不承担任何版权问题。
    </div>
    <section class="charts">
        <h3>Line Basic</h3>
        <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
    </section>
  </div>
</template>

<script>
  import VueHighcharts from 'vue2-highcharts'
  const asyncData = {
    name: 'Tokyo',
    marker: {
      symbol: 'square'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
      y: 26.5,
      marker: {
        symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
      }
    }, 23.3, 18.3, 13.9, 9.6]
  }
  export default{
      components: {
          VueHighcharts
      },
      data(){
        return {
          options: {
            chart: {
              type: 'spline'
            },
            title: {
              text: 'Monthly Average Temperature'
            },
            subtitle: {
              text: 'Source: WorldClimate.com'
            },
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
              title: {
                text: 'Temperature'
              },
              labels: {
                formatter: function () {
                  return this.value + '°';
                }
              }
            },
            tooltip: {
              crosshairs: true,
              shared: true
            },
            credits: {
              enabled: false
            },
            plotOptions: {
              spline: {
                marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
                }
              }
            },
            series: [{
                name: 'Installation',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
              }, {
                name: 'Manufacturing',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
              }, {
                name: 'Sales & Distribution',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
              }, {
                name: 'Project Development',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
              }, {
                name: 'Other',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }]
          }
        }
      }
  }
</script>

