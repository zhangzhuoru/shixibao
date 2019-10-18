<template>
  <div class="notice">
    <!-- 公告信息表开始-->
      <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%">
      <el-table-column
        label="通知标题"
        prop="title"
        align="center">
      </el-table-column>
      <el-table-column
        label="内容提醒"
        prop="about"
        align="center">
      </el-table-column>
      <el-table-column
        label="发送时间"
        prop="date"
        align="center">
      </el-table-column>
      <el-table-column
        label="发送人"
        prop="name"
        align="center">
      </el-table-column>
      <el-table-column
      align="center">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="seedesc(scope.$index, scope.row)">查看详情</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 公告信息表结束-->

    <!-- 分页开始 -->
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
    <!-- 分页结束 -->
    
    <!-- 发送公告按钮开始 -->
    <div class="logoout" @click="dialogFormVisible = true">
        <img src="../assets/add.png" title='发送通告'>
    </div>
    <!-- 发送公告按钮结束 -->

    <!-- 发送公告遮罩层开始 -->
    <el-dialog title="发通知" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="通知题目" :label-width="formLabelWidth">
          <input v-model="form.name" autocomplete="off" class="input"></input>
        </el-form-item>
        <el-form-item label="通知内容" :label-width="formLabelWidth">
          <div class="textarea">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="form.desc">
              </el-input>
          </div>
            
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth" align="left">
            <el-date-picker
            v-model="form.time"
            type="date"
            disabled
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 发送公告遮罩层结束 -->

    <!-- 发送公告详情遮罩层开始
      给子组件注册引用信息 父组件通过$refs拿到的是子组件的组件实例对象
    -->
    <NoticeDesc ref='noticedesc'></NoticeDesc>
    <!-- 发送公告详情遮罩层结束 -->
  </div>
</template>
<script>
  import NoticeDesc from "../components/NoticeDesc";
  export default {
    data() {
      return {
        currentPage:1,   //默认页码为1
        pagesize:2,  //默认一页显示10条
        tableData: [{
          title:'中秋放假通知',
          about:'放3天',
          date: '2016-05-02',
          name: '王军',
          address: '上海市普陀区金沙江路 1518 弄',

        }, {
          title:'国庆放假通知',
          about:'放7天',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          title:'重阳放假通知',
          about:'放3天',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          title:'六一放假通知',
          about:'放3天',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: '',
        dialogFormVisible: false,//是否开启添加遮罩层
        dialogdescVisible: false,//是否开启详情遮罩层
        form: {
          name: '',
          desc: '',
          time:Date.now()
        },//遮罩层保单信息
        formLabelWidth: '120px'
      }
    },
    created() {

    },
    methods: {
      seedesc(index, row) {
        this.$refs.noticedesc.show()//显示
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
      sendnotice(){
        this.$router.push({path:'sendingnotice'})
      }
    },
    watch: {

    },
    // 注册组件
    components: {
        NoticeDesc,
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
  .input {
    display: block;
    width: 450px;
    background-color: #FFF;
    border: none;
    border-bottom: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
  }

  .input:focus {
    border-bottom: 1px solid #409EFF;
  }
  .textarea{
    width: 450px;
  }
</style>