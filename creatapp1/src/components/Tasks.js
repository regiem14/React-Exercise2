import Task from "./Task"

const Tasks = ({tasklist}) => {

   
    return (

        // setTasks([...tasklist, {}])
        <>
        {tasklist.map((tasklist)=>(<Task key={tasklist.id} />))}
        </>
    )
}

export default Tasks




/*const task = [
    {
        id: 1,
        text: 'Watch Memes',
        day: 'April 18, 2023',
        reminder: true
    },
    {
        id: 2,
        text: 'Play Stick it to Stickman',
        day: 'April 19, 2023',
        reminder: true
    },
    {
        id: 3,
        text: 'Stay Home',
        day: 'April 20, 2023',
        reminder: false
    },
    {
        id: 4,
        text: 'Watching mobiles',
        day: 'April 21, 2023',
        reminder: false
    },

];

const Tasks = () => {
    return (
        <>
        {task.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks*/