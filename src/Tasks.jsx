import React, { useState } from "react";
import { nanoid } from "nanoid";
import InputBox from "./Input_button";
import AddTask from "./AddTask";

function Tasks(props) {
  // useState hook for managing the visibility of the AddTask component
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([
    { name: "play basketball", id: nanoid(), second_id: "" },
    { name: "learn English", id: nanoid(), second_id: "" },
    { name: "learn react", id: nanoid(), second_id: "" },
  ]);

  // Function to toggle the visibility of the AddTask component
  const toggleAddTask = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="bg-gray-700 w-96 right-0 absolute mr-80">
        <h1 className="text-5xl text-purple-300">TASKS</h1>
        <div className="grid justify-center">
          {tasks.map((task) => (
            <InputBox
              key={task.id}
              the_name={task.name}
              my_id={task.id}
              my_second_id={task.second_id}
            />
          ))}
        </div>
      </div>
      <button
        className="text-white top-80 right-96 bg-purple-400 absolute"
        onClick={toggleAddTask} // Pass the function reference
      >
        Add Task
      </button>
      {visible && <AddTask setTasks={setTasks} tasks={tasks} />}
    </>
  );
}

export default Tasks;
