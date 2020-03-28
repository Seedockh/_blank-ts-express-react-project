import { Request, Response, Router } from 'express'

const api = Router()

api.get('/', (req: Request, res: Response) => {
	res.status(200).json({ hello: "Now we're talking. Make this API rock ! 🚀" })
})

// create any subroute you'd like with
// api.use('/mysubroute', mysubroutefile)

export default api
