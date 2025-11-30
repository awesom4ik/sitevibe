// script.js

// --- ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ КОДА НА ЗАДНЕМ ФОНЕ ---
// script.js (НОВЫЙ КОД ДЛЯ МАТРИЧНОГО ФОНА)

// Функция для генерации случайных символов
function generateCodeString(length) {
    let result = '';
    const characters = '0123456789ABCDEF()[]{}|;:,.<>?/~`abcdef';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    // --- НОВЫЙ КОД ДЛЯ ЭФФЕКТА "МАТРИЧНОГО ДОЖДЯ" ---
    const body = document.body;
    const numberOfColumns = 50; // Количество столбцов (можно регулировать)
    const columnWidth = window.innerWidth / numberOfColumns;
    const columnHeight = window.innerHeight;

    for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement('div');
        column.classList.add('code-column');
        column.style.left = `${i * columnWidth}px`;
        column.style.top = `${-Math.random() * columnHeight}px`; // Случайная стартовая позиция

        // Генерируем случайный код для каждого столбца
        const codeContent = generateCodeString(Math.floor(columnHeight / 20)); // ~20px на символ
        column.textContent = codeContent;

        // Добавляем случайную задержку для анимации
        column.style.animationDelay = `${Math.random() * -10}s`; // Задержка от 0 до -10с
        column.style.animationDuration = `${10 + Math.random() * 10}s`; // Длительность от 10 до 20с

        body.appendChild(column); // Добавляем столбец в body
    }

    // --- КОД ДЛЯ АНИМАЦИИ ПЕЧАТИ ТЕКСТА (ОСТАВИТЬ БЕЗ ИЗМЕНЕНИЙ) ---
    const textElement = document.getElementById('typing-text');
    const textToType = "Старый бог";
    let charIndex = 0;
    const typingSpeed = 75;

    function typeText() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            textElement.style.borderRight = 'none';
        }
    }
    textElement.style.borderRight = '3px solid var(--neon-purple)';
    textElement.style.animation = 'blink 0.75s step-end infinite';
    typeText();
});

// script.js (добавить внутрь document.addEventListener)

    // --- ЛОГИКА МОДАЛЬНОГО ОКНА ДЛЯ КЕНТОФАРИКОВ ---
    const modal = document.getElementById('kentofarik-modal');
    const closeButton = document.querySelector('.close-button');
    const modalName = document.getElementById('modal-name');
    const modalPhoto = document.getElementById('modal-photo');
    const modalDescription = document.getElementById('modal-description');
    const kentofarikCards = document.querySelectorAll('.kentofarik-card');

    kentofarikCards.forEach(card => {
        // Добавляем слушателя событий на каждую карточку
        card.addEventListener('click', (event) => {
            // Убедимся, что клик был по самой карточке или по кнопке
            const target = event.target.closest('.kentofarik-card');
            if (!target) return;

            // Извлекаем данные из атрибутов
            const name = target.getAttribute('data-name');
            const photo = target.getAttribute('data-photo');
            const description = target.getAttribute('data-description');

            // Заполняем модальное окно данными
            modalName.textContent = name;
            modalPhoto.src = photo;
            modalDescription.textContent = description;

            // Отображаем модальное окно и блокируем скролл фона
            modal.style.display = 'flex'; 
            document.body.style.overflow = 'hidden'; 
        });
    });

    // Закрытие модального окна по кнопке "x"
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // script.js (добавить в конец document.addEventListener)

    // --- ЛОГИКА МОДАЛЬНОГО ОКНА ДЛЯ ГЛАВНОЙ СТРАНИЦЫ (ОБО МНЕ) ---

    const selfModal = document.getElementById('self-modal');
    const selfCloseButton = document.querySelector('.self-close');
    const selfDetailsButton = document.getElementById('show-my-details');

    if (selfDetailsButton) {
        selfDetailsButton.addEventListener('click', () => {
            // Извлекаем данные из кнопки
            const name = selfDetailsButton.getAttribute('data-name');
            const photo = selfDetailsButton.getAttribute('data-photo');
            const description = selfDetailsButton.getAttribute('data-description');
            
            // Заполняем модальное окно данными
            document.getElementById('self-modal-name').textContent = name;
            document.getElementById('self-modal-photo').src = photo;
            document.getElementById('self-modal-description').textContent = description;

            selfModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; 
        });

        // Закрытие модального окна по кнопке "x"
        selfCloseButton.addEventListener('click', () => {
            selfModal.style.display = 'none';
            document.body.style.overflow = '';
        });

        // Закрытие модального окна при клике вне его
        window.addEventListener('click', (event) => {
            if (event.target === selfModal) {
                selfModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }