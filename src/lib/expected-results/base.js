/* @flow */
import Base from '../core/base';
import type { ExpectedResultName } from '../data-types/types';

export interface IExpectedResult {
  constructor(...args: any): IExpectedResult,
  execute(response: any): boolean,
}

export default class BaseExpectedResult extends Base
  implements IExpectedResult {
  static expectedResultName: ExpectedResultName;
  async execute(response: any) {
    this.logDebug(response);
    throw new Error('Abstract method');
  }
}
