<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- loading -->
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

    <!-- new task -->
    <div class="new-task">
      <TaskForm />
    </div>

    <!-- Switch -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>

    <!-- Task lists -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} tasks left to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

  </main>
</template>

<script>
  import { ref } from 'vue';
  import { useTaskStore } from './stores/TaskStore';
  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue';

  export default {
    components: {TaskDetails, TaskForm},
    setup () {
      const taskStore = useTaskStore()
      const filter = ref("all")

      // fetch tasks
      taskStore.getTasks()
      return ({
        taskStore,
        filter
      })
    }
  }
</script>