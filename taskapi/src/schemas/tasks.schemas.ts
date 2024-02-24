import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
//desde shchemas le decimos a mongodb como van a ser los campos de la base de datos
@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    unique: true,
    required: true,
    trim: true, //elimina los espacios en blanco del principio y al final
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
