const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
module.exports = app;