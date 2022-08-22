const express = require('express');

const app = express();

const PORT = 7000;

const dns = require('dns');

const url = "masaischool.com";

app.get('/', (req, res) => {
    res.write(`<p>To get the ip address try: </p><a href="http://localhost:${PORT}/getmeip">loaclhost:${PORT}</a>`);
})

app.get('/getmeip', (req, res) => {
    dns.lookup(url, (err, add) =>
    res.send(`Ip address : ${add}`))
})

app.post('/getmeip', (req, res) => {
    dns.lookup(url, (err, add) => {
        if(err){
        res.status(404).send(`<p>Error : URL not found</p>`);
        } 
        else{
        res.json({"Ip address":add});
        }
    });
})


app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }else{
        console.log(`Server is running at http//localhost:${PORT}`);
    }
})