const axios = require('axios');

const url = 'https://example.com';

axios.get(url)
    .then(response => {
        const html = response.data;
        console.log(`Длина HTML: ${html.length}`);
        console.log('Сайт доступен для парсинга');
    })
    .catch(error => {
        console.error('Ошибка при парсинге:', error.message);
    });