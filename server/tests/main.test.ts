describe(':: Init tests', (): void => {
	beforeAll(() => {
		console.log('This is fired before all your tests')
	})

	afterAll(() => {
		console.log('This is fired after all your tests')
	})

	it('ASSERTS that true = true, woaw', async () => {
		expect(true).toBe(true)
	})
})
