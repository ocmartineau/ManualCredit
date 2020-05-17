//Initialize Dependencies
require('dotenv').config({path: __dirname + '/.env'});
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
    constructor(csvFilePath, config) {
        this.csvFilePath = csvFilePath;
        this.config = config;
    }
    // generateJson() {
    //     csv().fromFile(this.csvFilePath)
    //               .then((jsonObj =>{
    //                 // console.log(jsonObj[0].id)
    //                 for(let i = 0; i < jsonObj.length; i++){
    //                     axios({
    //                         method: 'post',
    //                         url: 'https://www.refersion.com/api/manual_credit_order_id',
    //                         data: {

    //                             'id': jsonObj[i].id,
    //                             'notes': jsonObj[i].notes,
    //                             'order_id': jsonObj[i].order_id,
    //                             'status': jsonObj[i].status

    //                         },
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                             'Refersion-Public-Key': 'pub_f5e8e8370bc7bae15db7',
    //                             'Refersion-Secret-Key':	'sec_ec9455dce6afa909035b'
    //                         }
    //                     })
    //                 }
    //             }))
    // }

}

// class ConversionController { //I don't want to call it a controller
//     //Has an instance of HTTP Client (makes requestions)
//     //Has some sort of "#makeRequest" function that accepts either a single Order
//     //"makeBatchRequest" takes array 
// }

// const logic = new CSVtoJsonService('./test.csv');

// logic.generateJson();


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

function orderTest(){
    axios({
        method: 'post',
        url: 'https://www.refersion.com/api/manual_credit_order_id',
        data: {

            'id': '4113082',
            'notes': 'This is test 1020',
            'order_id': '1020',
            'status': 'APPROVED'

        },
        headers: {
            'Content-Type': 'application/json',
            'Refersion-Public-Key': process.env.pubKey,
            'Refersion-Secret-Key':	process.env.secKey
        }
    }).then(function(response){
        console.log(`This request is ${response.statusText} with a status code of ${response.status}`)
        console.log(response.data)
    });
};

function commissionTest(){
    axios({
        method: 'post',
        url: 'https://www.refersion.com/api/manual_commission_credit',
        data: {

            'id': '4113082',
            'commission': 1.00,
            'notes': 'This is test a commission test 2',
            'status': 'PENDING',
            'currency':'USD'

        },
        headers: {
            'Content-Type': 'application/json',
            'Refersion-Public-Key': process.env.pubKey,
            'Refersion-Secret-Key':	process.env.secKey
        }
    }).then(function(response){
        console.log(`This request is ${response.statusText} with a status code of ${response.status}`)
        console.log(response.data)
    });
};

orderTest();
// commissionTest();