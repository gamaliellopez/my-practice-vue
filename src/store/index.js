import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []

  },
  mutations: {
    setCharacters(state, payload){
        state.characters = payload
    },
    setcharactersFilter(state, payload){
        state.charactersFilter = payload
    }
  },
  actions: {
   async getCharacters({commit}){
    try {
        const response = await fetch('https://rickandmortyapi.com/api')
        const data = await response.json
        console.log(data)
    } catch (error) {
        console.error(error)
    }
   }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})

    // export default store
