const images = document.querySelectorAll('.cont-second img'); // Получаем все изображения
let currentIndex = 0; // Индекс текущего изображения
let allImagesShown = false; // Флаг, показывающий, все ли изображения были показаны

function showNextImage() {
  if (currentIndex < images.length && !allImagesShown) {
    // Показываем изображения по очереди
    images[currentIndex].classList.add('show');
    currentIndex++;
    setTimeout(showNextImage, 500); // Переход к следующему изображению через 1 секунду
  } else if (currentIndex === images.length && !allImagesShown) {
    // Когда все изображения показаны, запускаем процесс скрытия
    allImagesShown = true;
    currentIndex = 0; // Сбрасываем индекс, чтобы начать скрывать изображения
    setTimeout(hideNextImage, 3000); // Начинаем скрывать изображения через 1 секунду
  }
}

function hideNextImage() {
  if (currentIndex < images.length) {
    // Скрываем изображения по очереди
    images[currentIndex].classList.remove('show');
    images[currentIndex].classList.add('hide');
    currentIndex++;
    setTimeout(hideNextImage, 500); // Переход к следующему изображению через 1 секунду
  } else {
    // Когда все изображения скрыты, начинаем процесс заново
    allImagesShown = false;
    currentIndex = 0;
    images.forEach((img) => img.classList.remove('hide')); // Убираем класс "hide" для перезапуска
    setTimeout(showNextImage, 1000); // Начинаем снова показывать изображения через 1 секунду
  }
}

setTimeout(showNextImage, 0);