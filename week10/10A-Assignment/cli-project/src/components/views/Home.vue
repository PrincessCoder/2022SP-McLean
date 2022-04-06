<script setup>
import { RouterLink } from 'vue-router';
import cardList from "../data/music-list.json";
console.log("Card list", cardList);
</script>

<template>
  <div class="card-container">
    <div class="card-list-item" v-for="(card, index) in cardList" :key="index">
      <RouterLink :to="'/card/' + card.slug">{{ card.title }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-list-item {
  width: auto;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background: #fff;
}

.card-list-item:hover {
  background: #000111;
}

.card-list-item a {
  color: black;
}

.card-list-item:hover a {
  color: #fff;
}
</style>
