import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/tasks.schemas';
import { CreateTaskDto } from '../dto/create-task.dto';
//el service es el que esta mas relacionado con interactuar con la base de datos
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {} //inyectamos el modelo

  finAll() {
    //Metodo que busca todos los datos
    return this.taskModel.find();
  }

  async create(createTaskDto: CreateTaskDto) {
    const newTask = new this.taskModel(createTaskDto);
    return newTask.save();
  }

  async findOne(id: string) {
    //Metodo que busca un dato por id
    return this.taskModel.findById(id);
  }

  async delete(id: string) {
    //Borrar un dato por id
    return this.taskModel.findByIdAndDelete(id);
  }

  async update(id: string, task: any) {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
