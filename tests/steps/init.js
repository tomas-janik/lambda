let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://8mgcv40mti.execute-api.eu-west-1.amazonaws.com/dev"
  process.env.restaurants_table = "restaurants-dev-tjanik"
  process.env.AWS_REGION        = "eu-west-1"
  
  initialized = true
}

module.exports = {
  init
}