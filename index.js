const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('I really like people');
});


app.listen(3000,console.log('Application Started'));