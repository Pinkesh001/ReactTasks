import React,{useState} from 'react'

const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleTask = () => {
        if (inputValue.trim() === "") return; // Prevent adding empty tasks
        const newTask = inputValue.trim();
        setInputValue(""); // Clear input field after adding
        setTasks([...tasks, newTask]);
    }
    const removetask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className='header'>
                <h1>Todo List</h1>
            </div>
            <input type="text" placeholder='Add your new todo' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button type='button' onClick={handleTask}>Add</button>

            <div className='todo-container'>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task} <button onClick={() => removetask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Todolist