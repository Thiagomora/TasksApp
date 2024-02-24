import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';
//el controler esta mas relacionado con interactuar con el cliente
@Controller('tasks') //route
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.finAll(); //consultamos todas las tareas
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.tasksService.findOne(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try {
      return await this.tasksService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Task already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204) //la peticion se realizo correctamente, pero no hay nada que mostrar
  async delete(@Param('id') id: string) {
    const task = await this.tasksService.delete(id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const task = await this.tasksService.update(id, body);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }
}
