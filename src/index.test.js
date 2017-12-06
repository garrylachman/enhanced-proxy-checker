import caronteProxy from 'caronte-proxy';
import EnhancedProxyChecker from './index';

const defaultProxyOptions = { auth: false };
const caronte = caronteProxy(defaultProxyOptions);

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

    const job = {
      host: '127.0.0.1',
      port: 6766,
      type: 'http',
      timeout: 5000,
      strategy: {
        name: 'tcp-strategy',
        options: {},
      },
      expectedResult: {
        name: 'basicz',
        options: {},
      },
    };
    const jobResult = await EnhancedProxyChecker.check(job);
    console.log(jobResult);
    expect(jobResult).not.toBeNull();
    expect(jobResult).toBeTruthy();
    done();
  });

  it('http', async done => {
    expect(typeof EnhancedProxyChecker).toEqual('function');

    const job = {
      host: '127.0.0.1',
      port: 6766,
      type: 'http',
      timeout: 5000,
      testUrl: 'http://www.example.com',
      strategy: {
        name: 'http-strategy',
        options: {},
      },
      expectedResult: {
        name: 'http-code',
        options: {
          allow: [200, 201, 301, 302],
          z: 'z',
        },
      },
    };
    const jobResult = await EnhancedProxyChecker.check(job);
    console.log(jobResult);
    expect(jobResult).not.toBeNull();
    expect(jobResult).toBeTruthy();
    done();
  });
});
