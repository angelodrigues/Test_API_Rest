//Verbos HTTP
//Get: Receber dados de um Resource.
//Post: Enviar dados ou informações para serem processados por um Resource.
//Put: Atualizar os dados de um Resource.
//Delete: Deletar um Resource.

const express = require('express');
const app = express();
const data = require("./data.json")

app.use(express.json());

app.get("/clients", function(req, res){
    res.json(data);
});

app.get("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(clint => clint.id == id);

    if(!client) return res.status(204).json(); 

    res.json(client);
});
app.post("/clients", function(req, res){
    const { name, email, password } = req.body;

    //save

    res.json({name, email, password});
});
app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(clint => clint.id == id);

    if(!client) return res.status(204).json(); 

    const { name, password } = req.body;
    client.name = name;
    client.password = password;

    res.json(client);
});
app.delete("/clients/:id", function(req, res){
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);


    res.json(clientsFiltered);
});

app.listen(3000, function() {
    console.log("Server is running")
})