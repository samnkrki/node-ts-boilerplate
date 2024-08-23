// store the functionality related code here

function getAllFeatures() {
  throw new Error('Not implemented')
  //TODO: connect to database and fetch all features
}

function getAFeature() {
  return { value: 'success' }
  // throw new Error('Unique error');
}

export default { getAllFeatures, getAFeature }
