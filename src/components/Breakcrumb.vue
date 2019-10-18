<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in routeInfo" :key="index">
                {{item}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    // 由于路由信息是会发生变化，通过监听$route来更新面包屑组件的数据
    // watch: {},

    computed: {
        // 面包屑组件的数据
        routeInfo: function(){
            // 返回match里的meta信息，组成数组
            var arr = this.$route.matched.map(v => {
               
                return v.meta;
                
            })
            console.log('v',arr)
            return arr;
        }
    },

}
</script>

<style>

</style>
