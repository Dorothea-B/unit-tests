import { multiply } from './1-multiplication'

describe('1-multiplication', () => {
  it('should return the value from multiplying two numbers', () => {
    expect(multiply(2, 5)).toEqual(10)
  })
})
