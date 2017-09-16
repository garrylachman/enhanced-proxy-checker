/* @flow */
import Logger from './logger';

export default class Base {
  logger: Logger = Logger.getInstance();
  logDebug(...args: any) {
    this.logger.logUtil.debug(...[this.constructor.name].concat(args));
  }
  logInfo(...args: any) {
    this.logger.logUtil.info(...[this.constructor.name].concat(args));
  }
  logError(...args: any) {
    this.logger.logUtil.error(...[this.constructor.name].concat(args));
  }
}
