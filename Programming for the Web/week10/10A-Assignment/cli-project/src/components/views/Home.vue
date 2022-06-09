<script setup>
import { RouterLink } from 'vue-router';
import CardList from "../data/card-list.json";
import ItemRow from "../ItemRow.vue";
console.log("Card list", CardList);
</script>

<template>
<div class="app-wrapper">
    <h1>10A Assignment</h1>
  <div id="app" class="outer-container" v-cloak>
    <div class="container">
        <div><p>Card grading is based on four components.</p>
        <ul class="grading">
            <li>
                Centering
            </li>
            <li>
                Corners
            </li>
            <li>
                Edges
            </li>
            <li>
                Surface
            </li>
        </ul>
    </div>
</div>
</div>
 <table class="collectionWrapper">
            <thead class="collectionRow header">
                <tr>
                    <th class="collection-player">Player</th>
                    <th class="collection-team">Team</th>
                    <th class="collection-position">Position</th>
                    <th class="collection-year">Card Year</th>
                    <th class="collection-grade">Card Grade</th>
                    <th class="collected">Collected</th>
                    <th class="actions">Actions</th>
                </tr>
            </thead>
            <tbody>

    <ItemRow 
    v-for="(looper, index) in CardList" 
    v-bind:key="index" 
    v-bind:item="looper"
    v-bind:index="index"
    />
    </tbody>
</table>
</div>
  <!-- <div class="card-container">
    <div class="card-list-item" v-for="(card, index) in cardList" :key="index">
      <RouterLink :to="'/card/' + card.slug">{{ card.title }}</RouterLink>
    </div>
  </div> -->
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
