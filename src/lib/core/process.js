/* @flow */
import Base from './base';
import type { JobType } from '../data-types/types';
import { IStrategy } from '../strategies/base';
import StrategyFactory from '../strategies/factory';

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
  check(job: JobType) {
    this.logDebug(job);

    this.logDebug(this.strategy);
    return this.strategy.execute(job);
  }
}
