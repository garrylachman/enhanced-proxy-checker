/* @flow */
export default function enhancedProxyChecker(input: string) {
  return input ? `👉 ${input} 👈` : 'No args passed!';
}
