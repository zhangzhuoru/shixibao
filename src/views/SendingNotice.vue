<template>
  <div class="notice">
    
  </div>
</template>
<script>
  //封装成组件引入
  import Bar from '@/components/Bar.vue'
  import Pie from '@/components/Pie.vue'
  export default {
    data() {
      return {
        currentPage:1,   //默认页码为1
        pagesize:10,  //默认一页显示10条
        tableData: [{
              id: '001',
              department: '机械工程',
              major: '美工',
              date: '2016-05-02',
              name: '王军',
              address: '上海市普陀区金沙江路 1518 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批',
  
            }, {
              id: '002',
              department: '软件工程',
              major: '美工',
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
              class: '11班',
              job: 'UI设计',
              state: '未审批'
            }, {
              id: '003',
              department: '软件工程',
              major: '美工',
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              class: '12班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '004',
              department: '网安工程',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '31班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '005',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '12班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '006',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '007',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '008',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '美工',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批'
            },
          ],
        search: '',
        mheight:'25vh'
      }
    },
    created() {

    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange:function(size){   //一页显示多少条
            this.pagesize = size;
        },
      handleCurrentChange:function(currentPage){  //页码更改方法
          this.currentPage = currentPage;
      },
      // search(){
      //   this.tableData.filter(data => !this.search || data.title.toLowerCase().includes(search.toLowerCase()))
      // }
      addProject(){
      }
    },
    watch: {

    },
    components: {
      Bar,
      Pie
    },
    mounted() {
      var pie = this.$refs.pie.getpie();
      var bar = this.$refs.bar.getbar();
      window.onresize = function () {
        bar.resize();
        pie.resize();
        //若有多个图表变动，可多写
      }
    }
  }
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notice{
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between; 
  }
  /* 浏览器滚动条设置 */

/* width */

::-webkit-scrollbar {

width: 10px;

height: 10px;

}

/* Track */

::-webkit-scrollbar-track {

background: rgb(255, 255, 255);

border-radius: 8px;

}

/* Handle */

::-webkit-scrollbar-thumb {

background: rgb(201, 201, 202);

border-radius: 8px;

}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {

background: rgb(162, 162, 163);

}

/* 滚动条 */
 

  .notice /deep/.el-main[data-v-fae5bece] {
    line-height: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .notice /deep/ .btn-prev {
    background-color: #EFF6FF;
  }
  .notice /deep/ .el-pager li {
    background: #EFF6FF;
  }
  .notice /deep/ button:disabled {
    background-color: #EFF6FF;
    cursor: not-allowed;
}
  .notice /deep/.btn-next, .btn-prev {
    background-color: #EFF6FF;
    cursor: not-allowed;
}
  .pagination{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 32px;
    border: none;
    border-top: 1px solid #CADBF0;
    background-color: #EFF6FF;
  }
  .pagebox{
    width: 320px;
    position: absolute;
    left: 55%;
    top: 0;
    margin-left: -160px;
  }
  .leftbox{
    width: 67%;
    height: 75vh;
    display: block;
    position: relative;
    box-sizing: border-box;
    border: none;
    overflow: auto;
  }
  .rightbox{
    width: 27%;
    margin-right: 5%;
  }
</style>