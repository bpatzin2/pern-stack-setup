const express = require("express");
const app = express();
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json())

//ROUTES

// create a todo
app.post("/todos", async (req, res) => {
  try{
    console.log(req.body)
  } catch(err){
    console.log(err.message)
  }
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
})