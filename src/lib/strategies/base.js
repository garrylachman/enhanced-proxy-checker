/* @flow */
import Base from '../core/base';
import type { JobType } from '../data-types/types';

export interface IStrategy {
  constructor(...args: any): IStrategy,
  execute(job: JobType): boolean,
}

export default class BaseStrategy extends Base implements IStrategy {
  static strategyName: string;
  execute(job: JobType): boolean {
    this.logDebug(job);
    throw new Error('Abstract method');
  }
}
