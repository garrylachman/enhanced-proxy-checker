/* @flow */
import Process from './lib/core/process';
import type { JobType, ConfigType, StrategyName } from './lib/data-types/types';

export default class Main {
  options: ConfigType = {
    strategy: 'tcp-strategy',
  };
  constructor(userOptions: ConfigType) {
    this.options = Object.assign(this.options, userOptions);
  }
  check(job: JobType) {
    return Main.checkWithStrategy(this.options.strategy, job);
  }
  setStrategy(strategyName: StrategyName) {
    this.options.strategy = strategyName;
  }
  static checkWithStrategy(strategyName: string, job: JobType) {
    const process: Process = Main.createProcess(strategyName);
    return process.check(job);
  }
  static createProcess(strategyName: string, ...rest: any): Process {
    return new Process(strategyName, ...rest);
  }
}
