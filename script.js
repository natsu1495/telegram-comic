// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;

// Расширяем на весь экран
tg.expand();

// Меняем цвет фона Telegram (опционально)
tg.setHeaderColor('#302b63');
tg.setBackgroundColor('#0f0c29');

// Показываем страницу
function showPage(pageNumber) {
    // Скрываем все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Показываем нужную
    if (pageNumber === 1) {
        document.getElementById('page1').classList.add('active');
    } else if (pageNumber === 2) {
        document.getElementById('page2').classList.add('active');
    }
    
    // Обновляем точки-индикаторы
    updateDots(pageNumber);
}

// Обновление точек навигации
function updateDots(pageNum) {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === pageNum - 1);
    });
}

// Выбор действия
function makeChoice(choice) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    if (choice === 'attack') {
        document.getElementById('page3-attack').classList.add('active');
    } else if (choice === 'talk') {
        document.getElementById('page3-talk').classList.add('active');
    } else if (choice === 'run') {  // ← для кнопки "поговорить с ребятами"
        document.getElementById('page3-read').classList.add('active');
    }
}

// Отправка данных в Telegram
function sendToTelegram(message) {
    // Отправляем данные боту
    tg.sendData(JSON.stringify({
        action: 'comic_choice',
        choice: message,
        timestamp: new Date().toISOString()
    }));
    
    // Показываем подтверждение
    alert('Твой выбор отправлен! Загляни в чат с ботом 👀');
    
    // Закрываем веб-приложение (опционально)
    // tg.close();
}