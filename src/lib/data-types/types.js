/* @flow */
export type ProxyType = 'http' | 'https' | 'socks5' | 'socks4';
export type StrategyName = 'tcp-strategy' | 'http-strategy';

export type ConfigType = {
  strategy: StrategyName,
};

export type ExpectedResultHttpCode = {
  allow: number,
};

export type ExpectedResultString = {
  matchExcact: boolean,
  matchString: string,
};

export type ExpectedResultRegex = {
  matchRegex: string,
};

export type ExpectedResult =
  | ExpectedResultHttpCode
  | ExpectedResultString
  | ExpectedResultRegex;

export type JobBasicType = {|
  host: string,
  port: number,
  type: ProxyType,
  timeout: number,
|};

export type HttpTypeProperties = {|
  testUrl: string,
|};

export type JobHttpType = {|
  ...JobBasicType,
  ...HttpTypeProperties,
|};

export type TcpTypeProperties = {||};
export type JobTcpType = {|
  ...JobBasicType,
  ...TcpTypeProperties,
|};

export type JobType = {|
  ...JobHttpType,
  ...JobTcpType,
|};
