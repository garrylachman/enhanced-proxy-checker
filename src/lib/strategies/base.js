/* @flow */
import Base from '../core/base';
import Job from '../core/job';
import { IExpectedResult } from '../expected-results/base';
// import type { JobType } from '../data-types/types';

export interface IStrategy {
  constructor(...args: any): IStrategy,
  execute(job: Job, expectedResult: IExpectedResult): *,
}

export default class BaseStrategy extends Base implements IStrategy {
  static strategyName: string;
  async execute(job: Job, expectedResult: IExpectedResult) {
    if (this.constructor === BaseStrategy) {
      throw new Error('Abstract method');
    }
    this.logDebug(this.constructor.name, 'job', job);
    this.logDebug(this.constructor.name, 'job:type', job.getType());
    this.logDebug(this.constructor.name, 'expectedResult', expectedResult);
  }
}
