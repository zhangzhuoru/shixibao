import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Notice from './views/Notice.vue'
import SendNotice from './views/SendNotice.vue'
import SendingNotice from './views/SendingNotice.vue'
import SendNoticeDate from './views/SendNoticeDate.vue'
import PracticeAskFor from './views/PracticeAskFor.vue'
import PracticeAskForEnd from './views/PracticeAskForEnd.vue'
import Summarize from './views/Summarize.vue'
import Teachershow from './views/Teachershow.vue'
import Leave from './views/Leave.vue'
import Signin from './views/Signin.vue'
import SigninDate from './views/SigninDate.vue'
import Day from './views/Day.vue'
import Week from './views/Week.vue'
import Month from './views/Month.vue'
import Guidance from './views/Guidance.vue'
import CareersGuidance from './views/CareersGuidance.vue'
import SchoolReport from './views/SchoolReport.vue'
import Company from './views/Company.vue'
import Evaluation from './views/Evaluation.vue'
import Assessment from './views/Assessment.vue'
import Insurance from './views/Insurance.vue'
// import Teachermain from './views/Teachermain.vue'
// import CategoryList from './views/CategoryList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: "/", redirect: "/home"},
    // 首页
    {path: "/home", 
    component: Home, 
    redirect: "/home/teacher-show", 
    meta: "首页",  
    children: [
      { path: "teacher-show", component: Teachershow, meta: " ",},
    ]},
    //个人详情
    {path: "/home", 
    component: Home, 
    meta: "个人详情",  
    children: [
      { path: "about", component: About, meta: " ",},
    ]},
    //通知公告
    {path: "/home", 
    component: Home, 
    meta: "通知公告",  
    children: [
      { path: "notice", component: Notice, meta: "发送的通告",},
      { path: "sendnotice", component: SendNotice, meta: "收到的通告", },
      { path: "sendnoticedate", component: SendNoticeDate, meta: "收到的通告", },
      { path: "sendingnotice", component: SendingNotice, meta: "收到的通告", },
    ]},
    //通知公告
    {path: "/home", 
    component: Home, 
    meta: "申请审批",  
    children: [
      { path: "practiceaskfor", component: PracticeAskFor, meta: "实习申请审批",},
      { path: "practiceaskforend", component: PracticeAskForEnd, meta: "结束申请审批",},
      { path: "leave", component: Leave, meta: "请假申请审批",},
      { path: "summarize", component: Summarize, meta: "总结申请审批",},
    ]},
    //实习签到
    {path: "/home", 
    component: Home, 
    meta: "实习签到",  
    children: [
      { path: "signin", component: Signin, meta: "每日签到统计",},
      { path: "signindate", component: SigninDate, meta: "签到情况汇总",},
    ]},
    //报告批阅
    {path: "/home", 
    component: Home, 
    meta: "报告批阅",  
    children: [
      { path: "day", component: Day, meta: "实习日报",},
      { path: "week", component: Week, meta: "实习周报",},
      { path: "month", component: Month, meta: "实习月报",},
    ]},
    //实习指导
    {path: "/home", 
    component: Home, 
    meta: "实习指导",  
    children: [
      { path: "careersguidance", component: CareersGuidance, meta: "就业指导",},
      { path: "assessment", component: Assessment, meta: "实习能力评估",},
      { path: "guidance", component: Guidance, meta: "实习巡查",},
    ]},
    //考评成绩
    {path: "/home", 
    component: Home, 
    meta: "考评成绩",  
    children: [
      { path: "evaluation", component: Evaluation, meta: "实习考评",},
      { path: "schoolreport", component: SchoolReport, meta: "学生成绩",},
    ]},
    //企业管理
    {path: "/home", 
    component: Home, 
    meta: "企业管理",  
    children: [
      { path: "company", component: Company, meta: "企业管理",},
      { path: "insurance", component: Insurance, meta: "保险购买情况",},
    ]},
    
    
  ]
})
