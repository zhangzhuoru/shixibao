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
      <!-- 上传图片开始 -->
      <div class="fromli f-center">
          <!--
          action: 图片上传的地址
          list-type: 文件列表的类型
          accept: 可接受的上传类型，image/*为图片
          limit：	最大允许上传个数
          file-list：	上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]
          multiple:	是否支持多选文件
          on-preview:	点击文件列表中已上传的文件时的钩子
          on-remove:	文件列表移除文件时的钩子
          before-upload:	上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
          on-success	文件上传成功时的钩子
          show-file-list: 是否显示文件上传列表
          on-exceed:	文件超出个数限制时的钩子
          on-error:	文件上传失败时的钩子
          headers: 头部信息
          on-success: 上传成功事件
          on-error: 上传失败事件
          before-upload: 上传前处理事件，返回一个值，值为false将阻止上传
          on-progress: 上传中事件
          auto-upload：是否马上上传
          -->
          <el-upload
          action="/mgr/common/imgUpload"
          list-type="picture-card"
          accept="image/*"
          :limit="imgLimit"
          :file-list="productImgs"
          :multiple="isMultiple"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-exceed="handleExceed"
          :auto-upload = "false"
          :on-error="imgUploadError">
          <i class="el-icon-camera icon"></i>
        </el-upload>
        <!-- 是否放大图片 -->
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
  

      </div>
      <!-- 上传图片结束 -->      
      <div class="fromli">
          <div class="tiph1">请上传企业邀请函或其他实习接收证明</div>
      </div>
      <div class="fromli">
          <el-checkbox v-model="checked">同意<em style="color: #409EFF;">《实习协议》</em></el-checkbox>
      </div>
      <div class="f-center">
          <el-button type="primary" round>提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>

  import VDistpicker from 'v-distpicker'

  export default {
    data() {
      return {
        checked: false,
        dialogImageUrl: '',
        dialogVisible: false,
        productImgs: [],
        isMultiple: true,
        imgLimit: 6,
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
      handleRemove(file, fileList) {//移除图片
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {//预览图片时调用
        console.log('file',file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
 
      beforeAvatarUpload(file) {//文件上传之前调用做一些拦截限制
        console.log('file',file);
        const isJPG = true;
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
 
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {//图片上传成功
        console.log(res);
        console.log(file);
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleExceed(files, fileList) {//图片上传超过数量限制
        this.$message.error('上传图片不能超过6张!');
        console.log(file, fileList);
      },
      imgUploadError(err, file, fileList){//图片上传失败调用
        console.log(err)
        this.$message.error('上传图片失败!');
      },
      onSelected(data) {
        this.ruleForm.province = data.province.value
        this.ruleForm.city = data.city.value
        this.ruleForm.county = data.area.value
      },

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
  .fromli>.tiph1{
    font-size: 14px;
    width: 100%;
    color: #000;
    font-weight: 800;
    text-align: center;
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
    font-size: 12px;
  }
</style>