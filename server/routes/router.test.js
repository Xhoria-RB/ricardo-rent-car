const request = require('supertest');
const { expect } = require('chai');

const app = require('../../app');

describe('Router - GET /ping', () => {
  it('Should responde with a 200 response', async () => {
    await request(app)
      .get('/ping')
      .expect(200);
  });

  it('Should be an empty object', async () => {
    const response = await request(app)
      .get('/ping');

    // eslint-disable-next-line no-unused-expressions
    expect(response.body).to.be.a('object').that.is.empty;
  });
});
