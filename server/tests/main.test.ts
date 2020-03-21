import { expect } from 'chai'

beforeAll(() => {
  console.log('This is fired before all your tests')
})

afterAll(() => {
  console.log('This is fired after all your tests')
})

describe(':: Init tests', (): void => {
  it('ASSERTS that true = true, woaw', async () => {
    expect(true).equals(true)
  })
})
