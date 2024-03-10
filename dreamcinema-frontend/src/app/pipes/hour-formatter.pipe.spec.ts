import { HourFormatterPipe } from './hour-formatter.pipe';

describe('HourFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new HourFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
