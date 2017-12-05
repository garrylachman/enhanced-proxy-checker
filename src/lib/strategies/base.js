/* @flow */
import Base from '../core/base';
import { IExpectedResult } from '../expected-results/base';
import type { JobType } from '../data-types/types';

export interface IStrategy {
  constructor(...args: any): IStrategy,
  execute(job: JobType, expectedResult: IExpectedResult): *,
}

export default class BaseStrategy extends Base implements IStrategy {
  static strategyName: string;
  async execute(job: JobType, expectedResult: IExpectedResult) {
    this.logDebug('job', job);
    this.logDebug('expectedResult', expectedResult);
    throw new Error('Abstract method');
  }
}
