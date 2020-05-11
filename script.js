//Initialize Dependencies
const csv = require("csvtojson");
const axios = require("axios");


//Testing csv conversion
const csvFilePath = './test.csv';
csv().fromFile(csvFilePath)
     .then((jsonObj =>{
         console.log(jsonObj)
     }));


//Configuring Axios parameters

// let config = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Refersion-Public-Key':'pub_f5e8e8370bc7bae15db7',
//         'Refersion-Secret-Key':'sec_ec9455dce6afa909035b'
//     }
// };

// let  data = jsonObj;

