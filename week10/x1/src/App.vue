<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink  to="/">Home</RouterLink> |
    <RouterLink  to="/alpaca">Alpaca</RouterLink> |
    <RouterLink  to="/llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family: "Gill Sans", 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body, #app{
  margin: 0px;
}
nav{
  width: 100%;
  height: 45px;
  background: rgb(23, 23, 54);
  text-align: center;
}
nav a, 
nav a:hover, 
nav a:link, 
nav a:active, 
nav a:visited {
  color: white;
  font-weight: 900px;
  font-size: 24px;
  text-decoration: none;
  line-height: 1.75;
  text-align: center;
}
nav a.router-link-active{
  text-decoration: none;
  color: rgb(216, 216, 130);
}
.container h1 {
  text-align: center;
  font-size: 48px;
}
.container p {
  width: 1000px;
  font-size: 16px;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
}
.container img {
  display: block;
  max-width: 1000px;
  width: 100%;
  margin: 20px auto 20px;
}
</style>
