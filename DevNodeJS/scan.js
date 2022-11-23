const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const port = 3000;

//////////Koneksi//////////////
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'developer'
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/DevNodeJS/scan', (req, res) => {
        let attlog  = req.body.data
        attlog.cloud_id = req.body.cloud_id
        let sql = "INSERT INTO log SET ?";
        let query = conn.query(sql, attlog, (err, results) => {
          if(err) throw err;
          res.send(JSON.stringify({"status": 200, "response": results}));
        });
        console.log(attlog)
   });
    

app.listen(port, () => console.log('running http://localhost:' + port));