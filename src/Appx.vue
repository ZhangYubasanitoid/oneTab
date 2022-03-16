<template>
    <div>
         <Hellow :abs='abs'/>
    </div>
</template>

<script>
export default {
    data() {
    return {
      abs:  [
               {
                   name : "1.菜单",
                   children : [
                       {
                           name : "1.菜单-1",
                       },
                       {
                           name : "1.菜单-2",
                       },
                   ]
               },
               {
                   name : "2.菜单",
                   children : [
                       {
                           name : "2.菜单-1",
                       },
                       {
                           name : "2.菜单-2",
                           children : [
                                {
                                    name : "2.菜单-2-1",
                                    children : [
                                        {
                                            name : "2.菜单-2-1-1",
                                        },
                                        {
                                            name : "2.菜单-2-1-2",
                                        },
                                    ]
                                },
                                {
                                    name : "2.菜单-2-2",
                                },
                            ]
                       },
                   ]
               },
               {
                   name : "3.菜单",
                   children : [
                       {
                           name : "1.菜单-1",
                       },
                       {
                           name : "1.菜单-2",
                       },
                   ]
               },
           ]
    }
  },
  components:{
    Hellow:()=>import('./components/HelloWorld.vue'),
  },
}
</script>

<style scoped>

</style>