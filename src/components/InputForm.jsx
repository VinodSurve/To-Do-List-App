const InputForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <form
      action="submit"
      onSubmit={addTask}
      className="flex flex-col justify-center items-center my-6"
    >
      <input
        type="text"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        placeholder="Add New To-Do"
        className="w-1/3 h-12 border rounded-lg px-3 my-5"
      />
      <button className=" w-1/3 h-12 bg-black text-white rounded-lg">
        Add New Task
      </button>
    </form>
  );
};

export default InputForm;
