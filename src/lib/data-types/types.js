/* @flow */
export type ProxyType = {
  type: 'http' | 'https' | 'socks5' | 'socks4',
};

export type JobType = {
  host: string,
  port: number,
  type: ProxyType,
};

export type ConfigType = {
  defaultStrategy: string,
};
