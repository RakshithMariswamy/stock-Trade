import fetch from "cross-fetch"
exports.handler = async function (event, context) {
  const companyURL = "https://stock-app-priyesh-heroku.herokuapp.com/stock"
  console.log(companyURL)
  const response = await fetch(companyURL)
  const data = await response.json()
  console.log(data)
  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  }
}
