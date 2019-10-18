<template>
    <el-container>
        <el-aside width="auto">
            <!-- 左侧菜单 -->
            <Menu :isCollapse="isCollapse"></Menu>
        </el-aside>
        <el-container>
            <el-header>
                <!-- 头部 -->
                <Header @changeShow="changeShow"></Header>
            </el-header>
            <el-main>
                <!-- 面包屑 -->
                <Breakcrumb></Breakcrumb>

                <!-- 匹配到的子组件 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

// 导入固定的组件
import Header from "../components/Header";
import Menu from "../components/Menu";
import Breakcrumb from "../components/Breakcrumb";

export default {
    data(){
        return {
            // 控制菜单的显示，true是收起，false是展开
            isCollapse: false
        }
    },

    // 注册组件
    components: {
        Header,
        Menu,
        Breakcrumb
    },

    methods: {
        // 切换菜单显示,给头部组件调用
        changeShow(){
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>

<style scoped>
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
    /*指向最外层的container样式*/
  #app > .el-container {
    position:absolute;
    width:100%;
    top:0;
    bottom:0;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
