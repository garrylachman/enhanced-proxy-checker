/* @flow */
import BaseStrategy from './base';
import type { JobType } from '../data-types/types';

export default class TcpStrategy extends BaseStrategy {
  static strategyName: string = 'tcp-strategy';
  execute(job: JobType): boolean {
    this.logDebug(job);
    return true;
  }
}
