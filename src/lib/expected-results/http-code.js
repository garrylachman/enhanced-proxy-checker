/* @flow */
import BaseExpectedResult from './base';
import type { ExpectedResultName } from '../data-types/types';

export default class HttpCodeResult extends BaseExpectedResult {
  static expectedResultName: ExpectedResultName = 'http-code';
  async execute(result: any) {
    this.logDebug(result);
  }
}
