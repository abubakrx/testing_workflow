const axios = require('axios')
// import axios from 'axios'
// const axios = 
// require("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js")

// axios
//   .get('https://pkdadaq0s4oq84voecrqkp4c036vuk.burpcollaborator.net/from_axois/')
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.log("ERRRRRRRRRRRRRRRRRRRR")
//     console.log(error)
//   })

// console.log("LOGGGGGGGGGGGGGGGGG")



// axios.get('https://api.github.com/repos/abubakrx/testing_workflow/commits')
// .then(res => {
//   console.log(res.data[0])
//   // console.log(res.data[1])
// })
// .catch(error => {
//   console.log(error)
// })


// Get arguments from the command line
const arg_list = process.argv.slice(2);
console.log('myArgs: ', arg_list);

const fs = require('fs')
const path = require('path')

// const posts = fs.readdir(
//   path.join(process.env.GITHUB_WORKSPACE), (err,files) => {
//    if(err){
//      console.log("ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR")
//      console.log(err)
//    } else{
//      console.log("Files in the directory:")
//      files.forEach(file => {
//       console.log(file);
//     })
//    }
//   }
// )

fs.readFile(path.join(process.env.GITHUB_WORKSPACE)+"/files/1.txt",'utf8',(err,file) => {
  if(err){
    console.log(err)

  }else{
    console.log("FILLLLLLLLLL")
    console.log(file)
  }
})

