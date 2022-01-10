const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.urlencoded({extended: false}));
//app.use(express(json));

app.use('/', require('./router'));

app.listen(5000, () => {
    console.log('Server running on PORT 5000');
});