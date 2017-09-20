/* @flow */
import Base from '../core/base';
import type { JobType } from '../data-types/types';

export interface IStrategy {
  constructor(...args: any): IStrategy,
  execute(job: JobType): *,
}

export default class BaseStrategy extends Base implements IStrategy {
  static strategyName: string;
  async execute(job: JobType) {
    this.logDebug(job);
    throw new Error('Abstract method');
  }
}
