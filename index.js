const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors({ credentials: true }));

//test

app.get("/test", (req, res) => {
  console.log(req.query);
  let from = req.query.base;
  let to = req.query.symbols;
  let amt = req.query.amt;
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`)
    .then(response => {
      res.send({ amt: Number(response.data.rates[to] * amt).toFixed(2) });
    })
    .catch(err => console.log(err));
});

//server
app.listen(4000, () => console.log("Ready on Port 4000"));
