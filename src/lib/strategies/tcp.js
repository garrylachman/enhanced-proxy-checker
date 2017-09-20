/* @flow */
import { Socket } from 'net';
import BaseStrategy from './base';
import type { JobType } from '../data-types/types';

export default class TcpStrategy extends BaseStrategy {
  static strategyName: string = 'tcp-strategy';
  async execute(job: JobType) {
    this.logDebug(job);
    let res;
    await this.tcpCheck(job.host, job.port, job.timeout)
      .then((result: boolean) => {
        res = result;
      })
      .catch(err => {
        this.logError(err);
        res = false;
      });
    this.logDebug('result', res);
    return res;
  }
  async tcpCheck(host: string, port: number, timeout: number) {
    this.logDebug(`tcp check ${host}:${port}, timeout: ${timeout}`);

    return new Promise((resolve, reject) => {
      const socket = new Socket();
      const onError = () => {
        this.logError('tcp check fail');
        socket.destroy();
        return reject(new Error('Host not reachable or timeout'));
      };

      socket.setTimeout(timeout);
      socket.on('error', onError);
      socket.on('timeout', onError);

      socket.connect({ host, port }, () => {
        this.logDebug('tcp check sucess');
        socket.end();
        return resolve(true);
      });
    });
  }
}
