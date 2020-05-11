//Initialize Dependencies
const csv = require("csvtojson");
const axios = require("axios");


class ConvertService {
    csvFilePath = './test.csv';
    convert() {
        csv().fromFile(this.csvFilePath)
                  .then((jsonObj =>{
                    console.log(jsonObj)
     }))
    }

}

const logic = new ConvertService();

logic.convert();


//Testing csv conversion
// const csvFilePath = './test.csv';
// csv().fromFile(csvFilePath)
//      .then((jsonObj =>{
//          console.log(jsonObj)
//      }));


//Configuring Axios parameters

// let config = {
//     headers: {
//         'Content-Type': 'application/json',
//         'Refersion-Public-Key':'pub_f5e8e8370bc7bae15db7',
//         'Refersion-Secret-Key':'sec_ec9455dce6afa909035b'
//     }
// };

// let  data = jsonObj;

// axios.post(
//     'https://www.refersion.com/api/manual_credit_order_id',
//     data,
//     config
// ).then(function(response){
//     console.log(response);
// }).catch(function(error){
//     console.log(error)
// });