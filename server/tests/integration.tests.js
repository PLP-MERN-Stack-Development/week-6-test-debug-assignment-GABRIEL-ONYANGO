const request = require('supertest');
const app = require('../app');

describe('POST /api/bugs', () => {
  it('should create a new bug', async () => {
    const res = await request(app).post('/api/bugs').send({ title: 'Bug', description: 'Details' });
    expect(res.statusCode).toBe(201);
  });
});
