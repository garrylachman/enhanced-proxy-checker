/* @flow */
export type ProxyType = 'http' | 'https' | 'socks5' | 'socks4';
export type StrategyName = 'tcp-strategy' | 'http-strategy';
export type ExpectedResultName =
  | 'basic'
  | 'http-code'
  | 'content-match'
  | 'content-regex';

export type ExpectedResultBasic = {
  alwaysReturn: boolean,
};

export type ExpectedResultHttpCode = {
  allow: Array<number>,
};

export type ExpectedResultString = {
  matchExcact: boolean,
  matchString: string,
};

export type ExpectedResultRegex = {
  matchRegex: string,
};

export type ExpectedResult =
  | ExpectedResultBasic
  | ExpectedResultHttpCode
  | ExpectedResultString
  | ExpectedResultRegex;

export type ExpectedResultObject = {
  name: ExpectedResultName,
  options: ExpectedResult,
};

export type StrategyObject = {
  name: StrategyName,
  options: any,
};

export type ConfigType = {};

export type JobObject = {
  host: string,
  port: number,
  type: ProxyType,
  timeout: number,
  strategy: StrategyObject,
  expectedResult: ExpectedResultObject,
  testUrl: ?string, // for http only
};

export type JobBasicType = {
  host: string,
  port: number,
  type: ProxyType,
  timeout: number,
  strategy: StrategyObject,
  expectedResult: ExpectedResultObject,
};

export type HttpTypeProperties = {
  testUrl: string,
  expectedResult: ExpectedResult,
};

export type JobHttpType = {
  ...JobBasicType,
  ...HttpTypeProperties,
};

export type TcpTypeProperties = {||};
export type JobTcpType = {
  ...JobBasicType,
  ...TcpTypeProperties,
};

export type JobType = {
  ...JobHttpType,
  ...JobTcpType,
};
