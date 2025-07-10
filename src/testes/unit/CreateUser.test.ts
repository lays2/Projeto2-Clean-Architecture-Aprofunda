import { CreateUser } from '../../core/usecases/CreateUser';


describe('CreateUser UseCase', () => {
  it('deve criar um usuário com nome e email válidos', () => {
    const createUser = new CreateUser();

    const user = createUser.execute({ name: 'Laysa', email: 'lays@example.com' });

    expect(user.name).toBe('Laysa');
    expect(user.email).toBe('lays@example.com');
  });
});
