const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const errorController = require('./controllers/error');


app.set('view engine', 'pug');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// app.use digunakan untuk semua method di http (get,post,patch,del,...)
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// controller /admin
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//return 404 status
app.use(errorController.get404);

// server.listen(3000);
app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});