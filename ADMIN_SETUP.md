# 🔧 Настройка Админки и Telegram бота

## 📱 Настройка Telegram бота для заказов

### Шаг 1: Создание бота

1. Откройте Telegram и найдите `@BotFather`
2. Отправьте команду `/newbot`
3. Введите имя бота (например: "Вкусно и Быстро - Заказы")
4. Введите username бота (например: `vkusnoibystro_bot`)
5. Сохраните полученный **токен** (выглядит как: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Шаг 2: Получение Chat ID

**Вариант А - Личный чат:**
1. Напишите боту любое сообщение
2. Откройте: `https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates`
3. Найдите `"chat":{"id":123456789}` - это ваш Chat ID

**Вариант Б - Группа для заказов:**
1. Создайте группу для заказов
2. Добавьте бота в группу
3. Сделайте бота администратором
4. Напишите что-нибудь в группу
5. Откройте: `https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates`
6. Найдите Chat ID группы (обычно начинается с `-`)

### Шаг 3: Настройка на сайте

Откройте файл `index.html` и найдите блок:

```html
<script>
    window.TELEGRAM_CONFIG = {
        botToken: 'YOUR_BOT_TOKEN',  // Замените на ваш токен
        chatId: 'YOUR_CHAT_ID',      // Замените на ваш Chat ID
        enabled: false               // Измените на true
    };
</script>
```

Замените значения на свои и установите `enabled: true`

---

## 🖥️ Как добавить админку

Есть несколько вариантов:

### Вариант 1: Простая админка (JSON файл + Telegram)

Самый простой способ - хранить товары в JSON и редактировать через простой интерфейс.

**Структура:**

```
/admin/
  index.html      - Панель управления
  admin.js        - Логика админки
  admin.css       - Стили
/data/
  products.json   - Данные товаров
```

**Пример admin/index.html:**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Админка - Вкусно и Быстро</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <div class="admin">
        <aside class="sidebar">
            <h2>Админка</h2>
            <nav>
                <a href="#products" class="active">Товары</a>
                <a href="#orders">Заказы</a>
                <a href="#promos">Промокоды</a>
                <a href="#settings">Настройки</a>
            </nav>
        </aside>
        <main class="content">
            <section id="products">
                <h1>Управление товарами</h1>
                <button id="addProduct">+ Добавить товар</button>
                <div id="productsList"></div>
            </section>
        </main>
    </div>
    <script src="admin.js"></script>
</body>
</html>
```

**Пример admin.js:**

```javascript
// Загрузка товаров из localStorage (или JSON файла на сервере)
let products = JSON.parse(localStorage.getItem('admin_products')) || [];

function renderProducts() {
    const list = document.getElementById('productsList');
    list.innerHTML = products.map((p, i) => `
        <div class="product-row">
            <img src="${p.image}" alt="${p.name}">
            <div class="product-info">
                <strong>${p.name}</strong>
                <span>${p.price} ₽</span>
            </div>
            <div class="actions">
                <button onclick="editProduct(${i})">✏️</button>
                <button onclick="deleteProduct(${i})">🗑️</button>
            </div>
        </div>
    `).join('');
}

function addProduct() {
    const name = prompt('Название товара:');
    const price = prompt('Цена:');
    const category = prompt('Категория (hot/dessert/bakery/hotdog/drinks/beer/coffee):');
    
    if (name && price) {
        products.push({
            id: Date.now(),
            name,
            price: parseInt(price),
            category,
            ingredients: [],
            badges: []
        });
        saveProducts();
        renderProducts();
    }
}

function editProduct(index) {
    const p = products[index];
    const name = prompt('Название:', p.name);
    const price = prompt('Цена:', p.price);
    
    if (name && price) {
        products[index].name = name;
        products[index].price = parseInt(price);
        saveProducts();
        renderProducts();
    }
}

function deleteProduct(index) {
    if (confirm('Удалить товар?')) {
        products.splice(index, 1);
        saveProducts();
        renderProducts();
    }
}

function saveProducts() {
    localStorage.setItem('admin_products', JSON.stringify(products));
    // Также можно отправить на сервер
}

document.getElementById('addProduct').onclick = addProduct;
renderProducts();
```

---

### Вариант 2: Firebase (бесплатно, облачно)

Firebase позволяет хранить данные в облаке и синхронизировать между устройствами.

**1. Создайте проект на [Firebase Console](https://console.firebase.google.com/)**

**2. Включите Realtime Database или Firestore**

**3. Добавьте Firebase SDK:**

```html
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js"></script>
<script>
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    // ...
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Загрузка товаров
async function loadProducts() {
    const snapshot = await db.collection('products').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Добавление товара
async function addProduct(product) {
    await db.collection('products').add(product);
}

// Обновление товара
async function updateProduct(id, data) {
    await db.collection('products').doc(id).update(data);
}

// Удаление товара
async function deleteProduct(id) {
    await db.collection('products').doc(id).delete();
}
</script>
```

---

### Вариант 3: Supabase (аналог Firebase, но SQL)

[Supabase](https://supabase.com/) - бесплатная альтернатива Firebase с PostgreSQL.

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('YOUR_URL', 'YOUR_KEY')

// Получить товары
const { data: products } = await supabase.from('products').select()

// Добавить товар
await supabase.from('products').insert({ name: 'Шаурма', price: 250 })

// Обновить
await supabase.from('products').update({ price: 300 }).eq('id', 1)

// Удалить
await supabase.from('products').delete().eq('id', 1)
```

---

### Вариант 4: Простой PHP бэкенд

Если у вас есть хостинг с PHP:

**api/products.php:**

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$file = '../data/products.json';

switch($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        echo file_get_contents($file);
        break;
        
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $products = json_decode(file_get_contents($file), true);
        $data['id'] = time();
        $products[] = $data;
        file_put_contents($file, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'id' => $data['id']]);
        break;
        
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $products = json_decode(file_get_contents($file), true);
        foreach($products as &$p) {
            if($p['id'] == $data['id']) {
                $p = array_merge($p, $data);
                break;
            }
        }
        file_put_contents($file, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true]);
        break;
        
    case 'DELETE':
        $id = $_GET['id'];
        $products = json_decode(file_get_contents($file), true);
        $products = array_filter($products, fn($p) => $p['id'] != $id);
        file_put_contents($file, json_encode(array_values($products), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true]);
        break;
}
?>
```

**api/orders.php (отправка в Telegram):**

```php
<?php
header('Content-Type: application/json');

$botToken = 'YOUR_BOT_TOKEN';
$chatId = 'YOUR_CHAT_ID';

$order = json_decode(file_get_contents('php://input'), true);

$message = "🆕 *НОВЫЙ ЗАКАЗ #{$order['number']}*\n\n";
$message .= "👤 *Клиент:* {$order['name']}\n";
$message .= "📞 *Телефон:* {$order['phone']}\n\n";
$message .= "📦 *Заказ:*\n{$order['items']}\n\n";
$message .= "💰 *Итого:* {$order['total']} ₽\n";
$message .= "🚗 *Доставка:* {$order['address']}\n";

$url = "https://api.telegram.org/bot{$botToken}/sendMessage";
$data = [
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
curl_close($ch);

echo json_encode(['success' => true]);
?>
```

---

## 📋 Структура данных для товаров

```javascript
{
    "id": 1,
    "name": "Шаурма с курицей",
    "price": 250,
    "category": "hot",          // hot, dessert, bakery, hotdog, drinks, beer, coffee
    "ingredients": ["Лаваш", "Курица", "Овощи", "Соус"],
    "weight": "350г",
    "badges": ["popular", "hit"],  // popular, hit, new, spicy, 18
    "desc": "Описание товара",
    "image": "https://...",
    "customizable": true,       // Можно ли кастомизировать
    "extras": ["cheese", "jalapeno", "sauce", "meat"],  // Доступные добавки
    "active": true              // Показывать на сайте
}
```

---

## 🔒 Защита админки

**Простая авторизация через пароль:**

```javascript
// В начале admin.js
const ADMIN_PASSWORD = 'ваш_сложный_пароль';

function checkAuth() {
    const saved = localStorage.getItem('admin_auth');
    if (saved !== ADMIN_PASSWORD) {
        const pass = prompt('Введите пароль администратора:');
        if (pass !== ADMIN_PASSWORD) {
            alert('Неверный пароль!');
            window.location.href = '/';
            return false;
        }
        localStorage.setItem('admin_auth', pass);
    }
    return true;
}

if (!checkAuth()) {
    throw new Error('Not authorized');
}
```

**Для продакшена рекомендую:**
- Firebase Authentication
- Supabase Auth
- Серверная авторизация (PHP sessions, JWT)

---

## 📊 Дополнительные функции для админки

1. **Статистика заказов** - количество, выручка, популярные товары
2. **Управление промокодами** - создание, сроки действия, лимиты
3. **Настройка доставки** - зоны, цены, минимальный заказ
4. **Уведомления** - звук при новом заказе, push-уведомления
5. **Экспорт данных** - заказы в Excel, отчёты

---

## 🚀 Быстрый старт

1. Скопируйте токен бота и Chat ID
2. Вставьте в `index.html` в блок `TELEGRAM_CONFIG`
3. Установите `enabled: true`
4. Заказы будут приходить в Telegram!

Нужна помощь с конкретной реализацией? Напишите!
