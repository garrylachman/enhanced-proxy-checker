/* @flow */
import Process from './lib/core/process';
import type { JobType, ConfigType } from './lib/data-types/types';

export default class Main {
  options: ConfigType = {
    defaultStrategy: 'tcp-strategy',
  };
  constructor(userOptions: ConfigType) {
    this.options = Object.assign(this.options, userOptions);
  }
  check(job: JobType): boolean {
    return Main.checkWithStrategy(this.options.defaultStrategy, job);
  }
  static checkWithStrategy(strategyName: string, job: JobType): boolean {
    const process: Process = Main.createProcess(strategyName);
    return process.check(job);
  }
  static createProcess(strategyName: string, ...rest: any): Process {
    return new Process(strategyName, ...rest);
  }
}
