const axios = require('axios');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

axios.get(url)
    .then(response => {
        const posts = response.data;
        console.log(`Найдено постов: ${posts.length}`);
        console.log(posts.slice(0, 3)); // первые 3 поста

        // Сохраняем в файл
        fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
        console.log('Результат сохранён в файл posts.json');
    })
    .catch(error => {
        console.error('Ошибка:', error.message);
    });