/* @flow */
import Process from './lib/core/process';
import type {
  JobType,
  ConfigType,
  StrategyName,
  ExpectedResultObject,
} from './lib/data-types/types';

export default class Main {
  options: ConfigType = {
    strategy: 'tcp-strategy',
    expectedResult: {
      name: 'basic',
      options: {},
    },
  };
  constructor(userOptions: ConfigType) {
    this.options = Object.assign(this.options, userOptions);
  }
  check(job: JobType) {
    return Main.checkWithStrategy(
      this.options.strategy,
      job,
      this.options.expectedResult
    );
  }
  setDefaultStrategy(strategyName: StrategyName) {
    this.options.strategy = strategyName;
  }
  setDefaultExpectedResult(expectedResultObject: ExpectedResultObject) {
    this.options.expectedResult = expectedResultObject;
  }
  static checkWithStrategy(
    strategyName: string,
    job: JobType,
    expectedResultObject: ExpectedResultObject
  ) {
    const process: Process = Main.createProcess(strategyName);
    return process.check(job, expectedResultObject);
  }
  static createProcess(strategyName: string, ...rest: any): Process {
    return new Process(strategyName, ...rest);
  }
}
