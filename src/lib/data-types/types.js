/* @flow */
export type ProxyType = 'http' | 'https' | 'socks5' | 'socks4';
export type StrategyName = 'tcp-strategy' | 'http-strategy';
export type ExpectedResultName =
  | 'basic'
  | 'http-code'
  | 'content-match'
  | 'content-regex';

export type ExpectedResultBasic = {};

export type ExpectedResultHttpCode = {
  allow: number | Array<number>,
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

export type ConfigType = {
  strategy: StrategyName,
  expectedResult: ExpectedResultObject,
};

export type JobBasicType = {|
  host: string,
  port: number,
  type: ProxyType,
  timeout: number,
|};

export type HttpTypeProperties = {|
  testUrl: string,
  expectedResult: ExpectedResult,
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
