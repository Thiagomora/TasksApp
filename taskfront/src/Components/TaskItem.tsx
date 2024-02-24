
import { Task } from '../interfaces/task.interface'
import { useTasks } from '../context/useTasks'
import {IoCheckboxOutline,IoTrash} from 'react-icons/io5'

interface Props{
    task:Task
}

function TaskItem({task}:Props) {

  const {deleteTask, updateTask} = useTasks()

  return (
    <div key={task._id} className='bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer'>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div className='flex gap-x-2'>
                <button className='bg-green-500 px-3 py-2 rounded-lg'  onClick={() => updateTask(task._id, { done: !task.done })}>
                  {task.done ? (
                    <IoCheckboxOutline className="hover:text-green-500" />
                  ) : (
                    <IoCheckboxOutline className="text-gray-500" />
                  )}
                </button>
                  <IoTrash
                    className='bg-red-500 px-3 py-2 rounded-lg' 
                  onClick={async () => {
                  if(!window.confirm('Estas seguro que quieres eliminar esta tarea?')) return;
                  await deleteTask(task._id)
                }}
                  />
            </div>
          </div>
  )
}

export default TaskItem
