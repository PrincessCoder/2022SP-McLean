<script setup>
//javascript here
const isWorking = true;
</script>

<template>
<!--html goes here-->
<div class="container">
  <h1>My first compiled Vue app</h1>
  <div v-if="isWorking">It is working</div>
</div>
</template>

<style>
/*style goes here */
.container {
  width: 600px;
  margin: 20px auto 0;
  text-align: center;
  font-size: 18 px;
}
</style>
