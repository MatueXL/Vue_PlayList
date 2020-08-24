<template>
  <div class="users">
    <ul>
      <li
        v-for="(user,i) in User"
        :Key="i"
        @click="user.show = !user.show"
      >
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      User: [
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'Gary', position: '程序员', show: false },
        { name: 'Troy', position: '码畜', show: false },
        { name: 'Emily', position: '学生', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
      ]
    }
  },
}
</script>

<style>
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
}

li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  border: 1px solid #222;
}
</style>

/**
 * 尽量不要在for循环中修改相应数据，不然会导致无限循环。
 * 慎用内联表达式，对于自定义vue属性而言，它会被渲染器自执行。
 * 尽可能用事件改变状态，驱动页面渲染重绘。（一开始我就用属性绑定，导致无限循环）
 * 
 * 1. 组件初始化时，将数据属性show值设置为false
 * 2. 当渲染方法执行，内联表达式 ` show = !show ` 改变了状态
 * 3. 响应状态show改变，重新执行render方法，企图生成新的Vnode节点（以便生成真实节点插入页面）
 * 4. 于是产生的局面会无尽循环这样：render - show改变 - render 重复执行步骤2-3-2
 */