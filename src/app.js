const express = require('express');
const routerLogin = require('./routers/login');
const routerUser = require('./routers/user');
const routerCategories = require('./routers/categories');
const routerPost = require('./routers/post');

// ...

const app = express();

app.use(express.json());
app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategories);
app.use('/post', routerPost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
