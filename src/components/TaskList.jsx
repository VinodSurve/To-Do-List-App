
const TaskList = ({taskList,toggleTask,deleteTask}) => {
  return (
    <ul className="">
        { 
          taskList.map((task)=>{
            return (
                <li  className=" flex flex-row  justify-center items-center gap-x-6 text-2xl my-2" >
                  <input type="checkbox" checked={task.isCompleted} onChange={() => toggleTask(task.id)} className="w-5 h-5"/>
                  <h1 style={{color: task.isCompleted ? "#475569":"black",textDecoration:task.isCompleted ? "line-Through":"none",backgroundColor:task.isCompleted ? "#bbf7d0":"white",}} className="w-1/5">{task.title}</h1>
                  <button onClick={()=> deleteTask(task.id)}>Delete</button>
                </li>
            );
          })
        }
    </ul>
  )
}

export default TaskList;
