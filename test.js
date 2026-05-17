const axios = require('axios');

const url = 'https://example.com';

axios.get(url)
    .then(response => {
        console.log('Сайт доступен, длина HTML:', response.data.length);
    })
    .catch(error => {
        console.error('Ошибка:', error.message);
    });