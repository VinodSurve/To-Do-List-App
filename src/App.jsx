import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");

  const [taskList, setTaskList] = useState(() => {
    const localValue = localStorage.getItem("TASKLIST");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TASKLIST", JSON.stringify(taskList));
  }, [taskList]);

  const task = {
    title: newTask,
    isCompleted: false,
    id: Math.random(),
  };

  function addTask(e) {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  }

  return (
    <>
      <div className="pt-20">
        <Header />
        <InputForm
          addTask={addTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />
        <TaskList
          taskList={taskList}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  );
}

export default App;

// React component based on javascript function return jsx.
// jsx means mixture of HTML and JavaScript
// function increaseCount(){
//   setCount(count+1);
// }
// function decreaseCount(){
//   if(count>0){
//     setCount(count-1);
//   }
// }
// function resetCount(){
//   setCount(0);
// }
{
  /* We create function outside return and call function inside button */
}
{
  /* <h1>This count is {count}</h1>
<button onClick={increaseCount}>Increase Count</button>
<button onClick={decreaseCount}>Decrease Count</button>
<button onClick={resetCount}>Reset Count</button> */
}

{
  /* directly call function state */
}
{
  /* <h1>This count is {count}</h1>
<button onClick={()=>{setCount(count+1)}}>Increase Count</button>
<button onClick={()=>{if(count>0){setCount(count-1)}}}>Decrease Count</button>
<button onClick={()=>{setCount(0)}}>Reset Count</button> */
}
