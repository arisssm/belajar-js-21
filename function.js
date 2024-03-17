// Mendefinisikan fungsi yang mengembalikan objek
function ayah(nama, usia) {
    return {
        nama: nama,
        usia: usia
    };
}

// Memanggil fungsi dan menyimpan hasil objek
let ktp = ayah("Haji Son", 40);

// Menampilkan nilai kembali dari fungsi
console.log(ktp);


function persegi(p, l) {
    let hasil = p * l;
    return hasil;
}
let luasPersegi = persegi(10, 10);
console.log(luasPersegi);

