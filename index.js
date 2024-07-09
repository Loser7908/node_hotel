const express = require('express');
const db = require('./db');
const Person = require('./models/Person');
const Menu = require('./models/menu');
const bodyparser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(bodyparser.json()); // save in req.body

app.get('/', (req, res) => {
    res.send('Welcome');
});


//using router
const personRoutes=require('./routes/routerperson');
const menuRoutes=require('./routes/routerMenu');

app.use('/person',personRoutes);

app.use('/menu',menuRoutes);

app.listen(PORT, () => { console.log(`Server running at ${PORT}`); });


