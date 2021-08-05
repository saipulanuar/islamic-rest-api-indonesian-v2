/*
  Author: @Zahir Hadi Athallah
  Code: @Zahir Hadi Athallah
  Api: @Islamic Rest Api Indonesian V2
  License: @Created By Me
*/

const express = require('express');
const fetch = require('node-fetch');

const __path = process.cwd();
const router = express.Router();
const { Searchnabi } = require('./../lib');

const loghandler = {
    error: {
        status: false,
        message: 'mungkin sedang dilakukan perbaikan',
    },

};


router.get('/data/kisahnabi', async (req, res) => {
    const { nabi } = req.query;

    if (!nabi) return res.json({ status: false, creator: 'Zhirrr', message: 'masukan parameter nabi' });

    return Searchnabi(nabi)
        .then((result) => {
            res.json({
                status: true,
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        });
});

router.get('/data/hadith', async (req, res) => {
    const { kitab, nomor } = req.query;

    if (!kitab) return res.json({ status: false, creator: 'Zhirrr', message: 'masukan parameter kitab' });
    if (!nomor) return res.json({ status: false, creator: 'Zhirrr', message: 'masukan parameter nomor' });

    return fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        });
});

router.get('/data/masjid', async (req, res) => {
    const { provinsi, page } = req.query;

    if (!provinsi) return res.json({ status: false, creator: 'Zhirrr', message: 'masukan parameter provinsi' });
    if (!page) return res.json({ status: false, creator: 'Zhirrr', message: 'masukan parameter page' });

    return fetch(encodeURI(`https://masjid-api-indonesia.herokuapp.com/api/search/masjid?provinsi=${provinsi}&page=${page}`))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        });
});

router.get('/data/masjid/list-provinsi', async (req, res) =>
    fetch(encodeURI('https://masjid-api-indonesia.herokuapp.com/api/list-provinsi'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));


router.get('/data/quran', async (req, res) => {
    const { surah, ayat } = req.query;

    if (surah && ayat) {
        return fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
            .then(response => response.json())
            .then(data => res.json(data))
            .catch(() => res.json(loghandler.error));
    } else {
        return fetch(encodeURI('https://alquran-apiii.vercel.app/surah'))
            .then(response => response.json())
            .then(data => res.json(data))
            .catch(() => res.json(loghandler.error));
    }
});

router.get('/data/json/quran', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/quran.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/hadith/abu-daud', (req, res) =>
    res.sendFile(`${__path}/database/hadits/abu-daud.json`));

router.get('/data/json/hadith/ahmad', (req, res) =>
    res.sendFile(`${__path}/database/hadits/ahmad.json`));


router.get('/data/json/hadith/bukhari', (req, res) =>
    res.sendFile(`${__path}/database/hadits/bukhari.json`));

router.get('/data/json/hadith/darimi', (req, res) =>
    res.sendFile(`${__path}/database/hadits/darimi.json`));

router.get('/data/json/hadith/ibnu-majah', (req, res) =>
    res.sendFile(`${__path}/database/hadits/ibnu-majah.json`));

router.get('/data/json/hadith/malik', (req, res) =>
    res.sendFile(`${__path}/database/hadits/malik.json`));

router.get('/data/json/hadith/muslim', (req, res) =>
    res.sendFile(`${__path}/database/hadits/muslim.json`));

router.get('/data/json/hadith/nasai', (req, res) =>
    res.sendFile(`${__path}/database/hadits/nasai.json`));

router.get('/data/json/hadith/tirmidzi', (req, res) =>
    res.sendFile(`${__path}/database/hadits/tirmidzi.json`));

router.get('/data/pdf/iqra1/', (req, res) =>
    res.sendFile(`${__path}/database/iqra/1.pdf`));

router.get('/data/pdf/iqra2/', (req, res) =>
    res.sendFile(`${__path}/database/iqra/2.pdf`));

router.get('/data/pdf/iqra3/', (req, res) =>
    res.sendFile(`${__path}/database/iqra/3.pdf`));

router.get('/data/pdf/iqra4/', (req, res) =>
    res.sendFile(`${__path}/database/iqra/4.pdf`));

router.get('/data/pdf/iqra5/', (req, res) =>
    res.sendFile(`${__path}/database/iqra/5.pdf`));

router.get('/data/pdf/iqra6/', (req, res) =>
    res.sendFile(`${__path}/database/iqra/6.pdf`));

router.get('/data/json/tahlil', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));


router.get('/data/json/wirid', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));


router.get('/data/json/ayatkursi', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/doaharian', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/bacaanshalat', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));


router.get('/data/json/niatshalat', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/kisahnabi', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/asmaulhusna', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/niatshubuh', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/niatdzuhur', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));


router.get('/data/json/niatmaghrib', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));


router.get('/data/json/niatisya', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/niatashar', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/json/gambar', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/quotes', async (req, res) =>
    fetch(encodeURI('https://api-kedua-qu.herokuapp.com/api/quote?type=agamis'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/jadwalshalat', async (req, res) => {
    const { kota } = req.query;

    if (!kota) return res.json({ status: false, creator: 'Zhirrr', message: 'masukan parameter kota' });

    return fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/shalat/${kota}/2021/05.json`))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        });
});

router.get('/data/jadwalshalat/listkota', async (req, res) =>
    fetch(encodeURI('https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/kota.json'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/asmaulhusna', async (req, res) =>
    fetch(encodeURI('https://api-kedua-qu.herokuapp.com/api/quote?type=asmaulhusna'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

router.get('/data/gambar', async (req, res) =>
    fetch(encodeURI('https://api-kedua-qu.herokuapp.com/api/quote?type=islamic'))
        .then(response => response.json())
        .then((data) => {
            const result = data;
            res.json({
                result,
            });
        })
        .catch(() => {
            res.json(loghandler.error);
        }));

module.exports = router;
