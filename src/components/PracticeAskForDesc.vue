<template>
  <div class="notice">
    <!-- 发送公告遮罩层开始 -->
    <el-dialog title="实习申请" :visible.sync="dialogdescVisible">
      <el-form :model="desc" >
        <el-form-item label="申请人" :label-width="formLabelWidth">
            <div class="textarea">
                {{desc.name}}
            </div>
        </el-form-item>
        <el-form-item label="学号" :label-width="formLabelWidth">
          <div class="textarea">
              {{desc.id}}
          </div>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <div class="textarea">
              {{desc.department}}系 {{desc.major}}专业 {{desc.class}}
          </div>
        </el-form-item>
        <el-form-item label="实习单位" :label-width="formLabelWidth">
          <div class="textarea">
              {{desc.address}}
          </div>
        </el-form-item>
        <el-form-item label="实习岗位" :label-width="formLabelWidth">
          <div class="textarea">
              {{desc.job}}
          </div>
        </el-form-item>
        <el-form-item label="申请时间" :label-width="formLabelWidth" align="left">
          <div class="textarea">
            {{desc.date}}
          </div>  
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogdescVisible = false">不通过</el-button>
        <el-button  type="success" @click="dialogdescVisible = false">通过</el-button>
      </div>
    </el-dialog>
    <!-- 发送公告遮罩层结束 -->
    <h1 v-if='dialogdescVisible'>111111</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogdescVisible:false,//是否开启遮罩层
        form: {
          name: '',
          desc: '',
          time:Date.now()
        },//遮罩层保单信息
        formLabelWidth: '120px'
      }
    },
    // 组件可以接收的外部属性
     // 接受父组件的值
    props: ['desc'],
    created() {
      
    },
    methods: {
      show(){
        this.dialogdescVisible = !this.dialogdescVisible
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

  .input {
    display: block;
    width: 100%;
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
    padding: 0 15px;
    text-align: left;
    width: 100%;
    border-bottom: 1px solid #DCDFE6;
    box-sizing: border-box;
  }
</style>