import request from 'supertest';
import { expect } from 'chai';
import { app } from '../server';

describe('GET api/v1/user/Dan', () => {
    it('should return Dan as an object', (done) => {
        request(app).get('api/v1/user/Dan').expect(200, done);
    });
});

describe('GET api/v1/users', () => {
    it('should return all users', (done) => {
        request(app).get('api/v1/users').expect(200, done);
    });
});

// describe('POST api/v1/user', () => {
//     it('should return 201 user created', (done) => {
//         request(app)
//             .post('api/v1/user')
//             .field('name', 'Jamurah')
//             .field('age', 20)
//             .end((err, res) => {
//                 expect(res.error).to.be.false;
//                 done();
//             })
//             .expect(201);
//     });
// });

describe('PUT api/v1/user/faizer', () => {
    it('should return 200 ok for user info update', (done) => {
        request(app)
            .put('api/v1/faizer')
            .expect(200)
            .end((err, res) => {
                expect(res.error).not.to.be.undefined;
                done();
            });
    });
});

describe('DELETE api/v1/user/:<username>', () => {
    it('should return 200 for used removed', (done) => {
        request(app)
            .delete('api/v1/user/dan')
            .expect(200)
            .end((err, res) => {
                expect(res.error).not.to.be.undefined;
                done();
            });
    });
});
