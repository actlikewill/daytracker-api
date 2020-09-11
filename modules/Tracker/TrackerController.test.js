const app = require('../../index');
const supertest = require('supertest');
const request = supertest(app);
const { User, Activity } = require('../../models');
const { generateToken } = require('../Auth');

const testUser = { name: 'obama', email: 'obamas@email.com', password: '1234456', uuid: '3c2c037f-a884-4e0b-b8c7-1b0b86580096'};
const testActivity = { 
                uuid: '3c2c037f-a884-4e0b-b8c7-1b0b86580096',
                activity: 'golfing',
                activityId: 'ef9142c2-41cd-4e1e-9a8e-899759cb2ebb'
            };
const testToken = generateToken(testUser);


describe('TRACKER ENDPOINTS', () => {
    beforeAll(async () => {
        await User.destroy({force: true, truncate: { cascade: true}});
        await Activity.destroy({force: true, truncate: { cascade: true}})        
    });
      afterAll(async () => {
        await User.destroy({force: true, truncate: { cascade: true}});
        await Activity.destroy({force: true, truncate: { cascade: true}}) 
      });
      beforeEach(async () => {
        await User.findOrCreate({where: {...testUser}}); 
        await Activity.findOrCreate({where: {...testActivity}});
      });

      it('starts to track an activity',  async (done) => {
        request
          .post('/api/start_tracking')
          .set('authorization', testToken)
          .send({ activityId: testActivity.activityId})
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body).toMatchObject({activity : {...testActivity}});
            expect(res.body.tracker.uuid).toEqual(testActivity.uuid);
            done();
          });
    });
});