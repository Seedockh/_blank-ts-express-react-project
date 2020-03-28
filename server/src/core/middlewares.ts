import { Application } from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cacheControl from 'express-cache-controller'
import cors from 'cors'

export const Middlewares = (app: Application): void => {
	app.use(
		cors({
			origin: '*', // after change to url website
			credentials: true,
		}),
	)
	app.use(helmet())
	app.use(cacheControl({ noCache: true }))
	app.use(bodyParser.urlencoded({ extended: true }))
}
