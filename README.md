# Парсер JSON API (jsonplaceholder)

Парсер получает данные с тестового API jsonplaceholder.typicode.com (посты) и сохраняет их в файл posts.json.

## Как 🚀 запустить

1. Установи [Node.js](https://nodejs.org/)
2. Склонируй репозиторий:
   ```bash
   git clone https://github.com/xVOLKx/news_parser.git
   ```
3. Перейди в папку проекта:
   ```bash
   cd news_parser
   ```
4. Установи зависимости:
   ```bash
   npm install axios
   ```
5. Запусти:
   ```bash
   node parser.js
   ``` 

## Результат

В консоль выводятся первые 3 поста.
Все 100 постов сохраняются в файл posts.json.

## 🛠️ Технологии

- Node.js + Express
- SQLite
- HTML/CSS