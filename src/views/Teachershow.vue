<template>
  <div class="teachershow">
      <div class="box">
          <p class="htitle" >hi,现在是2019/10/8 星期二 14：08</p>
      </div>
            
      <div class="pdbox">
          <div class="bg-purple">
              <div class="stitle">
                <span>个人信息</span>
                <span>更多</span>
              </div>
              <div class="msgbox">
                <i class="el-icon-info icsize"></i>
                <div class="msg">
                  <div class="msgli">
                      <span>李老师</span> 
                  </div>
                  <div class="msgli">
                      <span>组织机构：</span> 
                      <span>华南师范大学</span> 
                  </div>
                  <div class="msgli">
                      <span>管理实习学生：</span> 
                      <span>12</span> 
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-purple">
                <el-calendar v-model="value">
                  </el-calendar>
                  
            </div>
              

      </div>
      <div class="pdbox">
          <div class="bg-purple">
              <div class="stitle">
                <span>通知公告</span>
                <span>更多</span>
              </div>
              <li class="tzbox">
                <div class="fl">熊武俊的实习</div>
                <div class="fr">2019-10-08</div>
              </li>  
              <li class="tzbox">
                <div class="fl">张人仁的实习</div>
                <div class="fr">2019-10-08</div>
              </li>  
              <li class="tzbox">
                <div class="fl">陈庆履的实习</div>
                <div class="fr">2019-10-08</div>
              </li>  
              <li class="tzbox">
                <div class="fl">王军的实习</div>
                <div class="fr">2019-10-08</div>
              </li>  
          </div>
          <div class="bg-purple">
              <p class="stitle">待办事项</p>
              <div class="daibanbox">
                <li>请完善个人资料</li>
                <li><i class="el-icon-thiirdoffice-supplies-apply-for-approval"></i></li>
                <li>你有<span>1</span>份月报待批阅</li>
                <li>你有<span>1</span>份周报待批阅</li>
                <li>你有<span>1</span>份实习申请待批阅</li>
              </div>  
          </div>
              

      </div>

  </div>
</template>

<script>


export default {
  components: {

  },

  data () {
    return {
      logs: [],
      target:1,
      value: new Date()
    }
  },

  created () {
    
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
.teachershow{
  margin-top: 3vh;
}
.box{
  width: 80%;
  margin: 0 auto;
}
.bg-purple /deep/.el-calendar-table .el-calendar-day {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 30px;
    height: 30px;
    padding: 0;
}
.htitle{
  color: #8D8E8F;
  text-align: left;
  font-size: 24px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 3vh;
}
.pdbox{
  margin-bottom: 3vh;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
}
.bg-purple{
  background-color: #fff;
  width: 45%;
  height: 310px;
  overflow: hidden;
}
.stitle{
  background-color: #E0F2FC;
  color: #5C5E61;
  padding: 0 2vw;
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.msgbox{
  display: flex;
}
.icsize{
  width: 150px;
  height: 150px;
  font-size: 150px;
  flex: 0,0,150px;
}
.msg{
  flex: 1;
}
.msgli{
  text-align: left;
  height: 40px;
  line-height: 40px;
}
.sss{
  width: 100%;
  height: 100%;
}
.tzbox{
  padding: 5px 10px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.daibanbox{
  height: 270px;
  padding: 20px 10px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap:  wrap;
}
.daibanbox>li{
  text-align: left;
  width: 100%;
  height: 20px;
  line-height: 20px;
}
.daibanbox>li>span{
  color: red;
}
/* //日历 */
.el-calendar__body {
    padding: 12px 20px 10px;
}
.el-calendar-table thead th {
    padding: 18px 0;
    color: #606266;
    font-weight: 400;
}
.el-calendar-table .el-calendar-day {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding:0 8px;
    height: 32px;
    line-height: 32px;
}
</style>
