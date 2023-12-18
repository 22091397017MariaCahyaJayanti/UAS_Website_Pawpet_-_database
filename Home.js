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

var gambar2 = document.getElementById("gambar2");
gambar2.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar2 horizontal (mirror)
        gambar2.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar2.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

var gambar3 = document.getElementById("gambar3");
gambar3.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar3 horizontal (mirror)
        gambar3.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar3.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

var gambar4 = document.getElementById("gambar4");
gambar4.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar4 horizontal (mirror)
        gambar4.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar4.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

var gambar5 = document.getElementById("gambar5");
gambar5.addEventListener("click", function () {
    if (!isMirrored) {
        // Flip gambar5 horizontal (mirror)
        gambar5.style.transform = "scaleX(-1)";
        isMirrored = true;
    } else {
        // Kembalikan ke posisi awal (tidak mirror)
        gambar5.style.transform = "scaleX(1)";
        isMirrored = false;
    }
});

// Menyembunyikan semua paragraf kecuali yang pertama di setiap bagian
document.querySelectorAll("section p").forEach((p, index) => {
    if (index > 0) {
        p.style.display = "none";
    }
});

// Menambahkan tombol "See More" untuk setiap bagian dengan satu paragraf di atasnya
document.querySelectorAll("section").forEach((section, index) => {
    const paragraphs = section.querySelectorAll("p");
    if (paragraphs.length > 1) {
        const firstParagraph = paragraphs[0];
        paragraphs.forEach((p, i) => {
            p.style.display = i <= 0 ? "block" : "none";
        });

        const seeMoreButton = document.createElement("button");
        seeMoreButton.textContent = "See More";
        seeMoreButton.classList.add("see-more-button"); // Menambahkan gaya CSS sesuai keinginan Anda
        seeMoreButton.style.border = "none"; // Menghapus garis hitam di sekitar tombol
        firstParagraph.insertAdjacentElement("afterend", seeMoreButton);

        seeMoreButton.addEventListener("click", () => {
            paragraphs.forEach((p, i) => {
                p.style.display = "block";
            });
            seeMoreButton.style.display = "none"; // Menyembunyikan tombol "See More"
        });
    }
});


