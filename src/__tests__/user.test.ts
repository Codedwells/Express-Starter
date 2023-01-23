import request from 'supertest';
import mongoose from 'mongoose';
import app from '../server';



describe('GET /ping', () => {
    test('est route should return 200 ok', (done) => {
        request(app)
            .get('/ping')
            .end((err, res) => {
                if (err) done(err);

                expect(res.statusCode).toBe(200);
                done();
            });
    });
});

describe('GET /user/dan', () => {
    test('should respond with 200', (done) => {
        request(app)
            .get('/user/dan')
            .end((err, res) => {
                if (err) done(err);

                expect(res.statusCode).toBe(200);
                done();
            });
    });
});

describe('GET /users', () => {
    test('should respond with 200', (done) => {
        request(app)
            .get('/users')
            .end((err, res) => {
                if (err) done(err);

                expect(res.statusCode).toBe(200);
                done();
            });
    });
});

describe('POST /user', () => {
    test('should respond with status 201', (done) => {
        request(app)
            .post('/user')
            .send({
                name: 'Jaython',
                age: 20
            })
            .end((err, res) => {
                if (err) done(err);

                expect(res.statusCode).toBe(201);
                done();
            });
    });
});

describe('PUT /user', () => {
    test('should respond with status 202', (done) => {
        request(app)
            .put('/user')
            .send({
                name: 'samson',
                field: 'age',
                value: '20'
            })
            .end((err, res) => {
                if (err) done(err);

                expect(res.statusCode).toBe(202);
                done();
            });
    });
});

describe('DELETE /user/:<username>', () => {
    test('should respond with status 200', (done) => {
        request(app)
            .delete('/user/jaython')
            .end((err, res) => {
                if (err) done(err);

                expect(res.statusCode).toBe(200);
                done();
            });
    });
});
