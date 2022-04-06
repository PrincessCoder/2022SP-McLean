<script setup>
import ConsoleList from "../data/consoles.json";
import { useRoute } from "vue-router";
const route = useRoute();
const paramId = route.params.id * 1;
console.log('this id is', id);
const item = CollectionDetails.find(item => {
    return item.id === paramId;
})
</script>

<template>
<div>
  <h1>{{ card.rank }}</h1>
  <h2>{{ card.title }}</h2>
  <img :src="card.cover" :alt="card.title" />
  <p>Artist: {{ card.artist }}</p>
</div>
</template>