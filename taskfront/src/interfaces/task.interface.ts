export interface Task {
    _id: string;
    title: string;
    description?: string;
    done?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export type CreateTask = Omit<Task,'_id'|'createdAt'|'updatedAt'>; //creamos un tipo que no tenga los campos _id, createdAt y updatedAt
export type UpdateTask = Partial<CreateTask>;