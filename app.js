const express = require('express');
const app = express();

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use(require("./controllers/index"))
app.use(require("./controllers/albums"))
app.use(require("./controllers/feedback"))

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})