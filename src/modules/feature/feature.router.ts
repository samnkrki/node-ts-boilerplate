import { Router } from 'express'
import featureController from './feature.controller'
import { validateData } from '../../middlewares'
import featureSchema from './feature.schema'

const router = Router()

router.get(
  '/',
  validateData({
    body: featureSchema.featureAddBSchema,
  }),
  featureController.getAllFeatures,
)

router.get('/test', featureController.getAllFeatures)
router.get('/tested', featureController.getAFeature)
export default router
