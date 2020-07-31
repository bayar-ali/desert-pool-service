const app = require('../../server') 
const supertest = require('supertest')
const request = supertest(app)

describe('GET /customers', () => {
    //ask for help 
    it('returns customers info', async (done) => {
      const res = await request
        .get('/customers')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(res.status).toBe(200); 
        done(); 
    });
  });