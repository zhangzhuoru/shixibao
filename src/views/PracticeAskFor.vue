<template>
  <div class="notice">
    <el-tabs tab-position="top" style="height: 200px;" @tab-click="changeSys" v-model="activeName">
      <el-tab-pane label="未审批" name='1'>
        <div class="approve" v-if='activeName==1'>
          <div class="hearder">
            <div style="margin-top: 6px;">
              <el-button type="success" size="mini" round icon="el-icon-check">批量通过</el-button>
              <el-button type="danger" size="mini" round icon="el-icon-close">批量不通过</el-button>
            </div>
            <div>
              <el-form :inline="true" :model="formInline" class="demo-form-inline">

                <el-form-item>
                  <el-select v-model="formInline.region" placeholder="查询条件" class="widthsmall">
                    <el-option label="名字" value="shanghai"></el-option>
                    <el-option label="学号" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="formInline.user" prefix-icon="el-icon-search" placeholder="输入你想查询的内容..." class="widthbig"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="mini" round @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" ref="checkTable" :row-key="handleReserve"
            @selection-change="handleSelectionChange" :header-cell-style='styleObj'>
            <!-- 只需在表格里多加一列.设置type="selection"就可以 -->
            <el-table-column type="selection" reserve-selection width="55">
            </el-table-column>
            <el-table-column label="姓名" align="center" prop="name">
            </el-table-column>
            <el-table-column label="学号" align="center" prop="id">
            </el-table-column>
            <el-table-column label="系(部)" align="center" prop="department">
            </el-table-column>
            <el-table-column label="专业" align="center" prop="major">
            </el-table-column>
            <el-table-column label="班级" align="center" prop="class">
            </el-table-column>
            <el-table-column label="实习单位" :show-overflow-tooltip="true" width="100" align="center" header-align="center" prop="address">
            </el-table-column>
            <el-table-column label="实习岗位" align="center" prop="job">
            </el-table-column>
            <el-table-column label="申请时间" align="center" prop="date" width="100">
            </el-table-column>
            <el-table-column label="审批状态" align="center" prop="state">
            </el-table-column>
            <el-table-column width="260" align="center" label="操作">
              <template slot-scope="scope" class="between">
                <el-button type="primary" size="mini">查看详情</el-button>
                <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">通过</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">不通过</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize"
              layout="prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已审批" name='2'>
        <div class="approve" v-if='activeName==2'>
          <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
            <!-- 只需在表格里多加一列.设置type="selection"就可以 -->
            </el-table-column>
            <el-table-column label="姓名" align="center" prop="name">
            </el-table-column>
            <el-table-column label="学号" align="center" prop="id">
            </el-table-column>
            <el-table-column label="系(部)" align="center" prop="department">
            </el-table-column>
            <el-table-column label="专业" align="center" prop="major">
            </el-table-column>
            <el-table-column label="班级" align="center" prop="class">
            </el-table-column>
            <el-table-column label="实习单位" :show-overflow-tooltip="true" width="100" align="center" prop="address">
            </el-table-column>
            <el-table-column label="实习岗位" align="center" prop="job">
            </el-table-column>
            <el-table-column label="申请时间" align="center" prop="date" width="100">
            </el-table-column>
            <el-table-column label="审批状态" align="center" prop="state">
            </el-table-column>
            <el-table-column width="260" align="center" label="操作">
              <template slot-scope="scope" class="between">
                <el-button type="primary" size="mini">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize"
              layout="prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        styleObj: {
          'background-color': '#D9F0FE',
          'color': '#66b1ff'
        },
        systems:[
          {id:'1',title:'未审批'},
          {id:'2',title:'已审批'},
        ],
        activeName:'1',
        allid: [],
        currentPage: 1,   //默认页码为1
        pagesize: 9,  //默认一页显示10条
        formInline: {
          user: '',
          region: ''
        },
        tableData: [
          {
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
        ],
        search: ''
      }
    },
    created() {
      this.activeName = this.systems[0].id;
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange: function (size) {   //一页显示多少条
        this.pagesize = size;
      },
      handleCurrentChange: function (currentPage) {  //页码更改方法
        this.currentPage = currentPage;
      },
      // search(){
      //   this.tableData.filter(data => !this.search || data.department.toLowerCase().includes(search.toLowerCase()))
      // }
      addProject() {

      },
      handleSelectionChange(val) {
        let allid = []
        allid = val.map(a => a.id)
        this.allid = allid
        console.log(this.allid)
      },
      // 返回的参数是每一行的值,需要指定表格数据的唯一值,一般是id
      handleReserve(row) {
        return row.id
      },
      onSubmit() {

      },
      changeSys(e){
          this.activeName = e.name
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
  .notice {
    padding-top: 20px;
  }

  /* .approve /deep/.el-main[data-v-fae5bece] {
      line-height: 20px;
    } */

  .approve {
    background-color: #fff;
  }

  .hearder {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 10px 0;
  }

  .hearder /deep/.el-form-item {
    margin-bottom: 10px;
  }

  .widthsmall {
    width: 95px;
    height: 28px;
  }

  .widthbig {
    width: 280px;
  }

  .widthsmall /deep/.el-input__inner {
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    padding-left: 10px;
  }

  .widthbig /deep/.el-input__inner {
    height: 28px;
    font-size: 12px;
    line-height: 28px;
  }

  .pagination {
    width: 300px;
    margin: 5px auto 0;
    padding-bottom: 5px;
  }

  .between {
    display: flex;
    justify-content: space-between;
  }
  [v-cloak] {
    display: none !important;
  }
</style>