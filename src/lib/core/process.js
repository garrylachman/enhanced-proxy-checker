/* @flow */
import Base from './base';
import type { JobType, ExpectedResultObject } from '../data-types/types';
import { IStrategy } from '../strategies/base';
import { IExpectedResult } from '../expected-results/base';
import StrategyFactory from '../strategies/factory';
import ExpectedResultFactory from '../expected-results/factory';

export default class Process extends Base {
  strategy: IStrategy;
  constructor(processStrategyName: any, ...rest: any) {
    super();
    const strategyInstance: any = StrategyFactory(processStrategyName, ...rest);
    if (strategyInstance) {
      this.strategy = (strategyInstance: IStrategy);
    } else {
      throw new Error('No strategy found');
    }
  }
  check(job: JobType, expectedResultObject: ExpectedResultObject) {
    this.logDebug(job);

    this.logDebug(this.strategy);
    this.logDebug('expectedResultObject', expectedResultObject);
    const expectedResultInstance: any = ExpectedResultFactory(
      expectedResultObject.name,
      expectedResultObject.options
    );
    if (!expectedResultInstance) {
      throw new Error('No expected result found');
    }
    this.logDebug('expectedResultInstance', expectedResultInstance);
    return this.strategy.execute(
      job,
      (expectedResultInstance: IExpectedResult)
    );
  }
}
