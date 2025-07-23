<template>
<section>
  <div class="characters">
        <!-- <div class="item_characters" v-for="personaje in characters" :key="personaje.id">
        {{ personaje }}
        </div> -->
                
    <h1>aqui va texto</h1>{{  characters}}
  </div>
</section>


</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';


    export default {
        setup (){
            const store =useStore()
            const characters = computed (()=>{
                return store.state.charactersFilter
            })
            onMounted (()=>{
                store.dispatch('setCharactersFilter')
            })
            return {
                characters
            }
        }
    }

</script>

<style></style>