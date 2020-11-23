const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HpsnaBwkYF7v8zym7lmfvlArFYzE18JVPkmcjXd2Pmxn5QbaV0fUOx9HA5vABjw9yutUutjZE4h29IhIT4O8VbE00zWIjutpI')

const app =express();
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request, response)=> response.status(200).send('hello world'))
app.post('/payments/create',async(request , response)=>{
    const total = request.query.total;
    console.log('Payment Request Recieved',total);
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client__secret,
    });

});
exports.api = functions.https.onRequest(app)

//http://localhost:5001/banglarbiponi-20e27/us-central1/api