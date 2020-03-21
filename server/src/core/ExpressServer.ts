import express, { Application, Request, Response } from 'express'
import { Server } from 'http'
import chalk from 'chalk'
import api from '../routes'

class ExpressServer {
	// server | api instance
	private app: Application = express()
	private server: Server = new Server(this.app)

	public run(): void {
		const { PORT: port } = process.env

		this.app.get('/', (req: Request, res: Response) => {
			res.send('Welcome on your app root endpoint ! Try to get /api now :)')
		})

		this.app.use('/api', api)

		this.server.listen(port, () => {
			console.log(
				chalk.bold.magenta(`💫  Server is running on localhost:${port}`),
			)
		})
	}
}

export default Object.freeze(new ExpressServer())
