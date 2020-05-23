const app = require('../../index');
const supertest = require('supertest');
const request = supertest(app);
const { User, Activity } = require('../../models');
const { generateToken } = require('../Auth');

const testUser = { name: 'obama', email: 'obamas@email.com', password: '1234456', uuid: '3c2c037f-a884-4e0b-b8c7-1b0b86580096'};
const testToken = generateToken(testUser);
describe('ACTIVITIES ENDPOINTS', () => {
  beforeAll(async () => {
    await User.destroy({force: true, truncate: { cascade: true}});
    await Activity.destroy({force: true, truncate: { cascade: true}})       
});
  afterAll(async () => {
    await User.destroy({force: true, truncate: { cascade: true}});
    await Activity.destroy({force: true, truncate: { cascade: true}})
  });
  beforeEach(async () => {
    const { name, email, password, uuid} = testUser
    await User.findOrCreate({where: {email}, defaults: {name, email, password, uuid}}); 
    
  });

  it('adds an activity', async (done) => {
      request
        .post('/api/activity')
        .set('authorization', testToken)
        .send({ activity: 'running campaign'})
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body.activity[0]).toMatchObject({activity : 'running campaign'});
          done();
        });
  });
  it('gets all activities', async (done) => {
    request
        .get('/api/activities')
        .set('authorization', testToken)
        .end((err, res) => {
          if (err) return done(err)
          expect(res.body.activities[0]).toMatchObject({activity : 'running campaign'});
          done();
        });
  });  
})