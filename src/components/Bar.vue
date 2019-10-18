<template>
  <div :class="Bar" id="bar" :style="{height: height,width:width}"></div>
</template>

<script>
  // 引入基本模板
  let echarts = require("echarts/lib/echarts");
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  require('echarts/lib/component/markPoint')
  export default {
    name: "Bar",
    data() {
      return {
        Bar: "bar",
        curWidth: 0,

      };
    },
    props: {
      //父组件需要传递的参数：id，width，height，option
      id: {
        type: String
      },
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: "200px"
      },
      option: {
        type: Object,
        //Object类型的prop值一定要用函数return出来，不然会报错。原理和data是一样的，
        //使用闭包保证一个vue实例拥有自己的一份props
        default() {
          return {
            // 标题
            title: {
              // 标题文本
              text: "文章成就统计",
              // 标题文本样式
              textStyle: {
                color: "#fff"
              },
              // 标题位置
              x: "center"
            },
            // 图形布局
            grid: {
              // 距离底部高度
              bottom: "20"
            },
            // 横轴
            xAxis: {
              show: false,
              type: "category",
              data: ["Github 提交：\n1141", "Github Star数：\n269", "掘金点赞量：\n1508", "掘金关注者：\n234"],
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
            // 纵轴
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
            // 图形系列
            series: [
              {
                // 图类型
                type: "bar",
                // 数据
                data: [1141, 269, 1508, 234],
                // 文本
                label: {
                  show: true,
                  position: "top",
                  color: "#fff",
                  formatter: "{b}"
                },
                
                // 柱条样式
                itemStyle: {
                  color: "deepskyblue"
                },
                zlevel: 1
              }
            ]
          };
        }
      }
    },
    beforeMount() {
      console.log(this.height)
    },

    mounted() {
      this.drawECharts();
    },
    methods: {
      getbar() {
        var myChart = echarts.init(document.getElementById("bar"));
        return myChart
      },
      drawECharts() {
        // 基于准备好的dom，初始化echarts实例
        console.log(1111)
        let myChart = echarts.init(document.getElementById("bar"));
        myChart.setOption(this.option);
      }
    }
  };
</script>

<style scoped>
  .bar {
    width: 100%;
    height: 100%;
    border: 40px solid transparent;
    border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
    background: #18202d;
  }

  /* .bar-responsive {
    width: 100%;
    height: 310px;
    border: 5px solid transparent;
    border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
    background: #18202d;
  } */
</style>