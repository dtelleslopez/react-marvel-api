/* eslint-disable no-undef */

import getApiUrl from '../getApiUrl';

describe('getApiUrl function', () => {
  test('It should return a valid api url', () => {
    const url = getApiUrl();
    const urlParams = new URLSearchParams(url);

    expect(url).not.toBe(null);
    expect(urlParams.get('ts')).not.toBe(undefined);
    expect(urlParams.get('apikey')).not.toBe(undefined);
    expect(urlParams.get('hash')).not.toBe(undefined);
  });
});

/* eslint-enable no-undef */
