<template>
<div class="btn-group " role="group" aria-label="Basic mixed styles example">
  <button  type="button" :class="'btn btn-'+type" @click="$emit('click')">
      <slot></slot>
  </button>
</div>
</template>

<script>
    export default {
        props:['type']
    }
</script>

<style scoped>

</style>