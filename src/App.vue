<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- loading -->
    <div class="loading" v-if="loading">Loading tasks...</div>

    <!-- new task -->
    <div class="new-task">
      <TaskForm />
    </div>

    <!-- Switch -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
      <button @click="taskStore.$reset">Reset Tasks</button>
    </nav>

    <!-- Task lists -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} tasks left to do</p>
      <div v-for="task in favs" :key="task.id">
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
import { storeToRefs } from 'pinia';

  export default {
    components: {TaskDetails, TaskForm},
    setup () {
      const taskStore = useTaskStore()
      const filter = ref("all")
      const { tasks, favs, loading, favCount, totalCount } = storeToRefs(taskStore)

      // fetch tasks
      taskStore.getTasks()
      return ({
        taskStore,
        filter,
        tasks,
        favs,
        loading,
        favCount,
        totalCount
      })
    }
  }
</script>