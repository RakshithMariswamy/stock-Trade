exports.handler = async function (event, context) {
  const companyURL = 'https://stock-app-priyesh-heroku.herokuapp.com/stock'
    return await fetch(companyURL)
  }