import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
	state: () => ({
		tasks: [
			{ id: 1, title: "Hello world", isFav: false },
			{ id: 2, title: "Vanakkam world", isFav: true },
		],
	}),
});
