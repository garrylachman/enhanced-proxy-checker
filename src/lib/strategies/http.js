/* @flow */
// import http from 'http';
import requestPromise from 'request-promise';
import BaseStrategy from './base';
import type { JobType } from '../data-types/types';
import { IExpectedResult } from '../expected-results/base';

export default class HttpStrategy extends BaseStrategy {
  static strategyName: string = 'http-strategy';
  async execute(job: JobType, expectedResult: IExpectedResult) {
    this.logDebug('HttpStrategy', job);
    this.logDebug('HttpStrategy', job.type);
    this.logDebug('HttpStrategy', expectedResult);
    let res;
    await this.httpCheck(job.host, job.port, job.timeout, job.testUrl)
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
    testUrl: string
  ) {
    this.logDebug(`http check ${host}:${port}, timeout: ${timeout}`);

    return new Promise((resolve, reject) => {
      const proxiesRequest = requestPromise.defaults({
        proxy: `http://${host}:${port}`,
      });

      proxiesRequest
        .get(testUrl)
        .then(response => {
          if (response) {
            return resolve(true);
          }
          return reject();
        })
        .catch(error => reject(error));
    });
  }
}
