export class DeleteUser {
  constructor(private users: any[]) {}

  execute(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}
