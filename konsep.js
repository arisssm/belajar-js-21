// Dynamic Typing = kemampuan menentukan jenis data variabel secara otomatis selama development

let x = 5; // x bertipe number
x = "Lima"; // x bertipe string

// Prototypal Inheritance = model pewarisan di mana sebuah objek dapat mewarisi properti dan metode dari objek prototipe induknya
let ulangTahun = {
    nama: "indonesia",
    usia: 80,
    cetak: function(){
        console.log("Selamat tulang tahun " + this.nama + " yang Ke-" + this.usia);
    }
}
ulangTahun.cetak();

// DOM Manipulation = proses mengubah struktur, gaya, atau isi halaman HTML menggunakan JavaScript
document.getElementById("myMessage").innerText = "sedang belajar javascript";
let newMessage = document.createElement("div");
newMessage.innerText = "sedang belajar DOM";
document.body.appendChild(newMessage);

document.getElementsByClassName("pesan");
document.getElementsByTagName("div");

// Event Handling = interaksi pengguna, seperti klik mouse atau pengiriman formulir. Contoh:
document.getElementById("tambahData").addEventListener("click", function() {
    alert("Tombol sudah ditekan!");
});

// Error Handling =  menangani kondisi anomali atau kesalahan yang mungkin terjadi selama eksekusi program
try {
    // Kode yang mungkin menyebabkan kesalahan
    throw new Error("Maaf, periksa kembali kode.");
} catch (error) {
    console.error(error.message);
}

// Module System = mengatur kode ke dalam modul yang terpisah, kemudian memanggil kode tersebut di beda directory

// file dokumen.js
exports.ucapkanSalam = function() {
    console.log("Haloo..selamat siang!");
};

// main.js
const myDokumen = require('./dokumen.js');
myDokumen.ucapkanSalam();

// Higher-order function = fungsi yang mengambil fungsi lain sebagai argumen atau mengembalikan fungsi lain. 
function panggilNama(nama) {
    return function() {
        console.log("Kamu dipanggil sama, " + nama + "!");
    };
} //scope

let pesanBudi = panggilNama("Budi");
pesanBudi(); //closur

// Asynchronous Programming = di mana kode tidak dieksekusi secara berurutan, tetapi secara bersamaan

let waktu = setInterval(() => {
    console.log("waktu berjalan");
}, 1000);

setTimeout(() => {
    clearInterval(waktu);
}, 5000);

// Scope mengacu pada ketersediaan variabel , closur fungsi yang mengakses variabel di luar jangkauan 
function tambahMotor(nama) {
    let namaMotor = nama;
    function ambilMotor() {
        console.log("ambil motor:" + namaMotor)
    }
    return ambilMotor;
}
let motor = tambahMotor("scoopy");
motor();
console.log(namaMotor); //error