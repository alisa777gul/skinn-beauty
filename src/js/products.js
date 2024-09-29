const shop_add = document.querySelectorAll(".link-products"); 
let count_buy = localStorage.getItem("count_buy") ? parseInt(localStorage.getItem("count_buy")) : 0; // Получаем сохраненное значение из localStorage или устанавливаем 0

// Обновляем отображение количества товаров в корзине при загрузке страницы
const cart = document.querySelector(".cart-item");
cart.textContent = count_buy;

shop_add.forEach(link_buy => {
    link_buy.addEventListener("click", (evt) => {
        evt.preventDefault(); 
        count_buy++; // Увеличиваем счетчик
        cart.textContent = count_buy; // Обновляем отображение

        // Сохраняем количество товаров в localStorage с ключом "count_buy"
        localStorage.setItem("count_buy", count_buy);
    });
});