

# ES5&ES6新特性](https://blog.csdn.net/sswqzx/article/details/84850382)

# [Js对象](https://blog.csdn.net/sswqzx/article/details/82797794)



## JavaScript原型，原型链 ? 有什么特点？

1、prototype，原型，那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。（在js中有这么一个概念：万物皆对象。请大家记住这个概念，在es6中体现的尤为明显）

2、__proto__，这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

3、constructor，每个原型都有一个 constructor 属性指向关联的构造函数。

```js
 function Person() {

 }
 var person = new Person();
```

![1571131060326](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1571131060326.png)

# [vue-router路由懒加载（解决vue项目首次加载慢）](https://www.cnblogs.com/lijuntao/p/7777581.html)

像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大（20m的问你怕没），造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时

# vue生命周期

1、什么是vue生命周期？
答： Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

2、vue生命周期的作用是什么？
答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。

3、vue生命周期总共有几个阶段？
答：它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后

4、第一次页面加载会触发哪几个钩子？
答：第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子

5、DOM 渲染在 哪个周期中就已经完成？
答：DOM 渲染在 mounted 中就已经完成了。

6、简单描述每个周期具体适合哪些场景？
答：生命周期钩子的一些使用方法： beforecreate : 可以在这加个loading事件，在加载实例时触发 created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用 mounted : 挂载元素，获取到DOM节点 updated : 如果对数据统一处理，在这里写上相应函数 beforeDestroy : 可以做一个确认停止事件的确认框 nextTick : 更新数据后立即操作dom

# MVC简要

Model：数据模型，用来存储数据

View：视图界面，用来展示UI界面和响应用户交互

Controller：控制器(大管家角色)，监听模型数据的改变和控制视图行为、处理用户交互

他们工作和关系看起来是如此清晰，是一种非常好的设计思想，是的，首先声明MVC是一个非常好的架构思想，你必须要掌握。

![1571120537958](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1571120537958.png)

# MVVM简要

**1. 低耦合**。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model不可以不变，当Model变化的时候View也可以不变。

**2. 可重用性**。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。

**3. 独立开发**。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xaml代码。

**4. 可测试**。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

# $route 和 $router 的区别

$route对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等。

$router对象是全局路由的实例，是router构造方法的实例。

# Js的事件委托是什么，原理是什么

1. 事件捕获阶段（红色箭头顺序）
2. 事件冒泡阶段（绿色箭头顺序）

![1571123848813](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1571123848813.png)

在事件捕获阶段，事件源依次从defaultView（可以理解为整个页面）一直传播到具体的目标（target）。从广泛到具体。

在事件冒泡阶段，事件源依次从target传播到defaultview。从具体到广泛，范围越来越大，像冒泡过程一样，气泡越来越大（范围越来越大）

而事件委托就是利用的DOM事件的事件捕获阶段。把具体dom上发生的事件，委托给更大范围的dom去处理。好比送信员，如果每次都把信件送给每一户，非常繁琐。但是如果交给一个大范围的管理者，比如小区的传达室，那么事情会变得非常简单。事件委托就类似这种原理，我页面中有很多按钮，如果不使用事件委托，我只能在每个按钮上注册事件。非常麻烦。但如果我把事件注册在一个大范围的div（假设所有的按钮都在这个div中），那么我只要注册一次事件，就可以处理所有按钮（只要按钮包含在上述div中）事件的响应了

# [new 操作符具体干了什么？](https://segmentfault.com/a/1190000008576048)

**new**共经历了四个过程。

```
var fn = function () { };
var fnObj = new fn();
```

1、创建了一个空对象

```
var obj = new object();
```

2、设置原型链

```
obj._proto_ = fn.prototype;
```

3、让fn的this指向obj，并执行fn的函数体

```
var result = fn.call(obj);
```

4、判断fn的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。

```
if (typeof(result) == "object"){  
    fnObj = result;  
} else {  
    fnObj = obj;
}  
```

# vue动态设置img的src路径

```vue
<img :src="item.img" >
```

1. vue并没有把**图片的路径字符串**当做**路径**来处理，而是**直接当做字符串**了


Es6

 // 下面是导入两张图片的相对地址

```js
import tx1 from "@/assets/touxiang.jpg"
import tx2 from "@/assets/touxiang2.jpg"
```

Es5

```js
img:require('@/assets/touxiang.jpg')
```

引入路径的时候使用**@即代表src文件夹**

# 修改滚动条样式

```css
/* 浏览器滚动条设置 */

/* width */

::-webkit-scrollbar {

    width: 4px;

    height: 4px;

  }

  /* Track */

  ::-webkit-scrollbar-track {

    background: rgb(255, 255, 255);

    border-radius: 8px;

  }

  /* Handle */

  ::-webkit-scrollbar-thumb {

    background: rgb(201, 201, 202);

    border-radius: 8px;

  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {

    background: rgb(162, 162, 163);

  }

/* 滚动条 */

```



# Html滚动到底部

```js

this.$nextTick(() => { let msg = document.getElementById('gundong') // 获取对象  
msg.scrollTop = msg.scrollHeight// 滚动高度
})
```

# 微信小程序 滚动到底部

```js
wx.createSelectorQuery().select('#chewbox').boundingClientRect(function(rect){
// 使页面滚动到底部
console.log('rect.bottom',rect.bottom)
wx.pageScrollTo({
scrollTop: rect.bottom
})
}).exec()
```

 

# 步骤条竖线

```html
<div style="float:left;margin-top: 30px;width: 1px;height: 200px; background: darkgray;"></div> 
```

# Mpvue

## 跳转

<!-- 通过navigator跳转 -->

```html
<navigator :url="'/pages/search-list/main?query='+subitem.cat_name">

	<image class="brand-image" :src="subitem.cat_icon" mode="aspectFill"></image>

	<p class="brand-title">{{subitem.cat_name}}</p>
   
</navigator>
```

// 点击搜索历史项

```js
@tap="handleHistoryClick(item)"		

    handleHistoryClick (name) {

    wx.navigateTo({

    url: '/pages/search-list/main?query=' + name

    })

},
```

## 接收

```js
methods: {

// 小程序原生的生命周期函数，照样能在mpvue中使用，methods接收

    onLoad (options) {

    console.log(options)

    this.keyword = options.query || ''

},

```



# **微信小程序mpvue框架中使用iView Weapp**

####  https://github.com/TalkingData/iview-weapp 下载，完后将dist文件夹中的所有文件（也可以只选择需要的组件）导入到mpvue项目的static文件夹中。

![1569577188706](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569578945093.png)

#### **把dist文件夹内东西全部copy到你项目中的static的文件下的iview文件夹**

**（这里我新建个iview的子文件）**

#### 再到需要使用组件的页面中配置。

![1569577414754](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569577414754.png)

![1569579179598](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569579179598.png)

main.json

"usingComponents": {

​    "i-button": "../../../static/iview/button/index"

  }

![1569577580028](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569631828922.png)

#### 4.在具体需要用到的页面就能用iview weapp提供的标签组件了

![1569632463944](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569632463944.png)

# 巧用es6 new set 数组去重 map讲解

`Map`是一组键值对的结构

```js
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
```

初始化`Map`需要一个二维数组，或者直接初始化一个空`Map`。`Map`具有以下方法：

```js
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
```

`Set`和`Map`类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在`Set`中，没有重复的key。

```js
let arr = [1, 2, 2, 3];
let set = new Set(arr);
let newArr = Array.from(set); // Array.from方法可以将 Set 结构转为数组。

console.log(newArr); // [1, 2, 3]
//简写
var arr = [...new Set([1, 2, 1, 1, 2, 3, 3, 4, 4])]; //arr就是去重后的数组
```

# yui reset.css

```css
/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

html{color:#000;background:#FFF}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}legend{color:#000}#yui3-css-stamp.cssreset{display:none}
```

![1569653324057](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569653324057.png)

![1569653472829](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569653472829.png)

![1569653526653](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569653526653.png)

![1569653576412](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569653576412.png)

![1569653678785](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569653678785.png)

# 字符集

![1569654330163](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569654330163.png)

![1569654391386](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569654391386.png)

![1569654572230](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569654797863.png)

# 小图标制作：http://bitbug.net/

![1569655080734](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569655080734.png)

![1569655134588](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569655134588.png)

# 顶部栏header

![1569655590516](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569655590516.png)

# logo

![1569655860666](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569655860666.png)

![1569656455733](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569656455733.png)

![1569656055992](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569656055992.png)

![1569656724822](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569656724822.png)

![1569656690281](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569656791607.png)

![1569658109825](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569658109825.png)

# 样式的继承

![1569658470545](C:\Users\xu\AppData\Local\Temp\1569658470545.png)

# 倒三角

![1569658624616](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569659032861.png)

# 图片自适应

bg大小自适应

```css
.bg {
    background: url('../assets/bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 150px;
  }
```

![1569660734020](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569660734020.png)

![1569660565901](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1569660565901.png)

# **问题重新:在main.js使用console.log()会报错**

![在这里插入图片描述](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/20190701165344696.png)
**这个错误是Vuejs - 使用ESLint检查代码质量是进行提示的,所以修改成window.console.log()就能避免这个报错**![在这里插入图片描述](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/2019070116551969.png)

# 解决点击 router-link 会造成报错的问题

```js
//解决点击 router-link 会造成报错的问题
import router from './router'
import Router from 'vue-router'


const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```

# 背景虚化效果

```css
<div class="bg bg-blur"></div>
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
```

# css实现简单的hover渐变动画

```css
   
.text{
    opacity: 0;
    transition: opacity .4s;
    transition-property: opacity;
    transition-duration: 0.4s;
    transition-timing-function: initial;
    transition-delay: initial;
  }
  .text:hover{
    opacity: 1;
  }
```

# hover鼠标变成小手

```css
.text:hover{
    opacity: 1;
    cursor:pointer;
  }
```

# vue的css局部样式避免污染全局样式

```js
<style scoped>
```

# vue element引入自定义icon图标的方法

新建项目

![1570608409515](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570608409515.png)

选好图标加入项目后下载

![1570608621684](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570608621684.png)

解压复制到vue中assets新建icon文件下

![1570608468984](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570608468984.png)

修改iconfont.css的代码,添加如下代码

```css
[class^="el-icon-ump"], [class*=" el-icon-ump"] {
  font-family:"fontFamily" !important;
  /* 以下内容参照第三方图标库本身的规则 */
  font-size: 18px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }
```

![1570608808651](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570608808651.png)

在main.js引入图标

```js
//引入自定义icon
import './assets/icon/iconfont.css';
```

![1570608932297](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570608932297.png)

再复制名称，就跟element icon一样用

![1570609062747](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570609062747.png)

效果如下

![1570609112632](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570609112632.png)

# 修改element样式

使用**/deep/**，给element加个父级

![1570616825578](C:\Users\xu\AppData\Local\Temp\1570616825578.png)

# 循环遍历map的使用

![1570703027696](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570703027696.png)

map+箭头函数的简写

![1570703073796](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570703095983.png)

![1570703171557](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570703171557.png)

# es6 快速删除数组指定元素

splice(index,num); 

  index代表的是数组元素的下标位置，num代表的是删除的个数  

  findIndex();   是找到某元素的下标的位置

```js
arr.splice(arr.findIndex(item => item.id === 24), 1)
//filter也不错
var arr = [2, 3, 5, 7];
arr = arr.filter(item => item !== 5);
```

# 修改element表头的单元格的样式

```html
<el-table :data="tableData" style="width: 100%" :header-cell-style='styleObj'></el-table>

data() {
   return {
        styleObj: {
        	'color':'red'
        },
    }
}
```

# 使用elementUI的table组件让文字过长

设置:show-overflow-tooltip="true" header-align="center"可溢出隐藏

```html
<el-table-column :show-overflow-tooltip="true" header-align="center" prop="content" label="内容" width="400px" >
</el-table-column>
```

# elementUI+table用插槽来自定义显示的内容

通过scope.row获取当前列表的el-table-column

```html
<el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          {{aa(scope.row.name)+scope.$index}}
        </template>
</el-table-column>
```



# 使用elementUI表格加分页

参考链接：<https://blog.csdn.net/weixin_39327044/article/details/89440927>

# 解决elementUI表格渲染数据不及时闪烁用v-if

![1570762735550](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570762735550.png)

# 在Vue中使用echarts

### 1.安装echarts依赖

```js
npm install echarts -S
```

### 2以组件的形式用echarts

![1570850574193](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570850574193.png)

在components文件夹中引入柱状图Bar.vue，再在引用的页面三步骤引入

![1570850642897](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570850642897.png)

![1570850671146](C:\Users\xu\AppData\Local\Temp\1570850671146.png)

![1570850710839](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570850817251.png)

例子D:\offer\day4\shixibao\src\components的Bar.vue（柱状图）

### 2.1按需引入

在Echarts.vue文件中

```js
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
```

```js
// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('myChart'))
```

### 2.2在main.js中

```js
// 全局(全部)引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
```

### 2.2.1在Echarts.vue中

```html
<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
```

```js
mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
  }
```

# echarts常用参数

### 1.tooltip: {}, 鼠标：hover出现提示

![1570851278346](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570851278346.png)

### 2.axisLine: {  lineStyle: {  color: "#fff"}  }, x、y轴颜色

### 3.echarts柱形图x轴显示不全或者每隔一个不显示的问题

### 解决方法设置间距为0 axisLabel: {  // 横轴信息全部显示 interval: 0 }

### 4.设置柱条(背景色为深蓝色)样式 itemStyle: {color: "deepskyblue"  },

![1570851163829](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570852300678.png)

### 5.封装成组件如何自动响应窗口重新渲染子传父，父调子

![1570852589228](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570852589228.png)

![1570852753091](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570852753091.png)

# 饼状图的使用

例子D:\offer\day4\shixibao\src\components的Pie.vue（饼状图）

圆环

![1570861944038](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570861944038.png)

![1570861979749](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570861979749.png)

圆

![1570862141502](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570862141502.png)

![1570862058761](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1570862058761.png)

# vue实现省市区三级联动

npm 安装

```js
npm install v-distpicker --save
```

Vue全局引入组件

```js
//main.js
import Distpicker from 'v-distpicker'
Vue.component('v-distpicker', Distpicker)
```

也可以那里需要，哪里引入 

```js
import VDistpicker from 'v-distpicker'
export default {
  components: { VDistpicker }
}
```

```html
<VDistpicker province="广东省" city="广州市" area="海珠区" @selected="onSelected"></VDistpicker>
```

绑了个change事件

```js
methods: {
      onSelected(data) {
        this.ruleForm.province = data.province.value
        this.ruleForm.city = data.city.value
        this.ruleForm.county = data.area.value
      },
    },
```

![1571295996620](https://github.com/zhangzhuoru/shixibao/blob/master/前端总结/img/1571295996620.png)

# [Vue上传文件：ElementUI中的upload实现](https://www.cnblogs.com/goloving/p/8967865.html)

```html
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
```

```js
export default {
    data() {
      return {
        doUpload:'/api/up/file'
        ,pppss:{
            srid:''
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
        }

    }
  }
```

第二种

```html
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
```

```js
export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        productImgs: [],
        isMultiple: true,
        imgLimit: 6,
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

    }
  }
```

# 若vue的属性为boolean

# 直接使用即可，不需要=“ture”。

# 自定义input输入框样式（贼好看）

```css
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
```

# 父组件打开关闭子组件

思路：Vue父组件调用子组件事件的方法来打开子组件，调用方法：

```html
<!-- 父调子
给子组件注册引用信息 父组件通过$refs拿到的是子组件的组件实例对象
-->
<!--父组件-->
<NoticeDesc ref='noticedesc'></NoticeDesc>

<!--子调父，第二种 -->
<!--在子组件标签上监听noticeParent事件 并通过getNotice进行事件处理 -->
<!--父组件-->
<chat-bar @noticeParent="getNotice"></chat-bar>
```

```js
//父组件通过$ref获取到子组件的实例对象并调用子组件的show方法
//父调子
this.$refs.noticedesc.show()

//通过vm.$parent拿到父组件实例，进行父组件中的事件/属性的操作
//子调父，第一种
this.$parent.parentMethod() //调用父组件的方法

//子调父，第二种
this.$emit('noticeParent', params) //注册noticeParent事件，对外广播，params是需要传输的参数
```

# vue全局引入js

1:创建公共JS(utils.js)  src/common/utils.js

```js
export default {
    text(){
        console.log("测试，测试！！！")
    }
}
```

2:在main.js中引入公共js并注册

```js
import Utils from './common/utils.js';
Vue.prototype.utils=Utils;
```

3:调用公共方法

```js
  this.utils.text();
```



**1. js为ES5的写法时，如下（自定义的my.js）:**

```js
function fun(){
    console.log('hello');     
}
```

　Vue中的全局引入方式为，在index.html中通过如下方式引入即

```js
<script src="src/models/my.js"></script>
```

可：

**2. js为 ES6 模块化写法时，即 import，export形式，如下：**

```js
var fun=function(){
    console.log('hello');
}
export default fun;
```

　Vue中全局引入的方式为，在main.js中添加如下代码：

```js
import fun from 'src/models/my.js';
Vue.prototype.$xx=fun;  //其中$xx为新命的名。
```

　使用方法为，在要调用的地方使用如下代码调用：

```js
var aa=this.$xx;
```

　　**注意，模块化引入方式时，要引入的 js export的值只可为一个，若多余一个如 export {var1,var2,...} 则不可使用这种方式 （经验证无效）。**