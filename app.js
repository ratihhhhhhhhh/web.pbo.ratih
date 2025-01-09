// Menangani klik pada tombol "Beli Sekarang"
document.addEventListener('DOMContentLoaded', () => {
    // Ambil semua tombol "Beli Sekarang" dalam elemen dengan kelas .product
    const buyButtons = document.querySelectorAll('.product button');

    // Tambahkan event listener untuk setiap tombol
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Cari nama produk dengan mencari elemen h3 dalam elemen yang sama dengan tombol
            const productName = button.closest('.product').querySelector('h3').innerText;
            
            // Tampilkan alert dengan nama produk
            alert(`Anda telah memilih untuk membeli: ${productName}`);
        });
    });
});
