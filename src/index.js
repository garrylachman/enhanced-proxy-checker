/* @flow */
import Process from './lib/core/process';
import Job from './lib/core/job';
import type { JobObject, ConfigType } from './lib/data-types/types';

export default class Main {
  options: ConfigType = {};
  static process: Process;
  constructor(userOptions: ConfigType) {
    this.options = Object.assign(this.options, userOptions);
  }
  static check(jobOptions: JobObject) {
    if (!Main.process) {
      Main.process = Main.createProcess();
    }
    const jobObj: Job = new Job(jobOptions);
    return Main.process.check(jobObj);
  }
  static createProcess(...args: any): Process {
    return new Process(...args);
  }
}
