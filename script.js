// Menangani klik pada tombol "Beli Sekarang"
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.product button'); // Menemukan semua tombol "Beli Sekarang"

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mengambil nama produk dengan mencari elemen h3 terdekat dari tombol
            const productName = button.closest('.product').querySelector('h3').innerText;

            // Menampilkan alert dengan nama produk yang dipilih
            alert(`Anda telah memilih untuk membeli: ${productName}`);
        });
    });
});
