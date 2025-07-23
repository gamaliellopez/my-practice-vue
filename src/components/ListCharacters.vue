<template>
  <section>
    <div class="characters">
      <div class="item_characters" v-for="personaje in characters" :key="personaje.id">
       <img :src="personaje.image" :alt="personaje.name" class="characters-img "/>
       <div class="character-info">
      <h2>{{ personaje.name }}</h2>
      <p><strong>Species:</strong> {{ personaje.species }}</p>
      <p><strong>Status:</strong> {{ personaje.status }}</p>
      <p><strong>Origin:</strong> {{ personaje.origin.name }}</p>
    </div>
        
      </div>
      </div>

  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const characters = computed(() => store.state.charactersFilter);

    onMounted(() => {
      store.dispatch('getCharacters'); // ← Acción correcta
    });

    return {
      characters
    };
  }
}
</script>

<style>
/* Estilos básicos opcionales */
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  gap: 1rem; /* Espacio entre las cards */
  padding: 1rem;
}
.item_characters {
  display: flex;
  align-items: center;
  border: 1px solid #180303;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.characters-img {
width: 150px;
  height: auto;
  border-radius: 10px;
  margin-right: 1rem;
  filter: brightness(0.5);
}
.characters-img:hover {
  transform: scale(1.2);
  filter: brightness(1);

}
.character-info {
  flex: 1;
}

.character-info h2 {
  margin: 0 0 0.5rem;
}
.character-info h2:hover {
  color: rgb(255, 152, 0);
}

.character-info p {
  margin: 0.2rem 0;
}
</style>
