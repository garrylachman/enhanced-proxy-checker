/* @flow */
// import http from 'http';
import requestPromise from 'request-promise';
import BaseStrategy from './base';
import Job from '../core/job';
import { IExpectedResult } from '../expected-results/base';

export default class HttpStrategy extends BaseStrategy {
  static strategyName: string = 'http-strategy';
  async execute(job: Job, expectedResult: IExpectedResult) {
    this.logDebug(this.constructor.name, 'job', job);
    this.logDebug(this.constructor.name, 'job:type', job.getType());
    this.logDebug(this.constructor.name, 'expectedResult', expectedResult);
    let res;
    await this.httpCheck(
      job.getHost(),
      job.getPort(),
      job.getTimeout(),
      job.getTestUrl() || 'http://www.example.com',
      expectedResult
    )
      .then((result: boolean) => {
        res = result;
      })
      .catch(err => {
        this.logError(err);
        res = false;
      });
    this.logDebug('result', res);
    return res;
  }
  async httpCheck(
    host: string,
    port: number,
    timeout: number,
    testUrl: string,
    expectedResult: IExpectedResult
  ) {
    this.logDebug(`http check ${host}:${port}, timeout: ${timeout}`);

    return new Promise((resolve, reject) => {
      const proxiesRequest = requestPromise.defaults({
        proxy: `http://${host}:${port}`,
        resolveWithFullResponse: true,
      });

      proxiesRequest
        .get(testUrl)
        .then(response => {
          if (response) {
            const result = expectedResult.execute(response);
            return resolve(result);
          }
          return reject();
        })
        .catch(error => reject(error));
    });
  }
}
