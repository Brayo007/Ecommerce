// :;

const path = require('path');

//express imported
const express = require('express');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//const bodyParser = require('body-parser');
//inbuilt express body parser
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

/*const server = http.createServer(app);
server.listen(3000);*/

app.use(errorController.get404);

app.listen(3000);