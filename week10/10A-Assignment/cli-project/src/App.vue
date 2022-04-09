<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import ItemRow from './components/ItemRow.vue';
    import CardList from './components/data/card-list.json';
</script>

<template>
    <div>
        <NavigationBar />
    <div class="container">
        <RouterView />
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
