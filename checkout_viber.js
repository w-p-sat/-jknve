document.getElementById('viber-link').addEventListener('click', function (e) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert("Ваш кошик порожній.");
        return;
    }

    const fullname = document.getElementById('fullname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const city = document.getElementById('city').value.trim();
    const nova = document.getElementById('nova_pochta').value.trim();

    if (!fullname || !phone || !city || !nova) {
        alert("Будь ласка, заповніть усі поля форми.");
        return;
    }

    let message = `🛒 Замовлення:%0A`;
    cartItems.forEach((item, index) => {
        message += `#${index + 1} %0AТовар: ${item.name}%0AКолір: ${item.color}%0AРозмір: ${item.size}%0AКількість: ${item.quantity}%0A%0A`;
    });

    message += `👤 ПІБ: ${fullname}%0A📞 Телефон: ${phone}%0A🏙️ Місто: ${city}%0A📦 Відділення НП: ${nova}`;

    const viberNumber = '+380505270310 '; // <-- заміни на свій Viber номер
    const viberURL = `viber://chat?number=${encodeURIComponent(viberNumber)}&text=${message}`;

    this.href = viberURL;
});
