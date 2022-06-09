<script setup>
const props = defineProps(["item", "index"]);
console.log('the item', props.item);
</script>
<template>
                 <tr class="collectionRow" 
                 v-bind:class="{odd: (index % 2 !== 0), owned: item.collected}">
                    <td class="collection-player">{{ item.player }}</td>
                    <td class="collection-team">{{ item.team }}</td>
                    <td class="collection-position">{{ item.position }}</td>
                    <td class="collection-year">{{ item.cardYear }}</td>
                    <td class="collection-grade">{{ item.cardGrade }}</td>
                    <td class="collection">{{ item.collected }}</td>
                    <td class="actions">
                        <button type="button" v-on:click="$emit('deleteItem', item)">Delete</button>
                    </td>
                </tr>
</template>