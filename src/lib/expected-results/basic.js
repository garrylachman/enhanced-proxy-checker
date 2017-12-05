/* @flow */
import BaseExpectedResult from './base';
import type { ExpectedResultName } from '../data-types/types';

export default class BasicResult extends BaseExpectedResult {
  static expectedResultName: ExpectedResultName = 'basic';
  async execute(result: any) {
    this.logDebug(result);
  }
}
