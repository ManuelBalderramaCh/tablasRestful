const express = require("express");
const app = express();

app.post('/results/:n1/:n2', (request, response, next) => {
    response.send("n1 * n2 = "+ (parseInt(request.params.n1)*parseInt(request.params.n2)));
});

app.get('/results/:n1/:n2', (request, response) => {
    response.send("n1 + n2 = "+ (parseInt(request.params.n1)+parseInt(request.params.n2)));
});

app.put('/results/:n1/:n2', (request, response) => {
   response.send("n1 / n2 = "+ (parseInt(request.params.n1)/parseInt(request.params.n2)));
});

app.patch('/results/:n1/:n2', (request, response) => {
   response.send("n1 ^ n2 = "+ (parseInt(request.params.n1)^parseInt(request.params.n2)));
});

app.delete('/results/:n1/:n2', (request, response) => {
   response.send("n1 - n2 = "+ (parseInt(request.params.n1)-parseInt(request.params.n2)));
});

app.listen(5000, ()=>{
    console.log("API ready port: 5000...");
});