// Ambil elemen gambar
var gambar = document.getElementById("gambar");
var isMirrored = false;

gambar.addEventListener("click", function () {   // Tambahkan event listener untuk mengontrol animasi saat klik
    if (!isMirrored) {
        // Flip gambar horizontal (mirror)
        gambar.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

