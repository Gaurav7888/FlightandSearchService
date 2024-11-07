const axios = require('axios');

axios.get('http://localhost:3000/api/v1/airport/1')
  .then(response => {
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
