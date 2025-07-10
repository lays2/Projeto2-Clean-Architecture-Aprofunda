export class GetUserById {
  constructor(private users: any[]) {}

  execute(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
