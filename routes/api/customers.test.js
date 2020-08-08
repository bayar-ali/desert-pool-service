const app = require('../../server') 
const supertest = require('supertest')
const request = supertest(app)

describe('GET /customers', () => {
    //ask for help 
    it('returns customers info', async (done) => {
      const res = await request
        .get('/customers')
        .set('Accept', 'application/text/html')
        .expect('Content-Type', text/html)
        // .expect(res.status).toBe(200); 
        done(); 
    });
  });