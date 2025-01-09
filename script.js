// Menangani klik pada tombol "Beli Sekarang"
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product button');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').innerText;
            alert(`Anda telah memilih untuk membeli: ${productName}`);
        });
    });
});
