/* @flow */
import Base from './base';
import type {
  JobObject,
  ProxyType,
  StrategyObject,
  ExpectedResultObject,
} from '../data-types/types';

export default class Job extends Base {
  options: JobObject;
  constructor(options: JobObject) {
    super();
    this.options = options;
  }
  getHost(): string {
    return this.options.host;
  }
  getPort(): number {
    return this.options.port;
  }
  getType(): ProxyType {
    return (this.options.type: ProxyType);
  }
  getTimeout(): number {
    return this.options.timeout;
  }
  getStrategy(): StrategyObject {
    return (this.options.strategy: StrategyObject);
  }
  getExpectedResult(): ExpectedResultObject {
    return (this.options.expectedResult: ExpectedResultObject);
  }
  getTestUrl(): ?string {
    return this.options.testUrl;
  }
}
