<template>
  <div class="todo">
    <h1>Mis tareas</h1>
    <input v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Agregar nueva tarea">
    <ul>
      <li v-for="(tarea, index) in tareas" :key="index">
        <input type="checkbox" v-model="tarea.completada">
        <span :class="{ completada: tarea.completada }">{{ tarea.texto }}</span>
        <button @click="eliminarTarea(index)">🗑</button>
      </li>
    </ul>
    <p>Total: {{ tareas.length }} | Completadas: {{ tareasCompletadas }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      nuevaTarea: '',
      tareas: []
    }
  },
  computed: {
    tareasCompletadas() {
      return this.tareas.filter(t => t.completada).length;
    }
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim()) {
        this.tareas.push({ texto: this.nuevaTarea, completada: false });
        this.nuevaTarea = '';
      }
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    }
  }
}
</script>

<style>
.todo {
  font-family: Arial, sans-serif;
  padding: 30px;
}
.completada {
  text-decoration: line-through;
  color: gray;
}
</style>
