<template>
    <el-menu
      default-active="1"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <el-menu-item v-if='!item.group' @click="goto(item.path)" :index="`${index + 1}`" v-for="(item, index) in meuns" :key="index">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
      </el-menu-item>
      <!-- 菜单通过数据循环的方式生成出来 -->
      <el-submenu  v-if='item.group':index="`${index + 1}`" v-for="(item, index) in meuns" :key="index">
        <template slot="title" >
          <!-- 图标 -->
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>

        <!-- meuns.group是菜单的子分组 -->
        <!-- 两个index的字符串相加 -->
        <el-menu-item  @click="goto(subItem.path)" :index="`${index + 1}-${subIndex + 1}`" v-for="(subItem, subIndex) in item.group" :key="subIndex">
            <!-- <template slot="title"> -->
              <div class="childroute">{{subItem.title}}</div>
              <!-- <router-link :to="subItem.path"></router-link>
            </template> -->
        </el-menu-item>
      </el-submenu>
     
    </el-menu>
</template>

<script>
export default {
    data(){
        return {
            meuns: [
                {
                   icon: "el-icon-umpicon4",
                   title: "首页",
                   path: "/home/teacher-show"
                },
                {
                   icon: "el-icon-umpgeren12",
                   title: "个人详情",
                   path: "/home/about"
                },
                {
                   icon: "el-icon-umptongzhi",
                   title: "通知公告",
                   group: [
                       { path: "/home/notice", title: "收到的通告" },
                       { path: "/home/sendnotice", title: "发送的通告" }
                   ]
                },
                {
                   icon: "el-icon-umpoffice-supplies-apply-for-approval",
                   title: "申请审批",
                   group: [
                       { path: "/home/practiceaskfor", title: "实习申请审批" },
                       { path: "/home/leave", title: "请假申请审批" },
                       { path: "/home/practiceaskforend", title: "结束申请审批" },
                       { path: "/home/summarize", title: "实习总结审批" },
                   ]
                },
                {
                   icon: "el-icon-umpqiandao",
                   title: "实习签到",
                   group: [
                       { path: "/home/signin", title: "每日签到统计" },
                       { path: "/home/signindate", title: "签到情况汇总" },
                   ]
                },
                {
                   icon: "el-icon-umpshenqingguanli",
                   title: "报告批阅",
                   group: [
                       { path: "/home/day", title: "实习日报" },
                       { path: "/home/week", title: "实习周报" },
                       { path: "/home/month", title: "实习月报" },
                   ]
                },
                {
                   icon: "el-icon-umpjiaoyu",
                   title: "实习指导",
                   group: [
                       { path: "/home/careersguidance", title: "就业指导" },
                       { path: "/home/assessment", title: "实习能力评估" },
                       { path: "/home/guidance", title: "实习巡查" },
                   ]
                },
                {
                   icon: "el-icon-umppiyue",
                   title: "考评成绩",
                   group: [
                       { path: "/home/evaluation", title: "实习考评" },
                       { path: "/home/schoolreport", title: "学生成绩" },
                   ]
                },
                {
                   icon: "el-icon-umpqiye",
                   title: "企业管理",
                   group: [
                       { path: "/home/company", title: "企业管理" },
                       { path: "/home/insurance", title: "保险购买情况" },
                   ]
                },
                
            ],
        }
    },
    // 组件可以接收的外部属性
    props: ["isCollapse"],

    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },
      goto(a){
        console.log(a)
        this.$router.push({path:a});
      }
    }
  }
</script>

<style scoped>
.el-menu{
    height:100%;
}

.el-menu a{
    /*继承父级的值*/
    color: inherit;
    text-decoration:none;
}

.el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
    z-index: 1111;
  }
  .el-menu--collapse {
    width: 64px;
    z-index: 1111;
}
</style>
