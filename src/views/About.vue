<template>
  <div class="about">
    <div class="posr">
      <div class="bg bg-blur"></div>
      <div class="content content-front">
        
      </div>
      <div class="text btn">更换头像</div>
    </div>
    <div class="msgbox">
      <div class="msgbody">
          <div class="msghearder blue">
              <div class="l">
                <i class="el-icon-s-custom"></i>
                个人详情
              </div>
              <div class="r">
                <i class="el-icon-edit"></i>
                修改
              </div>
          </div>
          <div class="msgtable">
            <li class="msgli">
                <div class="lable">姓名</div>
                <div class="msgtext">{{teacher.name}}</div>
            </li>
            <li class="msgli">
                <div class="lable">工号</div>
                <div class="msgtext">{{teacher.id}}</div>
            </li>
            <li class="msgli">
                <div class="lable">性别</div>
                <div class="msgtext">{{teacher.sex}}</div>
            </li>
            <li class="msgli">
                <div class="lable">生日</div>
                <div class="msgtext">{{teacher.birthday}}</div>
            </li>
            <li class="msgli">
                <div class="lable">联系电话</div>
                <div class="msgtext">{{teacher.tell}}</div>
            </li>
            <li class="msgli">
                <div class="lable">职位</div>
                <div class="msgtext">{{teacher.job}}</div>
            </li>
          </div>
      </div>
      
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        teacher:{
          name:'李老师',
          id:'007',
          sex:'男',
          birthday:'1990-20-01',
          tell:'12345678901',
          job:'教导主任'
        }
      }
    },
    created() {

    },
    methods: {

    },
    watch: {

    },
    mounted() {

    }
  }
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about{
    padding-top: 20px;
  }
  .posr {
    position: relative;
    width: 100%;
    height: 150px;
  }

  .bg {
    background: url('../assets/bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 150px;
  }

  .bg-blur {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }

  .content-front {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: url("../assets/noface.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
  }
  .text{
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,50%);
    width: 100px;
    height: 100px;
    background: rgba(0,0,0,.6);
    font-size: 16px;
    color: #fff;
    line-height: 100px;
    text-align: center;
    opacity: 0;
    border-radius: 50%;
    transition: opacity 1s;
    transition-property: opacity;
    transition-duration: 1s;
    transition-timing-function: initial;
    transition-delay: initial;
  }
  .text:hover{
    opacity: 1;
    cursor:pointer;
  }
  .msgbox{
    margin-top: 60px;
    padding:0 10% 0;
  }
  .msgbody{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
  }
  .msghearder{
    background-color: #fff;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
  .blue{
    color: rgb(0, 183, 255);
  }
  .msgtable{
    background-color: #fff;
    padding: 0 0 0 20%;
    font-size: 20px;
    line-height: 40px;
    text-align: left;
  }
  .msgli{
    display: flex;
  }
  .msgli>.lable{
    width: 33%;
    flex: 0,0,33%;
    color: #666;  
  }
  .msgli>.msgtext{
    flex: 1;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
  }
</style>