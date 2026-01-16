# 🍔 Вкусно и Быстро - Админ-панель

Профессиональная админ-панель на Node.js с защищённой авторизацией.

## ✨ Возможности

- 🔐 **Безопасная авторизация** - bcrypt хэширование паролей, сессии
- 📦 **Управление товарами** - добавление, редактирование, удаление, загрузка фото
- 📋 **Управление заказами** - просмотр, смена статуса, удаление
- 🏷️ **Промокоды** - создание и управление скидками
- ⚙️ **Настройки** - телефон, адрес, доставка, минимальный заказ
- 📱 **Telegram уведомления** - мгновенные уведомления о новых заказах
- 📊 **Статистика** - заказы за день/месяц, выручка

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
cd admin
npm install
```

### 2. Создание администратора

```bash
npm run setup
```

Введите логин и пароль для админа.

### 3. Настройка окружения

```bash
cp .env.example .env
```

Отредактируйте `.env`:

```env
PORT=3001
SESSION_SECRET=ваш-секретный-ключ-минимум-32-символа
FRONTEND_URL=http://localhost:3000
```

### 4. Запуск сервера

```bash
# Продакшен
npm start

# Разработка (с авто-перезагрузкой)
npm run dev
```

Откройте: http://localhost:3001/admin

## 📁 Структура проекта

```
admin/
├── server.js           # Основной сервер Express
├── setup.js            # Скрипт создания админа
├── package.json        # Зависимости
├── .env.example        # Пример переменных окружения
├── .gitignore
├── public/             # Статические файлы
│   ├── index.html      # Админ-панель
│   └── admin.js        # JavaScript админки
├── data/               # JSON база данных (создаётся автоматически)
│   ├── users.json      # Пользователи
│   ├── products.json   # Товары
│   ├── orders.json     # Заказы
│   ├── promos.json     # Промокоды
│   └── settings.json   # Настройки
└── uploads/            # Загруженные изображения
```

## 🔌 API Endpoints

### Авторизация
| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/api/auth/login` | Вход |
| POST | `/api/auth/logout` | Выход |
| GET | `/api/auth/me` | Текущий пользователь |
| POST | `/api/auth/change-password` | Смена пароля |

### Товары
| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/products` | Все товары |
| GET | `/api/products/:id` | Один товар |
| POST | `/api/products` | Создать (multipart/form-data) |
| PUT | `/api/products/:id` | Обновить |
| DELETE | `/api/products/:id` | Удалить |

### Заказы
| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/orders` | Все заказы |
| GET | `/api/orders/:id` | Один заказ |
| POST | `/api/orders` | Создать (из фронтенда) |
| PUT | `/api/orders/:id` | Обновить статус |
| DELETE | `/api/orders/:id` | Удалить |

### Промокоды
| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/promos` | Все промокоды |
| POST | `/api/promos` | Создать |
| PUT | `/api/promos/:id` | Обновить |
| DELETE | `/api/promos/:id` | Удалить |
| POST | `/api/promos/validate` | Проверить код (публичный) |

### Настройки
| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/settings` | Публичные настройки |
| GET | `/api/settings/full` | Все настройки (с токенами) |
| PUT | `/api/settings` | Обновить |

### Статистика
| Метод | URL | Описание |
|-------|-----|----------|
| GET | `/api/stats` | Статистика |

### Telegram
| Метод | URL | Описание |
|-------|-----|----------|
| POST | `/api/telegram/test` | Тест соединения |

## 🔧 Интеграция с фронтендом

### Отправка заказа из сайта

```javascript
// В script.js вашего сайта замените функцию отправки заказа:

async function submitOrder(orderData) {
    try {
        const response = await fetch('http://localhost:3001/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customer: {
                    name: orderData.name,
                    phone: orderData.phone,
                    address: orderData.address
                },
                cart: orderData.cart,
                total: orderData.total,
                deliveryType: orderData.deliveryType,
                paymentType: orderData.paymentType,
                comment: orderData.comment
            })
        });
        
        const result = await response.json();
        console.log('Order created:', result);
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### Загрузка товаров из админки

```javascript
// Замените статический массив products на API:

async function loadProducts() {
    const response = await fetch('http://localhost:3001/api/products');
    const products = await response.json();
    // Фильтруем только активные
    return products.filter(p => p.active);
}
```

### Проверка промокода

```javascript
async function validatePromo(code) {
    const response = await fetch('http://localhost:3001/api/promos/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
    });
    
    if (response.ok) {
        const { discount, type } = await response.json();
        return { valid: true, discount, type };
    }
    return { valid: false };
}
```

## 🐳 Docker (опционально)

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["node", "server.js"]
```

```bash
docker build -t vb-admin .
docker run -p 3001:3001 -v $(pwd)/data:/app/data -v $(pwd)/uploads:/app/uploads vb-admin
```

## 🔒 Безопасность

- Пароли хэшируются bcrypt (10 раундов)
- HTTP-only cookies для сессий
- Helmet.js для HTTP заголовков
- CORS настроен на конкретный домен
- Rate limiting рекомендуется добавить для продакшена

### Рекомендации для продакшена

1. Используйте HTTPS (nginx + Let's Encrypt)
2. Добавьте rate limiting (`express-rate-limit`)
3. Настройте резервное копирование папки `data/`
4. Используйте PM2 для управления процессом
5. Настройте файрвол (только 80/443 порты)

```bash
# PM2
npm install -g pm2
pm2 start server.js --name "vb-admin"
pm2 save
pm2 startup
```

## 📱 Telegram бот

1. Создайте бота у @BotFather
2. Получите токен
3. Создайте группу и добавьте бота
4. Получите Chat ID:
   - Напишите в группу
   - Откройте: `https://api.telegram.org/bot<TOKEN>/getUpdates`
   - Найдите `"chat":{"id":-123456789}`
5. Введите токен и Chat ID в настройках админки
6. Нажмите "Тест" для проверки

## ❓ FAQ

**Q: Забыл пароль**  
A: Запустите `npm run setup` и создайте нового админа

**Q: Как добавить нового пользователя**  
A: Запустите `npm run setup`

**Q: Где хранятся данные**  
A: В папке `data/` в JSON файлах

**Q: Как сделать бэкап**  
A: Скопируйте папки `data/` и `uploads/`

---

Сделано с ❤️ для Вкусно и Быстро
