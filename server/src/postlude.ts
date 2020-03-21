// Handle nodemon specific signal
process.on('SIGUSR2', () => {
	process.exit(0)
})
