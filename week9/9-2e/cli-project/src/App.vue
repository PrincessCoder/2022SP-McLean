<script setup>
//javascript here
const isWorking = true;
 const animals = [
      {
        name: "Lama",
        binomialName: "Lama glama",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Lama",
        species: "L. glama",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg",
        id: 0
        },
      {
        name: "Alpaca",
        binomialName: "Vicugna pacos",
        order: "Artiodactyla",
        family: "Camelidae",
        genus: "Vicugna",
        species: "V. pacos",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg",
        id: 1
      },
    ]
</script>

<template>
<!--html goes here-->
<div class="container">
  <h1>Camelids</h1>
  <div v-for="(animal, index) in animals" v-bind:key="index" class="animal-row">
    <h2>{{animal.name}}</h2>
    <h5>{{animal.binomialName}}, {{animal.order}}, {{animal.family}}, {{animal.genus}}, {{animal.species}}</h5>
    <img v-bind:src="animal.image" v-bind:alt="animal.name">
  </div>
</div>
</template>

<style>
/*style goes here */
.container {
  width: 600px;
  margin: 20px auto 0;
  font-size: 18 px;
}
.container h1 {
  text-align: left;
}
.container .animal-row img {
  width: 300px;
  display:block;
}

</style>
