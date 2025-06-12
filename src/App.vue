<template>
  <div class="container mt-5">
    <h1 class="text-primary mb-4">Mi Lista de Tareas</h1>
    
    <div class="input-group mb-3">
      <input v-model="newTask" type="text" class="form-control" placeholder="Nueva tarea" @keyup.enter="addTask" />
      <button class="btn btn-primary" @click="addTask">Agregar</button>
    </div>

    <ul class="list-group">
      <li v-for="(task, index) in tasks" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        {{ task }}
        <button class="btn btn-danger btn-sm" @click="removeTask(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if(this.newTask.trim() !== '') {
        this.tasks.push(this.newTask.trim())
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>
