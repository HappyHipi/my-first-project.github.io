console.log("JavaScript загружен!");
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name'); // Находим элемент с id="name"
    const button = document.getElementById('changeButton'); // Находим кнопку

    // Обработчик события нажатия на кнопку
    button.addEventListener('click', () => {
        // Меняем текст внутри элемента
        if (nameElement.textContent === 'Света') {
            nameElement.textContent = 'Моя любимая'; // Новое слово
        } else {
            nameElement.textContent = 'Света'; // Возвращаем обратно
        }
    });
});