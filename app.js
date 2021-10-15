// :;

const path = require('path');

//express imported
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//const bodyParser = require('body-parser');
//inbuilt express body parser
app.use(express.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

/*const server = http.createServer(app);
server.listen(3000);*/

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));
});

app.listen(3000);