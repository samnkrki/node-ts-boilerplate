// store routing and controller information here
import { Request, Response } from 'express'
import featureService from './feature.service'
import response from '../../helpers/response'

const { success } = response

function getAllFeatures(_req: Request, _res: Response) {
  //TODO: Implement this function
  return featureService.getAllFeatures()
}

function getAFeature(_req: Request, res: Response) {
  return success(res)({ data: featureService.getAFeature() })
}

export default { getAllFeatures, getAFeature }
