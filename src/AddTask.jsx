import React from "react";
import { nanoid } from "nanoid";

function AddTask({ setTasks, tasks }) {
  const my_task_content = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const inputValue = document.getElementById("Task").value;

    // Update the tasks array with the new task
    setTasks([...tasks, { name: inputValue, id: nanoid(), second_id: "" }]);
  };

  return (
    <form
      className="w-40 h-20 row-start-13 z-20 top-56"
      onSubmit={my_task_content}
    >
      <label htmlFor="Task">Enter the task name: </label>
      <input type="text" id="Task" />
      <input type="submit" value="Add Task" className="bg-white" />
    </form>
  );
}

export default AddTask;
