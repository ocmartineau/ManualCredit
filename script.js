//Initialize Dependencies
require('dotenv').config({path: __dirname + '/.env'});
const csv = require("csvtojson");
const axios = require("axios");
const fs = require('fs');






const csvFilePath = '45013BulkManualCommission.csv';
;



function sendManualOrders(){

   //Pull CSV and convert to JSON Object...
    csv().fromFile(csvFilePath)
                .then((jsonObj =>{
                console.log(jsonObj[0].id)

                //Loop through resulting object to change Order ID and Affiliate Id into the right data type...
                for(let i = 0; i < jsonObj.length; i++){
                    let id = Number(jsonObj[i].id);
                    let order_id = Number(jsonObj[i].order_id)

                    //Pass resulting correct body format through to Axios...
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
                            'Refersion-Public-Key': 'pub_dbc37e60b31cdaa21e11',
                            'Refersion-Secret-Key':	'sec_76f6cb125e64c4ec22e5'
                        }

                    //Log resulting status to terminal
                    }).then(function(response){
                        console.log(`For ${order_id} the POST is ${response.statusText}`);

                    //Use filesystem to log errors to a text file..    
                    }).catch(function (error) {
                        console.log(error.response.config.data);
                        const results = JSON.stringify(error.response.config.data) + '\r\n';
                        fs.appendFile('./logs/responselog.txt', `Error ${results}` , function (err) {
                            if (err) throw err;
                        })
                    })
                }
            }))
        
    
};

function commissionTest(){
    //Pull CSV and convert to JSON Object...
    csv().fromFile(csvFilePath)
                .then((jsonObj =>{
                console.log(jsonObj);
                console.log(jsonObj[0].id);
                console.log(jsonObj[0].commission);
                console.log(jsonObj[0].notes);
                console.log(jsonObj[0].status);
                console.log(jsonObj[0].currency);
                // Loop through resulting object to change Commission and Affiliate Id into the right data type...
                for(let i = 0; i < jsonObj.length; i++){
                    let id = Number(jsonObj[i].id);
                    let commission = Number(jsonObj[i].commission)

                    //Pass resulting correct body format through to Axios...
                    axios({
                        method: 'POST',
                        url: 'https://www.refersion.com/api/manual_commission_credit',
                        data: {

                            'id': id,
                            'commission': commission,
                            'notes': jsonObj[i].notes,
                            'status': jsonObj[i].status,
                            'currency': jsonObj[i].currency

                        },
                        headers: {
                            'Content-Type': 'application/json',
                            'Refersion-Public-Key': '',
                            'Refersion-Secret-Key':	''
                        }

                    //Log resulting status to terminal
                    }).then(function(response){
                        console.log(`For ${id} the commission amount of ${commission} is ${response.statusText}`);

                    //Use filesystem to log errors to a text file..    
                    }).catch(function (error) {
                        console.log(error);
                        const results = JSON.stringify(error.response.config.data) + '\r\n';
                        fs.appendFile('./logs/responselog.txt', `Error ${results}` , function (err) {
                            if (err) throw err;
                        })
                    })
                }
            }))
};

// sendManualOrders();
commissionTest();