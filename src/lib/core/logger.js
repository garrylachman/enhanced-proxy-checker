/* @flow */
import LogUtil from 'log-util';

const singletonEnforcer = Symbol('Singleton Enforcer');

export default class Logger {
  logUtil: LogUtil;
  static singleton: Logger;
  constructor(enforcer: Symbol) {
    if (enforcer !== singletonEnforcer) { throw new Error('Cannot construct singleton'); }
    this.logUtil = new LogUtil.Log(0);
    console.log(this.logUtil);
  }
  static getInstance() {
    if (!Logger.singleton) {
      Logger.singleton = new Logger(singletonEnforcer);
    }
    return Logger.singleton;
  }
}
