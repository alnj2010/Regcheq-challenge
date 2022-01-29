import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import assert from 'assert';
import request from 'supertest';
import { RegcheqBackendApp } from '../../../../src/app/RegcheqBackendApp';

let _request: request.Test;
let application: RegcheqBackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status);
});

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).post(route).send(JSON.parse(body));
});

Then('the response should be:', (response: string) => {
  assert.deepStrictEqual(_response.body, JSON.parse(response));
});

BeforeAll(async () => {
  application = new RegcheqBackendApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
