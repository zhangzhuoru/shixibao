<template>
  <div class="notice">
    <!-- 发送公告遮罩层开始 -->
    <el-dialog title="发通知" :visible.sync="dialogdescVisible">
      <el-form :model="desc" >
        <el-form-item label="通知题目" :label-width="formLabelWidth">
          <input v-model="desc.title" disabled autocomplete="off" class="input"></input>
        </el-form-item>
        <el-form-item label="通知内容" :label-width="formLabelWidth">
          <div class="textarea">
              <el-input
                disabled
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="desc.about">
              </el-input>
          </div>
            
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth" align="left">
            <el-date-picker
            v-model="desc.date"
            type="date"
            disabled
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      
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
      console.log('this.desc',this.desc)
      this.form.name = this.desc.title
      this.form.desc = this.desc.about
      this.form.time = this.desc.date
    },
    methods: {
      show(){
        console.log(this.dialogdescVisible,this.desc)
        
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