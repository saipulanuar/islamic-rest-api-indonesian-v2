const express = require('express');

const __path = process.cwd();
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(`${__path}/views/index.html`);
});

router.get('/api', (req, res) => {
    const config = {
        status: true,
        result: {
            author: 'Zhirrr',
            github: 'Zhirrr',
            instagram: 'zhirr_ajalah',
            youtube: 'Gak Punya',
            docs: 'https://github.com/Zhirrr/islamic-rest-api-indonesian-v2',
        },
    };
    res.json(config);
});

module.exports = router;
