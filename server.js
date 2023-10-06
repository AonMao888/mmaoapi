const express = require('express');
const qrcode = require('qrcode');
const ip = require('ip');
const app = express();

app.get('/',(req,res)=>{
    res.send('home page')
})

//qr code
app.get('/qrcode',(req,res)=>{
    qrcode.toDataURL(req.query.data,function(err,url){
        res.json({src:url})
    })
    req.ip
    //res.send(req.query.data)
})

//ip address
app.get('/ip',(req,res)=>{
    res.json({
        "ip":ip.address(),
        "private":ip.isPrivate(ip.address()),
        "public":ip.isPublic(ip.address())
    })
})

app.listen(80,()=>{console.log('server started with port 80')})