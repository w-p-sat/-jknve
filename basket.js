document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountDisplay = document.getElementById('cart-count'); // Необов'язково, якщо використовуєш

    const box = document.querySelector('.box_buy');
    const productContainer = document.querySelector('.main_product');

    const minusBtn = box.querySelector('.minus-btn');
    const plusBtn = box.querySelector('.plus-btn');
    const quantityDisplay = box.querySelector('.quantity');
    const buyBtn = box.querySelector('.buy');

    let selectedColor = null;
    let selectedSize = null;

    // ✅ Вибір кольору
    productContainer.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            productContainer.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedColor = btn.innerText;
        });
    });

    // ✅ Вибір розміру
    productContainer.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            productContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedSize = btn.innerText;
        });
    });

    // ➕ Збільшити
    plusBtn.addEventListener('click', () => {
        let current = parseInt(quantityDisplay.innerText);
        quantityDisplay.innerText = current + 1;
    });

    // ➖ Зменшити
    minusBtn.addEventListener('click', () => {
        let current = parseInt(quantityDisplay.innerText);
        if (current > 1) {
            quantityDisplay.innerText = current - 1;
        }
    });

    // 🛒 Придбати
    buyBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityDisplay.innerText);
        const productName = document.querySelector('.product-name').innerText;
        const productImage = document.querySelector('#main-image').getAttribute('src');

        if (!selectedColor) {
            alert("Будь ласка, оберіть колір.");
            return;
        }

        if (!selectedSize) {
            alert("Будь ласка, оберіть розмір.");
            return;
        }

        const product = {
            name: productName,
            image: productImage,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity
        };

        // 📦 Додати до кошика
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));

        // 🧾 Повідомлення
        alert(`Товар додано до кошика:\n${productName}\nКількість: ${quantity}\nКолір: ${selectedColor}\nРозмір: ${selectedSize}`);

        // 🔄 Скидання
        quantityDisplay.innerText = 1;
        productContainer.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
        productContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
        selectedColor = null;
        selectedSize = null;

        // 🔢 Якщо хочеш показати кількість у кошику
        cartCount += quantity;
        if (cartCountDisplay) {
            cartCountDisplay.innerText = cartCount;
        }
    });
});