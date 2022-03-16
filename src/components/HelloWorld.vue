<template>
  <div>
      <ul v-for="(item,index) in abs" :key="index">
        <li> {{item.name}} </li>
        <HelloWorld  v-if="item.children&& item.children.length " :abs='item.children'></HelloWorld>  
      </ul>
  </div>
</template>

<script>
  export default {
    name:'HelloWorld',
    props:['abs']
  }
</script>

<style scoped>

</style>