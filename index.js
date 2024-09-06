const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'shoes',
    password:'1lucky2gole3'
});


app.get("/",(req,res)=>{
    res.render("index.ejs")
})    

app.listen("8000" , () =>{
    console.log("server is listening to port 8000")
})


  
app.get("/already", (req, res) => {
    res.render("login.ejs");
  });
  
app.post("/already",(req,res)=>{
  let { password } = req.body;
  console.log(req.body);
  let q = `SELECT * FROM shoesdetail WHERE password='${password}'`;
  try {
    connection.query(q,(err, result) => {
      if (err) throw err;
      console.log(result);
      let shoesdetail = result[0];

      if (shoesdetail.password != password) {
      // if(!password){ 
      res.send("WRONG Password entered!");
      // alert("wrong password")
    } else {
      console.log("already user add");
              res.redirect("/");
            }
    })
  } catch(err) {
    res.send("some error with DB");
    console.log(err);
    }
  });




  app.get("/new", (req, res) => {
      res.render("login.ejs");
    });

app.post("/new", (req, res) => {
    let { username, email, password } = req.body;
    // let id = uuidv4();
    //Query to Insert New User
    let q = `INSERT INTO shoesdetail (username, email, password) VALUES ('${username}','${email}','${password}') `;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        console.log("added new user");
        res.redirect("/");
      });
    } catch (err) {
      res.send("some error occurred");
    }
  });

