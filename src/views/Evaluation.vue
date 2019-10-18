<template>
    <div class="notice">
      <el-tabs @tab-click="changeSys" v-model="activeName" tab-position="top" style="height: 200px;" >
        <el-tab-pane label="未考评" name='1'>
          <div class="approve" v-if='activeName==1'>
            
            <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%"  :header-cell-style='styleObj'>
              <!-- 只需在表格里多加一列.设置type="selection"就可以 -->
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
              <el-table-column width="260" align="center" label="操作">
                <template  class="between">
                  <div class="bluebtn"><i class="el-icon-edit"></i>考评</div>
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
        <el-tab-pane label="已考评" name='2'>
          <div class="approve" v-if='activeName==2'>
            <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%"   :header-cell-style='styleObj'>
              <!-- 只需在表格里多加一列.设置type="selection"就可以 -->
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
              <el-table-column width="260" align="center" label="分数" >
                <template  class="between" slot-scope="scope">
                  <div class="bluebtn"><i class="el-icon-reading"></i>{{scope.row.count}}</div>
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
              major: '实地',
              date: '2016-05-02',
              name: '王军',
              address: '上海市普陀区金沙江路 1518 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }, {
              id: '002',
              department: '软件工程',
              major: '实地',
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
              class: '11班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }, {
              id: '003',
              department: '软件工程',
              major: '实地',
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              class: '12班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }
            , {
              id: '004',
              department: '网安工程',
              major: '实地',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '31班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }
            , {
              id: '005',
              department: '六一放假通知',
              major: '实地',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '12班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }
            , {
              id: '006',
              department: '六一放假通知',
              major: '实地',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }
            , {
              id: '007',
              department: '六一放假通知',
              major: '实地',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }
            , {
              id: '008',
              department: '六一放假通知',
              major: '实地',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }
            , {
              id: '009',
              department: '六一放假通知',
              major: '实地',
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              class: '1班',
              job: 'UI设计',
              state: '未审批',
              count:'89'
            }
          ],
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
        
        // 返回的参数是每一行的值,需要指定表格数据的唯一值,一般是id
        
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
  </style>