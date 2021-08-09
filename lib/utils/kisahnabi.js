const axios = require('axios');

const Searchnabi = nabi =>
    axios.get(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/kisahnabi/${nabi}.json`)
        .then((response) => {
            const results = response.data;

            const data = {};
            data.code = response.status;
            data.message = 'ok';
            data.nabi = {
                nabi: results.name,
                lahir: results.thn_kelahiran,
                umur: results.usia,
                tempat: results.tmp,
                image: results.image_url,
                kisah: results.description,
            };

            data.creator = 'Zhirrr';
            return data;
        })
        .catch(() => ({
            code: 500,
            success: false,
            message: 'Server Sedang Maintance',
        }));

module.exports = Searchnabi;
