import request from 'supertest';
import { app } from '../server';

describe('GET api/v1/user/Dan', () => {
    test('should respond with 200', async () => {
        const response = await request(app).get('api/v1/user/samson');

        expect(response.statusCode).toBe(200);
    });
});

describe('GET api/v1/users', () => {
    test('should respond with 200', async () => {
        const response = await request(app).get('api/v1/users');

        expect(response.statusCode).toBe(200);
    });
});

describe('POST api/v1/user', () => {
    test('should respond with status 201', async () => {
        const response = await request(app).post('api/v1/user').send({
            name: 'Jaython',
            age: 20
        });

        expect(response.statusCode).toBe(201);
    });
});

describe('PUT api/v1/user/faizer', () => {
    test('should respond with status 202', async () => {
        const response = await request(app).post('api/v1/user').send({
            name: 'samson',
            field: 'name',
            value: 'sammy'
        });

        expect(response.statusCode).toBe(202);
    });
});

describe('DELETE api/v1/user/:<username>', () => {
    test('should respond with status 200', async () => {
        const response = await request(app).post('api/v1/user/jaython').send({
            name: 'jaython',
            field: 'name',
            value: 'sammy'
        });

        expect(response.statusCode).toBe(202);
    });
});
