<script setup>
import CardList from "../data/card-list.json";
import { useRoute, RouterLink } from "vue-router";
const route = useRoute();
const paramId = route.params.id * 1;
console.log('this id is', paramId);
const card = CardList.find(item => {
    return item.id === paramId;
})
console.log(card)
</script>

<template>
<div>
  <div><RouterLink to="/">Home</RouterLink></div>
  <h1>{{ card.player }}</h1>
  <h2>{{ card.team }}</h2>
  <p>Position: {{ card.position }}</p>
  <p>Card Year: {{ card.cardYear }}</p>
  <p>Card Grade: {{ card.cardGrade }}</p>
  <p>Collected: {{ card.collected }}</p>
</div>
</template>