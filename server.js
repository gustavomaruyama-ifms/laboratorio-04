const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

app.use(express.json({extended:false}));
app.use(express.static('public',{}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/public/index.html')
});

httpServer.listen(3000, function(){
    console.log("Servidor HTTP no ar");
});