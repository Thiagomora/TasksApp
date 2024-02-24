import { ChangeEvent, FormEvent, useState } from "react"
import { useTasks } from "../context/useTasks"

function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: '',
    done: false
  })

  const {createTask} = useTasks()

  const handleChange = (e: ChangeEvent<HTMLInputElement|
    HTMLTextAreaElement>) =>{ //el evento viene de un input o text area
    setTask({...task, [e.target.name]: e.target.value}) //se le asigna el valor de los inputs a la tarea title y description
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createTask(task)
    
  }

  return (
    <div>

    <form onSubmit={handleSubmit}>

    <input type="text" name="title" className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800
    block w-full my-y2"
    placeholder="Write a title"
    onChange={handleChange}
    />

    <textarea name="description" rows={3}
    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800
    block w-full my-y2"
    placeholder="Write a description"
    onChange={handleChange}
    ></textarea>

    <label htmlFor="" className="inline-flex items-center gap-x-2">
      <input type="checkbox"
      className="h-5 w-5 text-indigo-600 "
      onChange= {() => setTask({ ...task, done: !task.done})}
      />
      <span>Done</span>
    </label>

    <button className="bg-indigo-500 px-3 block py-2 w-full">
      Save
    </button>

    </form>

    </div>
  )
}

export default TaskForm