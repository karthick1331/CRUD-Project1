const express = require('express');
const app = express();
const mysql = require('mysql2')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"karthick312",
    database:"employeesystem",
});

app.post("/create",(req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query("INSERT INTO employees (name,age,country,position,wage) VALUES(?,?,?,?,?)",
    [name,age,country,position,wage],(err,result)=>{
        if (err){
            console.log(err);
        } else {
            res.send("Values Inserted")
        }
    })

});

app.get("/",(req, res)=>{
    res.send("Backend App Started")

})


app.listen(3001, () =>{
    console.log("Server is Running 3001");
})
