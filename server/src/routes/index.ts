import { Router } from 'express'

const api = Router()

api.get('/', (req, res) => {
	res.status(200).send("Now we're talking. Make this API rock ! 🚀")
})

// create any subroute you'd like with
// api.use('/mysubroute', mysubroutefile)

export default api
