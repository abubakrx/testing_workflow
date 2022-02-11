const axios = require('axios')


// Get arguments from the command line
const arg_list = process.argv//.slice(2);
// console.log('myArgs: ', arg_list[2]);
files_list = arg_list[2].split(" ")
console.log(files_list)





const fs = require('fs')
const path = require('path')

files_list.map(file => {
  fs.readFile(path.join(process.env.GITHUB_WORKSPACE)+"/"+file,'utf8',(err,f) => {
    if(err){
      console.log("ERRRRRRRRRRRRRRRR")
      console.log(err)

    }else{
      console.log("FILLLLLLLLLL")
      console.log(f)
    }
  })
})




