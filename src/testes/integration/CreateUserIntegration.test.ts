import request from 'supertest';
import { app } from '../../infra/app'; // ajuste o caminho conforme a localização do seu arquivo app.ts/app.js


describe('POST /users', () => {
  it('deve retornar status 201 ao criar usuário', async () => {
    const response = await request(app).post('/users').send({
      name: 'Laysa',
      email: 'lays@example.com'
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
