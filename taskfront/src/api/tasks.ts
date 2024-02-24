import { CreateTask, UpdateTask } from "../interfaces/task.interface";

const api = "http://localhost:3000/api";

export const createTaskRequest = (task: CreateTask) =>  //crea una tarea en la base de datos
    fetch(`${api}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    })
        
export const getTasksRequest = () => fetch(`${api}/tasks`) //obtiene todas las tareas de la base de datos

export const deleteTaskRequest = (id: string) => fetch(`${api}/tasks/${id}`,
    {method:"DELETE",}
);

export const updateTaskRequest = async (id:string, task: UpdateTask) => 
    fetch(`${api}/tasks/${id}`,{
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
        "Content-Type" : "aplication/json",
    }
});
