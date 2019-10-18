<template>
  <div class="sendnoticedate">
    <div class="from">

      <div class="fromli">
        <div class="lable">
          实习单位:
        </div>
        <div>
          <input v-model="ruleForm.name" placeholder="请输入内容" class="input"></input>
        </div>
      </div>
      <div class="fromli">
        <div class="lable">
          实习岗位:
        </div>
        <div>
          <input v-model="ruleForm.name" placeholder="请输入内容" class="input"></input>
        </div>
      </div>
      <div class="fromli">
        <div class="lable">
          实习位置:
        </div>
        <div>
          <VDistpicker province="广东省" city="广州市" area="海珠区" @selected="onSelected"></VDistpicker>
        </div>
      </div>
      <div class="fromli">
        <div class="lable">
          实习详细地址:
        </div>
        <div>
          <input v-model="ruleForm.name" placeholder="请输入所在街道，门牌号" class="input"></input>
        </div>
      </div>
      <div class="fromli">
        <div class="lable">
          指导老师的名字:
        </div>
        <div>
          <input v-model="ruleForm.name" placeholder="请输入指导老师的名字" class="input"></input>
        </div>
      </div>
      <div class="fromli">
        <div class="lable">
          指导老师的电话:
        </div>
        <div>
          <input v-model="ruleForm.name" placeholder="请输入指导老师的电话" class="input"></input>
        </div>
      </div>
      <div class="fromli f-center">
          <el-upload
            class="upload-file"
            drag
            :action="doUpload"
            :before-upload="beforeUpload"
            ref="newupload"
            multiple
            :auto-upload="false">
            <i class="el-icon-camera icon"></i>
            <div class="el-upload__text tip">将文件拖到此处，或<em>点击上传</em>相关证明文件</div>
          </el-upload>

      </div>

    </div>
  </div>
</template>
<script>

  import VDistpicker from 'v-distpicker'

  export default {
    data() {
      return {
        doUpload:'/api/up/file'
        ,pppss:{
            srid:''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          province: '',
          city: '',
          county: '',
          imageUrl: ""
        }
      }
    },
    created() {

    },
    methods: {
      onSelected(data) {
        this.ruleForm.province = data.province.value
        this.ruleForm.city = data.city.value
        this.ruleForm.county = data.area.value
      },
      beforeUpload(file){
      let fd = new FormData();
      fd.append('file',file);//传文件
      fd.append('srid',this.aqForm.srid);//传其他参数
      axios.post('/api/up/file',fd).then(function(res){
              alert('成功');
      })
},
// newSubmitForm(){//确定上传
//     this.$refs.newupload.submit();
// }
    },
    watch: {

    },
    components: { VDistpicker },
    mounted() {

    }
  }
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sendnoticedate {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;

  }


  .sendnoticedate /deep/.el-main[data-v-fae5bece] {
    line-height: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .from {
    max-width: 600px;
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    padding: 10px 40px;
  }

  .fromli {
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .f-center{
    display: flex;
    justify-content: center;
  }

  .lable {
    width: 150px;
    text-align: left;
  }

  

  .input {
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
    transition: border-bottom-color .2s cubic-bezier(.645, .045, .355, 1);
  }

  .input:focus {

    outline: -webkit-focus-ring-color auto 5px;
    border: none;
    border-bottom: 1px solid #DCDFE6;
  }
  .icon{
    font-size: 67px;
    color: #C0C4CC;
    margin: 40px 0 16px;
    line-height: 50px;
  }
  .tip{
    font-size: 18px;
  }
</style>