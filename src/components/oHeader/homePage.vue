<template>
  <div>
    <p>
      主页
    </p>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 13, 14, 15, 16]
    };
  }
};
</script>

<style>
</style>