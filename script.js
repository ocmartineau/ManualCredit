//Initialize Dependencies
const csv = require("csvtojson");
const axios = require("axios");

class Order {
    constructor(id, notes, order_id, status){
        this.id = id;
        this.notes = notes;
        this.order_id = order_id;
        this.status = status;
    }
   
}

class CSVtoJsonService {
    // csvFilePath = './test.csv';
    constructor(csvFilePath) {
        this.csvFilePath = csvFilePath;
    }
    generateJson() {
        csv().fromFile(this.csvFilePath)
                  .then((jsonObj =>{
                    // console.log(jsonObj[0].id)
                    for(i = 0; i < jsonObj.length; i++){
                        axios({
                            method: 'post',
                            url: '',
                            data: {
                                
                            }
                        })
                    }
                }))
         //Return the conversions as an array of objects
    }

}

// class ConversionController { //I don't want to call it a controller
//     //Has an instance of HTTP Client (makes requestions)
//     //Has some sort of "#makeRequest" function that accepts either a single Order
//     //"makeBatchRequest" takes array 
// }

const logic = new CSVtoJsonService('./test.csv');

logic.generateJson();


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

