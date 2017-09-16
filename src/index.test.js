import EnhancedProxyChecker from './index';

describe('index.js', () => {
  it('should say something', () => {
    console.log(typeof EnhancedProxyChecker);
    const instance = new EnhancedProxyChecker();
    expect(typeof EnhancedProxyChecker).toEqual('function');
    expect(instance.options.defaultStrategy).toEqual('tcp-strategy');

    const job = {
      host: '127.0.0.1',
      port: 8080,
      proxyType: 'http',
    };
    const jobResult = instance.check(job);
    expect(jobResult).not.toBeNull();
    // expect(enhancedProxyChecker('🐰')).toEqual('👉 🐰 👈');
    // expect(enhancedProxyChecker()).toEqual('No args passed!');
  });
});
