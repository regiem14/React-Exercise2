
const Task = ({tasklist}) => {
  return (
    <div className='task'>
        <h3>{tasklist.text}</h3>
        <p>{tasklist.day}</p>
    </div>
  )
}

export default Task