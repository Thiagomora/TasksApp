import { useContext } from "react";
import {TaskContext} from "./TaskContext";

export const useTasks = () => { //cuando uso el usetask
    const context = useContext(TaskContext) //el lee el contexto por mi
    if(!context) throw new Error("Las tareas deberian estar dentro de un task provider") //verifica si hay error
    return context // si pasa la validacion retorna el contexto
}