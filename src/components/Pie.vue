<template>
  <div :class="Pie" id="pie" :style="{height: height,width:width}"></div>
</template>

<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
  export default {
    name: "Pie",
    data() {
      return {
        Pie: "pie",
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
            // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色
            color: ['#32A8E6', '#FF954A', '#45E2CF', '#EE5196', '#Eaf'],
            // 图表主标题
            title : {
                text: '某站点用户访问来源',// 主标题文本，支持使用 \n 换行
                // subtext: '纯属虚构',//副标题
                x:'center',//x轴方向对齐方式
                textStyle: { // 文本样式
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#fff',
                  top:"-16px"
                }
            },
           
            // 图例组件
            legend: {
                orient: 'horizontal',// 图例列表的布局朝向 水平排列：horizontal  垂直排列：vertical
                x : 'center',//x轴方向对齐方式
                // 图例项的 icon  值: 'circle'胖圆点, 'rect'长方形, 'roundRect'带圆角的长方形,
                //                   'triangle'三角形, 'diamond'菱形, 'pin'圆点, 'arrow'箭头, 'none'没有图标
                icon: 'pin', 
                bottom:0,
                textStyle: { // 文本样式
                  fontSize: 14,
                  color: '#fff'
                },
                // 图例的数据数组
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            calculable : true,
            series : [
                {
                    type: 'pie', // 内圈
                    name: '访问来源', // 系列名称，用于tooltip的显示，legend 的图例筛选
                    radius: ['40%', '20%'], // 饼图的半径 数组的第一项是内半径，第二项是外半径
                    center: ['50%', '40%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
                    hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果
                    // 图形样式
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },                  
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                }
            ],
             // 提示框组件
             tooltip : {
                trigger: 'item',// 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                textStyle: {
                  color: '#fff' // 文字颜色
                },
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
                // 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
                formatter: '{a} <br/>{b}: {c}万次 ({d}%)'
            },
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
      getpie() {
        var myChart = echarts.init(document.getElementById("pie"));
        return myChart
      },
      drawECharts() {
        // 基于准备好的dom，初始化echarts实例
        console.log(1111)
        let myChart = echarts.init(document.getElementById("pie"));
        myChart.setOption(this.option);
      }
    }
  };
</script>

<style scoped>
  .pie {
    width: 100%;
    height: 100%;
    border: 40px solid transparent;
    border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
    background: #18202d;
  }

  /* .pie-responsive {
    width: 100%;
    height: 310px;
    border: 5px solid transparent;
    border-image: url("~@/./assets/img/border_image.png") 30 30 stretch;
    background: #18202d;
  } */
</style>