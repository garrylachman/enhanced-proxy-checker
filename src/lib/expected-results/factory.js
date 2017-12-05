/* @flow */
import BacicResult from './basic';
import HttpCodeResult from './http-code';
import type { IExpectedResult } from './base';
import type { ExpectedResultName } from '../data-types/types';

type ExpectedResulItem = {
  name: ExpectedResultName,
  item: Class<IExpectedResult>,
};

const expectedResults: Array<ExpectedResulItem> = [
  ({
    name: BacicResult.expectedResultName,
    item: BacicResult,
  }: ExpectedResulItem),
  ({
    name: HttpCodeResult.expectedResultName,
    item: HttpCodeResult,
  }: ExpectedResulItem),
];

export default function (
  name: ExpectedResultName,
  ...args: any
): ?IExpectedResult {
  const inst: any = expectedResults
    .filter(row => row.name === name)
    .map(row => row.item);
  if (inst[0]) {
    return (new inst[0](...args): IExpectedResult);
  }
  return null;
}
