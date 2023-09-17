<template>
	<form class="new-task-form" @submit.prevent="handleSubmit">
		<input type="text" name="newTask" v-model="newTask" required placeholder="I need to....">
		<button type="submit">Add</button>
	</form>
</template>

<script>
	import { ref } from 'vue';
	import { useTaskStore } from './../stores/TaskStore'

	const newTask = ref('')

	export default {
		setup(){
			const taskStore = useTaskStore() 
			const handleSubmit = () => {
				if(newTask.value.length > 0) {
					taskStore.addTask({
						id: Math.floor(Math.random() * 10000),
						isFav: false,
						title: newTask.value
					})
					newTask.value = ''
				}
			}

			return {handleSubmit, newTask}
		}
	}
</script>