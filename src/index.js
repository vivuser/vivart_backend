const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
require("dotenv").config();
const cors = require('cors');
const path = require('path');
const ejs = require('ejs');
const routerConfig = require('./routers/index.router.js');
const app = express();
const PORT =process.env.PORT || 3018
const isDevelopment = process.env.IS_DEVELOPMENT

app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


routerConfig(app)

app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`)
})