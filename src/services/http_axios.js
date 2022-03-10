const axios = require('axios');
const baseUrl =
  'https://data.mongodb-api.com/app/application-0-mevky/endpoint/collaborators';

const Get_data = async () => {

  try {
   const resp = await axios.get(baseUrl, {method: 'GET'})
    return resp.data
  } catch (error) {
    console.log(error, '<<< error fetch');
  }

};

export  {Get_data}
