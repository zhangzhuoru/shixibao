<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style>
/*公共样式*/
#app{
  background-color: #F0F4F7;
}
*{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  margin:0;
  padding:0;
  list-style: none;
}
.btn{
  list-style: none;
  margin:0;
  padding:0;
}
.btn：hover{
  cursor:pointer
}
.logoout {
    position: fixed;
    z-index: 90;
    bottom: 17vh;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #579fe9;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px #666;
    cursor:pointer;
}
.bluebtn{
  display: inline-block;
  color: #579fe9;
  max-width: 100px;
  padding: 5px 10px;
  border: 1px solid #eee;
  cursor:pointer;
  border-radius: 6px;
}
.bluebtn>i{
  margin-right: 5px;
}
 /* {浏览器滚动条设置 */

    /* width */

  ::-webkit-scrollbar {

width: 10px;

height: 10px;

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

</style>
