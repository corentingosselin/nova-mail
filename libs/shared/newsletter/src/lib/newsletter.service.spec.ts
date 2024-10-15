import { newsletter } from './newsletter.service';

describe('newsletter', () => {
  it('should work', () => {
    expect(newsletter()).toEqual('newsletter');
  });
});
