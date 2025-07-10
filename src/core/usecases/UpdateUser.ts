export class UpdateUser {
  constructor(private users: any[]) {}

  execute(id: string, newData: { name?: string; email?: string }) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;

    this.users[index] = {
      ...this.users[index],
      ...newData,
    };

    return this.users[index];
  }
}
