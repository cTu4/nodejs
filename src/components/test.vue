<template>
  <ul>
    <li v-for="item in rows"><button>{{item}}</button></li>
  </ul>
</template>

<script>
    export default {
        name: "test",
        data(){
           return  {rows: ['one','two']}
        }
    }
</script>

<style scoped>

</style>
