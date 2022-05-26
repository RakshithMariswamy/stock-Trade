exports.handler = async function (event, context) {
  try{
    const companyURL = 'https://stock-app-priyesh-heroku.herokuapp.com/stock'
     const response = await fetch(companyURL)
     const data = await response.json();
     console.log(data);
     return { 
         statusCode: 200,
         body: JSON.stringify({data})
     }
  } catch(err){
    console.log(err)
  }
  
  }