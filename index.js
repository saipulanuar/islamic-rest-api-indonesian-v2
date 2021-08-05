const express = require('express');
const cors = require('cors');
const secure = require('ssl-express-www');
const mainrouter = require('./routes/main');
const apirouter = require('./routes/api');

const PORT = process.env.PORT || 8080 || 5000 || 3000;
const app = express();

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(cors());
app.use(secure);
app.use(express.static('public'));

app.use('/', mainrouter);
app.use('/api', apirouter);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
