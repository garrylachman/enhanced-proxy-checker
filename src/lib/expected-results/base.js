/* @flow */
import Base from '../core/base';
import type { ExpectedResultName } from '../data-types/types';

export interface IExpectedResult {
  options: any,
  constructor(...args: any): IExpectedResult,
  execute(response: any): boolean,
}

export default class BaseExpectedResult extends Base
  implements IExpectedResult {
  static expectedResultName: ExpectedResultName;
  options: any;
  constructor(...args: any) {
    super(...args);
    this.options = args[0] || {};
    this.logDebug('BaseExpectedResult:options', this.options);
  }
  async execute(response: any): any {
    this.logDebug(response);
    throw new Error('Abstract method');
  }
}
