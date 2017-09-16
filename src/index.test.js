import enhancedProxyChecker from './index';

describe('index.js', () => {
  it('should say something', () => {
    expect(enhancedProxyChecker('🐰')).toEqual('👉 🐰 👈');
    expect(enhancedProxyChecker()).toEqual('No args passed!');
  });
});
