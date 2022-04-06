<script setup>
    // import { reactive } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import ItemRow from './components/ItemRow.vue'
    const collections = [
                    {
                    // object 1
                    // image: "img/Rodgers.jpg",
                    player: "Aaron Rodgers",
                    team: "Green Bay Packers",
                    position: "Quarterback",
                    cardYear: "2014",
                    cardGrade: "Bownman Chrome Superfractors card, Grading 9.5 Gem Mint",
                    collected: true,
                    id: 1
                    },
                    {
                    // object 2
                    player: "Tom Brady",
                    team: "New England Patriots",
                    position: "Quarterback",
                    cardYear: "2007",
                    cardGrade: "Topps Finest Blue Refractor card, Grading 8 Gem Mint",
                    collected: false,
                    id: 2
                    },
                    {
                    // object 3
                    player: "Ben Roethlisberger",
                    team: "Pittsburgh Steelers",
                    position: "Quarterback",
                    cardYear: "2009",
                    cardGrade: "Bownman Chrome Orange Refractor card, Grading 10 Gem Mint",
                    collected: false,
                    id: 3
                    },
                    {
                    // object 4
                    player: "Terry Bradshaw",
                    team: "Pittsburg Steelers",
                    position: "Quarterback",
                    cardYear: "2015",
                    cardGrade: "Topps Chrome Veteran Autographs card, Grading 9.5 Gem Mint",
                    collected: false,
                    id: 4
                    },
                    {
                    // object 5
                    player: "Philip Rivers",
                    teamName: "San Diego Chargers",
                    position: "Quarterback",
                    cardYear: "2006",
                    cardGrade: "Bownman Chrome Gold Refractor card, Grading 10 Gem Mint",
                    collected: false,
                    id: 5
                    }
    ];
    const newCollectionObj = {
        player: "",
        team: "",
        position: "",
        cardYear: "null",
        cardGrade: "",
        collected: false
    };
    const state = reactive({collections, newCollectionObj});
    function addCollection() {
        state.collections.push({
        player: state.newCollectionObj.player,
        team: state.newCollectionObj.team,
        position: state.newCollectionObj.position,
        cardYear: state.newCollectionObj.cardYear,
        cardGrade: state.newCollectionObj.cardGrade,
        collected: state.newCollectionObj.collected,
        id: state.newCollectionObj.collected.length + 1,
        });
        state.newCollectionObj.player = "";
        state.newCollectionObj.team = "";
        state.newCollectionObj.position = "";
        state.newCollectionObj.cardYear = "";
        state.newCollectionObj.cardGrade = "";
        state.newCollectionObj.collected = false
    }
    function handleDelete(itemToDelete){
        console.log(itemToDelete.id, itemToDelete.name);
        state.collections = state.collections.filter((itemToCheck) => {
            return itemToDelete !== itemToCheck;
        });
    }
</script>

<template>
    <div>
        <NavigationBar />
    <div class="container">
        <RouterView />
    </div>

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
    v-for="(looper, index) in state.collections" 
    v-bind:key="index" 
    v-bind:item="looper"
    v-bind:index="index"
    v-on:delete-item="handleDelete"
    />
    </tbody>
</table>
</div>
</div>
</template>

<style>
html, body, .app-wrapper {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
    font-family: Arial, Helvetica, sans-serif;
  }
.container {
    text-align: left;
    margin:auto;
    width: 894px;
    margin: 0 auto;
}
fieldset {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .7em;
    line-height: 3em;
    padding: 1em;
    width: 894px;
    margin: 0 auto;
}
.form_title {
    font-size: 1.5em;
    color:rgb(13, 97, 69);
}
h1 {
    font-size: x-large;
}
h1, h2, h3, h4, h5, h6, p {
    font-weight: 300;
    letter-spacing: normal;
    text-align: center;
    color: gray;
    padding-bottom: .5rem;
    border-bottom: 1px solid;
}
ul {
    background-color: rgb(133, 134, 134);
    padding: 1em;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    list-style-type: none;
}
li {
    color: #fff;
    font-weight: 300;
    font-size: .8rem;
    padding: .5em
}
table{
    text-align: left;
    border-collapse: collapse;
    padding: 1em;
    width: 894px;
    margin: 0 auto;
}
thead {
    background-color:rgb(164, 204, 204);
    text-align: left;
}
tbody {
    background-color: rgb(213, 230, 224);
    text-align: left;
}
th, tr, td {
    border-collapse: collapse;
    text-align: left;
    font-weight: 300;
    font-size: .7rem;
    /* display: flex; */
    padding: 1em;

}
/* .collection {
} */
a {
    font-size: .7rem;
    color:rgb(57, 129, 196);
}
.odd {
    background: #eee;
}
.grading {
    text-transform: uppercase;
    letter-spacing: .25em;
    margin: auto;
}
</style>
