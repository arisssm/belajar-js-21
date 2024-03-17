/*Soal:
1. Buat sebuah objek pohon dan tampilkan informasi pohon tersebut dengan metode pewarisan.
output misal= "pohon mangga dengan jenis arumanis yang berusia 5 tahun adalah milik pak budi."
2. Buat sebuah program array bilangan ganjil dan bilangan genap. Gabungkan array menjadi satu dan tampilkan nilainya.
3. Buatlah program untuk menentukan apakah sebuah karakter adalah huruf vokal atau konsonan.
*/


// soal 1
let pohon = {
    nama: "mangga",
    jenis: "arum manis",
    usia: 5,
    pemilik: "budi",
    output: function(){
        return `pohon ${this.nama} dengan jenis ${this.jenis} yang berusia ${this.usia} adalah milik pak ${this.pemilik}`
    }
}
console.log(pohon.output());

// soal 2
let bilanganGanjil = [1, 3, 5, 7, 9];
let bilanganGenap = [2, 4, 6, 8];
let nilai = bilanganGanjil.concat(bilanganGenap);

console.log(nilai);

//  soal 3
let karakter = 'u';

if (karakter === 'a' || karakter === 'e' || karakter === 'i' || karakter === 'o' || karakter === 'u') {
    console.log(karakter + " adalah huruf vokal.");
} else if (karakter >= 'a' && karakter <= 'z') {
    console.log(karakter + " adalah huruf konsonan.");
} else {
    console.log("Karakter yang dimasukkan bukan huruf.");
}

console.log(karakter);