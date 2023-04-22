import AddTask from "./components/AddTask.js";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import { useState } from "react";

function App() {
  
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasklist, setTasks] = useState([
    {
      id: 1,
      text: "Watch Memes",
      day: "April 18, 2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Play Stick it to Stickman",
      day: "April 19, 2023",
      reminder: true,
    },
    {
      id: 3,
      text: "Stay Home",
      day: "April 20, 2023",
      reminder: false,
    },
    {
      id: 4,
      text: "Watching mobiles",
      day: "April 21, 2023",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasklist, newTask]);
  };

  const deleteTask = (id) => {
    // alert('delte test' + id);
    // console.log('This is a delete task code block function', id)
    setTasks(tasklist.filter((tasklist) => tasklist.id !== id));
  };

  const toggleActive = (id) => {
    // console.log(id);
    setTasks(
      tasklist.map((tasklist) =>
        tasklist.id === id
          ? { ...tasklist, reminder: !tasklist.reminder }
          : tasklist
      )
    );
  };

  return (
    <div className="container animate__heartBeat">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasklist.length > 0 ?<Tasks tasklist={tasklist} onDelete={deleteTask} onToggle={toggleActive}/> : "No Tasks accomplish"}
    </div>
  );
}

export default App;
