const express = require('express');

const app = express()
app.use(express.static('static'));

app.listen(3000, ()=>{console.log('11 App start on port 3000')})
