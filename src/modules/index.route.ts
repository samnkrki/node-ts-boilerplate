import { Router } from 'express'
import featureRouter from './feature/feature.router'

const router = Router()
// add common validation middleware here
router.use('/feature', featureRouter)

export default router
