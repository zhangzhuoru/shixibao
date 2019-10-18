<template>
  <div class="signindate">
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>

      <Bar ref="bar" :height='minh' :width='minw'></Bar>


      <Pie ref="pie" :height='minh' :width='minw'></Pie>
 
  </div>
</template>
<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/markPoint')
  //封装成组件引入
  import Bar from '@/components/Bar.vue'
  import Pie from '@/components/Pie.vue'

  export default {
    data() {
      return {
        minw: '1200px',
        minh: '600px'
      }
    },
    components: {
      Bar,
      Pie
    },
    created() {

    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            type: 'category',
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              // 横轴信息全部显示
              interval: 0
            }
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              // 横轴信息全部显示
              interval: 0
            },
          },
          series: [{
            name: '销量',
            type: 'bar',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            // 柱条样式
            itemStyle: {
              color: "deepskyblue"
            },

            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }

    },
    watch: {

    },
    mounted() {
      this.drawLine();
      var bar = this.$refs.bar.getbar();
      window.onresize = function () {
        bar.resize();
        //若有多个图表变动，可多写
      }
    }
  }
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
  .signindate {
    padding-top: 20px;
  }

  #myChart {
    background: #18202d;
  }
</style>