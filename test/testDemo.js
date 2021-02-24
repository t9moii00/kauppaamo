const server = require('../server');
const chai = require('chai');
const express = chai.expect;
chai.use(require('chai-http'));
chai.use(require('chai-json-schema-ajv'));

const getProducts = require('./products/getProducts.json');


var assert = require('assert');
describe('Products mocha testing', function() {

    before(() => server.start()); //palvelimen starttaus

    after(() => server.stop());  //palvelimen sulkeminen

  describe('Show product details', function() { //testi joka näyttää tuotteen1 yksityiskohdat
    it('should return details of product', async function() {

      await chai.request('http://localhost:3000')
      .get('/posting')
      .then(response => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.jsonSchema(getProducts);

      })
      .catch(error => {
          throw error;
      })

    });
  });
});