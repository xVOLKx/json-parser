const axios = require('axios');
const cheerio = require('cheerio');
const url = 'http://cbr.ru'

axios.get(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const news = [];

        $('a.card').each((i, element) => {
            const title = $ (element).find('h3').text().trim();
            const link = $ (element).attr('href');
            if (title && link) {
                news.push({ title, link: new URL(link, url).href });
            }
        });

        console.log(`Найдено новостей: ${news.length}`);
        console.log(news.slice(0, 5));
    })
    .catch(error => {
        console.error('Ошибка при парсинге:', error.message);
    });