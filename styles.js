/* Produk */
.product {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;  /* Sedikit meningkatkan padding untuk ruang lebih */
    margin: 15px 0; /* Menambah margin untuk jarak antar produk */
    text-align: center;
    box-sizing: border-box; /* Menjaga lebar elemen tetap sama meskipun ada padding */
}

/* Gambar produk */
.product img {
    max-width: 100%;
    height: auto;
    object-fit: cover; /* Menjaga aspek rasio gambar tetap terjaga */
}

/* Footer */
footer {
    text-align: center;
    padding: 15px 0;  /* Menambahkan padding untuk footer */
    background: #333;
    color: #fff;
    position: relative;
    width: 100%;
    bottom: 0;
}

/* Responsif untuk layar kecil */
@media (max-width: 600px) {
    .product {
        padding: 15px;  /* Padding lebih kecil untuk layar kecil */
    }

    footer {
        padding: 10px 0;  /* Mengurangi padding footer pada layar kecil */
    }
}
