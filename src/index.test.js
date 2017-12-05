import caronteProxy from 'caronte-proxy';
import EnhancedProxyChecker from './index';

const defaultProxyOptions = { auth: false };
const caronte = caronteProxy(defaultProxyOptions);
const instance = new EnhancedProxyChecker();

describe('index.js', () => {
  beforeAll(done => {
    caronte.on('listening', () => done());
    caronte.listen(6766);
  });

  afterAll(done => {
    caronte.on('close', () => done());
    caronte.close();
  });

  it('tcp', async done => {
    expect(typeof EnhancedProxyChecker).toEqual('function');
    expect(instance.options.strategy).toEqual('tcp-strategy');

    const job = {
      host: '127.0.0.1',
      port: 6766,
      proxyType: 'http',
      timeout: 5000,
    };
    const jobResult = await instance.check(job);
    expect(jobResult).not.toBeNull();
    expect(jobResult).toBeTruthy();
    done();
  });

  it('http', async done => {
    instance.setDefaultStrategy('http-strategy');
    instance.setDefaultExpectedResult({
      name: 'basic',
      options: {},
    });
    expect(instance.options.strategy).toEqual('http-strategy');

    const job = {
      host: '127.0.0.1',
      port: 6766,
      proxyType: 'http',
      timeout: 5000,
      testUrl: 'http://www.example.com',
    };
    const jobResult = await instance.check(job);
    expect(jobResult).not.toBeNull();
    expect(jobResult).toBeTruthy();
    done();
  });

  it('http - checkWithStrategy', async done => {
    const job = {
      host: '127.0.0.1',
      port: 6766,
      proxyType: 'http',
      timeout: 5000,
      testUrl: 'http://www.example.com',
    };

    const expectedResult = {
      name: 'basic',
      options: {},
    };

    const jobResult = await EnhancedProxyChecker.checkWithStrategy(
      'http-strategy',
      job,
      expectedResult
    );
    expect(jobResult).not.toBeNull();
    expect(jobResult).toBeTruthy();
    done();
  });
});
