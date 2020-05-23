require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express();

app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
