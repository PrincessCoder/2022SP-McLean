<script setup>
const props = defineProps(["item", "index"]);
console.log('the item', props.item);
</script>
<template>
    <div>
        <table class="collectionWrapper" v-bind:class="{ collectionRow: true, odd: index % 2 !== 0, owned: item.collected }">
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
                 <tr class="collectionRow" 
                 v-for="(item, index) in state.collections" 
                 v-bind:key="index" 
                 v-bind:class="{odd: (index % 2 !== 0), owned: card.collected}">
                    <td class="collection-player">{{ item.player }}</td>
                    <td class="collection-team">{{ item.team }}</td>
                    <td class="collection-position">{{ item.position }}</td>
                    <td class="collection-year">{{ item.cardYear }}</td>
                    <td class="collection-grade">{{ item.cardGrade }}</td>
                    <td class="collection">{{ card.collected }}</td>
                    <td class="actions">
                        <button type="button" v-on:click="$emit('deleteItem', item)">Delete</button>
                    </td>
                </tr>
            </tbody>    
        </table>
    </div>
    
</template>