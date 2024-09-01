import { Router } from 'express'
import featureController from './feature.controller'
import featureSchema from './feature.schema'
import { validateData } from '../../middlewares'

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
