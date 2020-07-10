//Initialize Dependencies
require('dotenv').config({path: __dirname + '/.env'});
const csv = require("csvtojson");
const axios = require("axios");
const fs = require('fs');





// Testing csv conversion
const csvFilePath = './manualcredits.txt';
// csv().fromFile(csvFilePath)
//      .then((jsonObj =>{
//         //  parseInt(jsonObj[0].id);
//         console.log(jsonObj[0].id);
//         console.log(typeof jsonObj[0].id);
//         let id = Number(jsonObj[0].id);
//         let orderId = Number(jsonObj[0].order_id)
//         console.log(id);
//         console.log(typeof id);


// }));


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
   
    csv().fromFile(csvFilePath)
                .then((jsonObj =>{
                console.log(jsonObj[0].id)
                for(let i = 0; i < jsonObj.length; i++){
                    let id = Number(jsonObj[i].id);
                    let order_id = Number(jsonObj[i].order_id)
                    axios({
                        method: 'POST',
                        url: 'https://www.refersion.com/api/manual_credit_order_id',
                        data: {

                            'id': id,
                            'notes': jsonObj[i].notes,
                            'order_id': order_id,
                            'status': jsonObj[i].status

                        },
                        headers: {
                            'Content-Type': 'application/json',
                            'Refersion-Public-Key': 'pub_f5e8e8370bc7bae15db7',
                            'Refersion-Secret-Key':	'sec_ec9455dce6afa909035b'
                        }
                    }).then(function(response){
                        console.log(`For ${order_id} ${response.statusText}`)
                    }).catch(function (error) {
                        console.log(error.response.data);
                        const results = JSON.stringify(error.response.data) + '\r\n';
                        fs.appendFile('./testerino/writetest.txt', results, function (err) {
                            if (err) throw err;
                        })
                    })
                }
            }))
        
    // axios({
    //     method: 'post',
    //     url: 'https://www.refersion.com/api/manual_credit_order_id',
    //     data: {

    //         'id': '4113082',
    //         'notes': 'This is test 1020',
    //         'order_id': '1020',
    //         'status': 'APPROVED'

    //     },
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Refersion-Public-Key': process.env.pubKey,
    //         'Refersion-Secret-Key':	process.env.secKey
    //     }
    // }).then(function(response){
    //     console.log(`This request is ${response.statusText} with a status code of ${response.status}`)
    //     console.log(response.data)
    // });
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