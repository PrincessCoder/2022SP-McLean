<script setup>
import { useRoute } from 'vue-router';
import cardList from "../data/card-list.json"

const route = useRoute();
console.log(route.params.slug);
const card = cardList.find((card) => {
  return card.slug === route.params.slug;
})
</script>

<template>
<div class="card-detail" 
  :class="{
    rising: card.rank > card.position.positionLastWeek,
    falling: card.rank < card.position.positionLastWeek,
    same: card.rank === card.position.positionLastWeek,
    }"
>
  <h1>{{ card.rank }}</h1>
  <h2>{{ card.title }}</h2>
  <img :src="card.cover" :alt="card.title" />
  <p>Artist: {{ card.artist }}</p>
  </div>
</template>

<style scoped>
.card-detail.rising {
  border: 1 px solid green;
}
.card-detail.falling {
  border: 1 px solid red;
}
.card-detail.same {
  border: 1 px solid orange;
}
</style>