// app.js

// Import task functions
import {
  addTask,
  getAllTasks,
  completeTask
} from "./task.js";

// 1. Add some tasks
console.log(addTask("Learn JavaScript", "high", "2026-02-01"));
console.log(addTask("Practice React", "medium", "2026-02-05"));
console.log(addTask("Do Assignment", "low", "2026-02-03"));

// 2. Display all tasks
const allTasks = getAllTasks();
console.log("All Tasks:");
console.log(allTasks);

// 3. Complete a task
console.log(completeTask(2));

// 4. Display all tasks again
const updatedTasks = getAllTasks();
console.log("Updated Tasks:");
console.log(updatedTasks);
console.log("\nPress Ctrl+C to exit...");
setInterval(() => {}, 1000);
