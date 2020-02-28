/* eslint-disable no-undef */

import getThumbnailUrl from '../getThumbnailUrl';

describe('getThumbnailUrl function', () => {
  test('It should return an empty string', () => {
    expect(getThumbnailUrl(undefined)).toBe('');
    expect(getThumbnailUrl('John')).toBe('');
    expect(getThumbnailUrl({})).toBe('');
    expect(getThumbnailUrl([])).toBe('');
    expect(getThumbnailUrl(null)).toBe('');
    expect(getThumbnailUrl(123)).toBe('');
    expect(getThumbnailUrl([{
      type: 'wiki',
      url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=f0ca21df20e6b759e226be4155c14a84',
    }, {
      type: 'comiclink',
      url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=f0ca21df20e6b759e226be4155c14a84',
    }])).toBe('');
  });

  test('It should return a valid url', () => {
    expect(getThumbnailUrl([{
      type: 'detail',
      url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=f0ca21df20e6b759e226be4155c14a84',
    }, {
      type: 'wiki',
      url: 'http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=f0ca21df20e6b759e226be4155c14a84',
    }, {
      type: 'comiclink',
      url: 'http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=f0ca21df20e6b759e226be4155c14a84',
    }])).toBe('http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=f0ca21df20e6b759e226be4155c14a84');
  });
});

/* eslint-enable no-undef */
