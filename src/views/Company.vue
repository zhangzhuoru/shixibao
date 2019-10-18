<template>
  <div class="notice">
      <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%">
      <el-table-column
        label="公司名称"
        prop="title"
        align="center">
      </el-table-column>
      <el-table-column
        label="简介(主营)"
        prop="about"
        align="center">
      </el-table-column>
      <el-table-column
        label="地址"
        prop="address"
        align="center">
      </el-table-column>

      <el-table-column
        label="招收情况"
        align="center">

        <template slot-scope="scope">
          总招：{{scope.row.all}}（人）<br>
          已招：{{scope.row.now}}（人）
        </template>
      </el-table-column>
      <el-table-column
      align="center"
      width='300'>
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">添加实习岗位</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pagesize"
        layout="prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
    <div class="logoout" @click="addProject">
        <img src="../assets/add.png" title='添加公司'>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentPage:1,   //默认页码为1
        pagesize:2,  //默认一页显示10条
        tableData: [{
          title:'腾讯',
          about:'程序猿',
          date: '2016-05-02',
          name: '王军',
          all:10,
          now:2,
          address: '上海市普陀区金沙江路 1518 弄',

        }, {
          title:'富士康',
          about:'流水线测检员',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          all:100,
          now:0,
        }, {
          title:'小米',
          about:'程序猿',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          all:10,
          now:1,
        }, {
          title:'阿里巴巴',
          about:'程序猿',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          all:66,
          now:6,
        }],
        search: ''
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
    mounted() {

    }
  }
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notice{
    padding-top: 20px;
  }
  .notice /deep/.el-main[data-v-fae5bece] {
    line-height: 20px;
  }
  .pagination{
    position: fixed;
    bottom: 50px;
    left: 50%;
  }
  
</style>