const express = require('express');
let app = express();
const fs = require('fs');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + '/public'));


app.get("/",(req,res)=>{

    res.send({test: true});
});



app.get('/bad', (req,res)=>{
   res.send({
       errorMessage: 'This is representative of a bad request'
   })
});

app.post('/send-note', jsonParser, (req, res) =>{
    console.log(req.body);
    fs.appendFileSync('notes.txt', req.body.newNote);
    const data = fs.readFileSync('notes.txt', 'utf8')
    console.log('test successful', data);
    res.send({success: true, notes: data});
})

app.listen(3000, ()=>{
    console.log("Server is up on port:3000")
});