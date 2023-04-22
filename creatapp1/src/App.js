import AddTask from "./components/AddTask.js";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import { useState , useEffect } from "react";

function App() {
  
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasklist, setTasks] = useState([]);



  useEffect(()=>{
    const getTasks = async() =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
        getTasks()
  }, []);
  

    const fetchTasks = async()=>{
      const res = await fetch('https://localhost:5000/tasks')
      const data = await res.json();
      return data
    }


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
