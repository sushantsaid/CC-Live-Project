const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));

const server = app.listen(PORT, console.log('Server is listening at port : ' + PORT));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});



