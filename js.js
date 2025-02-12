document.addEventListener('DOMContentLoaded', () => {
    // Находим элементы
    const firstWordElement = document.querySelector('.wordsdiv h1:first-of-type'); // Первое слово ("Люблю")
    const nameElement = document.getElementById('name'); // Второе слово ("Света")
    const button = document.getElementById('changeButton'); // Кнопка

    // Массивы с разными словами
    const firstWords = [
        "Люблю,",
        "Обожаю,",
        "Счастлив c тобой,",
        "Восхищаюсь тобой,",
        "Без ума от тебя,",
        "Мечтаю о тебе,",
        "Теряю сердце из-за,",
        "Моя,",
        "Слова кончаются,"
    ];

    const secondWords = [
        "любимая",
        "радость",
        "счастье",
        "лучик",
        "луна",
        "солнце",
        "звёздочка",
        "принцесса(^^)",
        "королева",
        "нежность",
        "мечта",
        "Света",
        "Светик",
        "Свеп",
        "Вета))",
    ];

    // Добавляем обработчик события на кнопку
    button.addEventListener('click', () => {
        // Генерируем случайные индексы
        const randomFirstIndex = Math.floor(Math.random() * firstWords.length);
        const randomSecondIndex = Math.floor(Math.random() * secondWords.length);

        // Изменяем текст элементов
        firstWordElement.textContent = firstWords[randomFirstIndex];
        nameElement.textContent = secondWords[randomSecondIndex];

        // Добавляем класс для анимации
        firstWordElement.classList.add('changed');
        nameElement.classList.add('changed');

        // Убираем класс после завершения анимации
        setTimeout(() => {
            firstWordElement.classList.remove('changed');
            nameElement.classList.remove('changed');
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic'); // Находим аудио
    const toggleButton = document.getElementById('toggleMusic'); // Находим кнопку

    // Устанавливаем громкость (по желанию)
    music.volume = 0.5; // Громкость 50%

    // Обработчик события нажатия на кнопку
    toggleButton.addEventListener('click', () => {
        if (music.paused) {
            music.play(); 
        } else {
            music.pause(); 
        }
    });

    // Автозапуск музыки (если браузер разрешает)
    music.play().catch(() => {
        console.log("Автозапуск музыки заблокирован браузером. Нажмите на кнопку для включения.");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic'); // Находим аудио
    const toggleButton = document.getElementById('changeButton'); // Находим кнопку
     // Обработчик события нажатия на кнопку
     toggleButton.addEventListener('click', () => {
        if (music.paused) {
            music.play(); 
        } else {
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const imageBackground = document.querySelector('.MainSection'); // Применяем к .MainSection

    // Настройки для первого типа картинок (сердечко)
    const heart1Settings = {
        src: "img/icons8-valentines-96 (1).png", // Путь к изображению 
        count: 100, // Количество картинок
        minSize: 40, // Минимальный размер (px)
        maxSize: 100, // Максимальный размер (px)
        minRotation: -20, // Минимальный угол поворота (градусы)
        maxRotation: 20,  // Максимальный угол поворота (градусы)
    };
    const heart4Settings = {
        src: "img/heart.png", // Путь к изображению 
        count: 100, // Количество картинок
        minSize: 40, // Минимальный размер (px)
        maxSize: 100, // Максимальный размер (px)
        minRotation: -20, // Минимальный угол поворота (градусы)
        maxRotation: 20,  // Максимальный угол поворота (градусы)
    };
    const heart5Settings = {
        src: "img/heart (1).png", // Путь к изображению 
        count: 100, // Количество картинок
        minSize: 40, // Минимальный размер (px)
        maxSize: 100, // Максимальный размер (px)
        minRotation: -20, // Минимальный угол поворота (градусы)
        maxRotation: 20,  // Максимальный угол поворота (градусы)
    };
    const heart6Settings = {
        src: "img/heart (2).png", // Путь к изображению 
        count: 100, // Количество картинок
        minSize: 40, // Минимальный размер (px)
        maxSize: 100, // Максимальный размер (px)
        minRotation: -20, // Минимальный угол поворота (градусы)
        maxRotation: 20,  // Максимальный угол поворота (градусы)
    };
    const heart7Settings = {
        src: "img/heart (3).png", // Путь к изображению 
        count: 10, // Количество картинок
        minSize: 40, // Минимальный размер (px)
        maxSize: 100, // Максимальный размер (px)
        minRotation: -20, // Минимальный угол поворота (градусы)
        maxRotation: 20,  // Максимальный угол поворота (градусы)
    };
    // Настройки для второго типа картинок (роза)
    const heart2Settings = {
        src: "img/icons8-valentines-96.png", // Путь к изображению
        count: 50, // Количество картинок
        minSize: 60, // Минимальный размер (px)
        maxSize: 80, // Максимальный размер (px)
        minRotation: -130, // Минимальный угол поворота (градусы)
        maxRotation: 10,  // Максимальный угол поворота (градусы)
    };

    // Настройки для третьего типа картинок (мишка)
    const love1Settings = {
        src: "img/love.png", // Путь к изображению
        count: 10, // Количество картинок
        minSize: 50, // Минимальный размер (px)
        maxSize: 120, // Максимальный размер (px)
        minRotation: -30, // Минимальный угол поворота (градусы)
        maxRotation: 30,  // Максимальный угол поворота (градусы)
    };

    // Настройки для четвертого типа картинок (презик)
    const love2Settings = {
        src: "img/love (1).png", // Путь к изображению
        count: 2, // Количество картинок
        minSize: 20, // Минимальный размер (px)
        maxSize: 50, // Максимальный размер (px)
        minRotation: -15, // Минимальный угол поворота (градусы)
        maxRotation: 15,  // Максимальный угол поворота (градусы)
    };

    // Функция для создания картинок
    function createImages(settings) {
        for (let i = 0; i < settings.count; i++) {
            const img = document.createElement('img');
            img.src = settings.src;

            // Устанавливаем случайный размер
            const randomSize = Math.random() * (settings.maxSize - settings.minSize) + settings.minSize;
            img.style.width = `${randomSize}px`;

            // Случайная позиция по X и Y (учитываем высоту 5 экранов)
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * (window.innerHeight * 5); // Высота 5 экранов

            // Случайный поворот в диапазоне minRotation и maxRotation
            const randomRotation = Math.random() * (settings.maxRotation - settings.minRotation) + settings.minRotation;

            // Устанавливаем стиль для картинки
            img.style.position = 'absolute';
            img.style.left = `${randomX}px`;
            img.style.top = `${randomY}px`;
            img.style.transform = `rotate(${randomRotation}deg)`;
            img.style.opacity = '0.7'; // Делаем изображения полупрозрачными

            // Добавляем картинку в контейнер
            imageBackground.appendChild(img);
        }
    }

    // Создаем картинки для всех типов
    createImages(heart1Settings);
    createImages(heart2Settings);
    createImages(love1Settings);
    createImages(love2Settings);
    createImages(heart4Settings);
    createImages(heart5Settings);
    createImages(heart6Settings);
    createImages(heart7Settings);

    // При изменении размера окна перераспределяем картинки
    window.addEventListener('resize', () => {
        const images = document.querySelectorAll('.MainSection img');
        images.forEach((img) => {
            img.style.left = `${Math.random() * window.innerWidth}px`;
            img.style.top = `${Math.random() * (window.innerHeight * 5)}px`; // Высота 5 экранов
        });
    });
});

function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Случайная позиция по горизонтали
    const randomX = Math.random() * window.innerWidth;

    // Устанавливаем позицию
    heart.style.left = `${randomX}px`;

    // Добавляем сердце на страницу
    document.body.appendChild(heart);

    // Удаляем сердце после завершения анимации
    setTimeout(() => {
        heart.remove();
    }, 5000); // 5 секунд (длительность анимации)
}
// Создаем сердце каждую секунду
setInterval(createFallingHeart, 100);

document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.getElementById('giftButton');
    const message = document.getElementById('message');

    // Обработчик клика на подарок
    giftButton.addEventListener('click', () => {
        // Добавляем класс "explode" для эффекта взрыва
        giftButton.classList.add('explode');

        // Через 0.5 секунды показываем сообщение
        setTimeout(() => {
            message.style.opacity = '1'; // Показываем текст
            message.style.visibility = 'visible'; // Сделать видимым
        }, 500); // Задержка в 0.5 секунды
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const expandButton = document.getElementById('expandButton');
    const square = document.getElementById('square');

    let scaleCount = 1; // Текущий масштаб квадрата
    const maxScale = 3; // Максимальный масштаб (5 раз)

    // Обработчик клика на кнопку
    expandButton.addEventListener('click', () => {

        // Увеличиваем масштаб
        scaleCount += 1;

        // Запускаем анимацию сужения и увеличения
        square.style.animation = 'expandEffect 0.5s ease forwards';

        // После завершения анимации устанавливаем новый размер
        setTimeout(() => {
            square.style.width = `${50 * scaleCount}px`;
            square.style.height = `${50 * scaleCount}px`;
            square.style.transform = `scale(1)`; // Возвращаем transform к нормальному состоянию
        }, 500); // Длительность анимации (0.5 секунды)

        // Если достигнут максимум, отключаем кнопку
        if (scaleCount === maxScale) {
            scaleCount = 0 
            square.style.transform = 'scale(0.1)';
        }
    });
});