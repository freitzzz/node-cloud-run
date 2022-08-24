import 'dotenv/config';
import express from 'express';

import winston from 'winston';
import expressWinston from 'express-winston';
const app = express();

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.json()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP  ", // optional: customize the default logging message. E.g. "  ms "
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
}));
console.info('Ready to receive requests!');

app.get('/', (request, response) => {
    response.status(200).send('Hello world');
});
const port = process.env.PORT;
app.listen(port !== undefined ? port : 8080);