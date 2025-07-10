import { v4 as uuidv4 } from 'uuid';

export class CreateUser {
  execute(data: { name: string; email: string }) {
    const id = uuidv4();
    const createdAt = new Date();

    return {
      id,
      name: data.name,
      email: data.email,
      createdAt,
    };
  }
}
