/* @flow */
import BaseExpectedResult from './base';
import type {
  ExpectedResultName,
  ExpectedResultHttpCode,
} from '../data-types/types';

export default class HttpCodeResult extends BaseExpectedResult {
  static expectedResultName: ExpectedResultName = 'http-code';
  constructor(options: ExpectedResultHttpCode) {
    super(options);
    this.logDebug('HttpCodeResult:options', options);
  }
  async execute(result: any): any {
    this.logDebug('result.statusCode', result.statusCode);
    return this.options.allow.includes(result.statusCode);
  }
}
