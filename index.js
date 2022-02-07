// const axios = require('axios')
// import axios from 'axios'
const axios = require("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js")

axios
  .get('ct9xmxzn1rxdhr4bnz0dtcdz9qfh36.burpcollaborator.net/from_axois/')
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })




// Get arguments from the command line
const arg_list = process.argv.slice(2);
console.log('myArgs: ', arg_list);


