//PERCABANGAN
//Program menghitung jumlah kalori setelah melakukan aktivitas olahraga tersebut

// Input pengguna untuk masing-masing olahraga
var waktuLari = Number(prompt("Berapa menit  melakukan lari? (masukkan angka)"));
var waktuPushUp = Number(prompt("Berapa menit  melakukan push up? (masukkan angka)"));
var waktuPlank = Number(prompt("Berapa menit  melakukan plank? (masukkan angka)"));

// Menghitung kalori terbakar 
var kaloriLari = (60 / 5) * waktuLari; // Lari membakar 60 kalori setiap 5 menit
var kaloriPushUp = (200 / 30) * waktuPushUp; // Push up membakar 200 kalori setiap 30 menit
var kaloriPlank = 5 * waktuPlank; // Plank membakar 5 kalori setiap 1 menit

// Menghitung total kalori yang terbakar
var totalKalori = kaloriLari + kaloriPushUp + kaloriPlank;

// Menampilkan hasil perhitungan kalori terbakar
console.log("Kalori yang terbakar dari lari: " + kaloriLari + " kalori");
console.log("Kalori yang terbakar dari push up: " + kaloriPushUp + " kalori");
console.log("Kalori yang terbakar dari plank: " + kaloriPlank + " kalori");
console.log("Total kalori yang terbakar: " + totalKalori + " kalori");

//PERULANGAN
//Mencari angka palindrome terdekat selanjutnya dari sebuah input
// Fungsi untuk mengecek apakah angka adalah palindrome
function isPalindrome(num) {
    var str = num.toString(); // Ubah angka menjadi string
    return str === str.split('').reverse().join(''); // Cek apakah string sama dengan versi terbaliknya
}

// Fungsi untuk mencari palindrome terdekat
function palindromeTerdekat(angka) {
    angka++; // Mulai dari angka setelah input
    while (true) { // Loop terus hingga menemukan palindrome
        if (isPalindrome(angka)) { // Jika angka adalah palindrome
            return angka; // Kembalikan angka tersebut
        }
        angka++; // Tambah angka
    }
}

console.log(palindromeTerdekat(9));      // Output: 11
console.log(palindromeTerdekat(100));    // Output: 101
console.log(palindromeTerdekat(200));    // Output: 202
console.log(palindromeTerdekat(1000));   // Output: 1001
console.log(palindromeTerdekat(2345));   // Output: 2442


//ARRAY
//Buatlah simulasi pengecekan posisi skak antara RAJA dan BENTENG seperti gambar berikut
// Ukuran papan catur
const ukuran = 5;

// Fungsi untuk membuat papan catur
function buatPapanCatur(rajaPos, bentengPos) {
    const papan = [];

    for (let i = 1; i <= ukuran * ukuran; i++) {
        // Menentukan simbol untuk setiap kotak
        if (i === rajaPos) {
            papan.push('🟡'); // Simbol raja
        } else if (i === bentengPos) {
            papan.push('🟣'); // Simbol benteng
        } else {
            papan.push('⬜'); // Kotak kosong
        }
    }

    // Menampilkan papan catur dalam bentuk 2D
    for (let row = 0; row < ukuran; row++) {
        let baris = '';
        for (let col = 0; col < ukuran; col++) {
            baris += papan[row * ukuran + col] + ' '; // Menghitung posisi dalam array 1D
        }
        console.log(baris);
    }
}

// Fungsi untuk memeriksa apakah raja dalam posisi check
function isRajaCheck(rajaPos, bentengPos) {
    const rajaRow = Math.ceil(rajaPos / ukuran); // Menghitung baris raja
    const rajaCol = (rajaPos - 1) % ukuran; // Menghitung kolom raja

    const bentengRow = Math.ceil(bentengPos / ukuran); // Menghitung baris benteng
    const bentengCol = (bentengPos - 1) % ukuran; // Menghitung kolom benteng

    // Memeriksa apakah raja dan benteng berada dalam satu baris atau kolom
    return rajaRow === bentengRow || rajaCol === bentengCol;
}

// Posisi raja dan benteng
const rajaPos = 8; // Raja di kotak 8
const bentengPos = 18; // Benteng di kotak 18

// Menampilkan papan catur
buatPapanCatur(rajaPos, bentengPos);

// Memeriksa dan menampilkan apakah raja dalam posisi check
if (isRajaCheck(rajaPos, bentengPos)) {
    console.log("Raja dalam posisi CHECK!");
} else {
    console.log("Raja tidak dalam posisi CHECK.");
}


