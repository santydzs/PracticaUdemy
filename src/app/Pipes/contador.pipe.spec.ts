import { ContadorPipe } from './contador.pipe';

describe('CapitalizadoPipe', () => {
  it('create an instance', () => {
    const pipe = new ContadorPipe();
    expect(pipe).toBeTruthy();
  });
});
