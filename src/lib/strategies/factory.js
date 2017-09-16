/* @flow */
import TcpStrategy from './tcp';
import type { IStrategy } from './base';

type StrategiesItem = {
  name: string,
  item: Class<IStrategy>,
};

const strategies: Array<StrategiesItem> = [
  ({ name: TcpStrategy.strategyName, item: TcpStrategy }: StrategiesItem),
];

export default function (name: string, ...args: any): ?IStrategy {
  const inst: any = strategies
    .filter(row => row.name === name)
    .map(row => row.item);
  if (inst[0]) {
    return (new inst[0](...args): IStrategy);
  }
  return null;
}
