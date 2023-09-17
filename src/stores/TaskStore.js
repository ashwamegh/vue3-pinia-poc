import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
	state: () => ({
		tasks: [
			{ id: 1, title: "Hello world", isFav: false },
			{ id: 2, title: "Vanakkam world", isFav: true },
		],
	}),
	getters: {
		favs() {
			return this.tasks.filter((t) => t.isFav);
		},
		favCount() {
			return this.tasks.reduce((acc, t) => (t.isFav ? acc + 1 : acc), 0);
		},
		totalCount() {
			return this.tasks.length;
		},
		totalCountArrow: (state) => {
			return state.tasks.length;
		},
	},
	actions: {
		addTask(task) {
			this.tasks.push(task);
		},
		deleteTask(id) {
			this.tasks = this.tasks.filter((t) => t.id !== id);
		},
		toggleFav(id) {
			const task = this.tasks.find((t) => t.id === id);
			task.isFav = !task.isFav;
		},
	},
});
