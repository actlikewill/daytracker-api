const app = require('../../index');
const supertest = require('supertest');
const { User } = require('../../models');
const request = supertest(app);

describe('USER ENDPOINTS', () => {
    beforeAll(async () => {
        User.destroy({force: true, truncate: { cascade: true}});
    });
    afterAll(async () => {
        User.destroy({force: true, truncate: { cascade: true}});
    });
    it('should create a new user', async (done) => {
        request
            .post('/api/authenticate')
            .send({ name: 'obamares', email: 'obamas@email.com', password: '1234456'})
            .end((err, res) => {
                if(err) return done(err);
                expect(res.body.user).toMatchObject({ name: 'obamares', email: 'obamas@email.com'});
                expect(res.body.newUser).toBe(true);
                done();
            });
    });
    it('should fetch existing user', async (done) => {
        request
            .post('/api/authenticate')
            .send({ name: 'obamares', email: 'obamas@email.com', password: '1234456'})
            .end((err, res) => {
                if(err) return done(err);
                expect(res.body.user).toMatchObject({ name: 'obamares', email: 'obamas@email.com'});
                expect(res.body.newUser).toBe(false);
                done();
            });
    });
    
});