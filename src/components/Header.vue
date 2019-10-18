<template>
    <el-row type="flex" justify="space-between" align="middle">
        <i class="el-icon-back" @click="handleClick"></i>
        <div>admin 超级管理员 <span class="logout">退出</span></div>
    </el-row>
</template>

<script>
export default {
  methods: {
    handleClick(){
      this.$emit("changeShow")
    }
  }
}
</script>

<style scoped>
.logout{
  cursor: pointer;
}
</style>
