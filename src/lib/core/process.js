/* @flow */
import Base from './base';
import Job from './job';
import type { ExpectedResult } from '../data-types/types';
import { IStrategy } from '../strategies/base';
import { IExpectedResult } from '../expected-results/base';
import StrategyFactory from '../strategies/factory';
import ExpectedResultFactory from '../expected-results/factory';

export default class Process extends Base {
  check(job: Job) {
    this.logDebug(job);
    const strategyInstance: ?IStrategy = StrategyFactory(
      job.getStrategy().name,
      job.getStrategy().options
    );
    if (!strategyInstance) {
      throw new Error(`strategy: ${job.getStrategy().name} not found.`);
    }

    this.logDebug(strategyInstance);
    this.logDebug('expectedResultObject', job.getExpectedResult());
    const expectedResultInstance: ?IExpectedResult = ExpectedResultFactory(
      job.getExpectedResult().name,
      (job.getExpectedResult().options: ExpectedResult)
    );
    if (!expectedResultInstance) {
      throw new Error(
        `Expeced result: ${job.getExpectedResult().name} not found.`
      );
    }
    this.logDebug('expectedResultInstance', expectedResultInstance);
    return strategyInstance.execute(job, expectedResultInstance);
  }
}
