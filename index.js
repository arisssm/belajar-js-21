//  type data javascript
let judulFilm = "Avatar";
console.log(judulFilm);
console.log(typeof(judulFilm));

let penonton = 1000;
console.log(penonton);
console.log(typeof(penonton));

let bioskop = true;
console.log(bioskop);
console.log(typeof(bioskop));

let tokoh;
console.log(tokoh);
console.log(typeof(tokoh));

let tiket = null;
console.log(tiket);
console.log(typeof(tiket));

let kursi = [1,2,3,4];
console.log(kursi);
console.log(typeof(kursi));

let avatar = { name: "Aang", age: 100 }
console.log(avatar);
console.log(typeof(avatar));

// variabel var, let dan const
let hargaTiket = 80000;
console.log("harga tiket:", hargaTiket);
hargaTiket = 100000;
console.log("harga tiket:", hargaTiket);

const jumlahPenonton = 1000;
console.log("jumlah penonton bioskop :", jumlahPenonton);
jumlahPenonton = 50;
console.log("jumlah penonton bioskop :", jumlahPenonton);

/** Conditional Statement */
let nilaiUjian = 20;
if(nilaiUjian >= 90) {
    console.log("Nilai A")
} else if (nilaiUjian >= 70) {
    console.log("nilai B");
} else if (nilaiUjian >= 60) {
    console.log("nilai C")
} else {
    console.log("Nilai Merah")
}

let makanan = "Burger";
if (makanan === "Burger"){
    console.log("tolong belikan");
} else {
    console.log("tidak jadi beli");
}

let namaHewan = "Ayam"
let jenisHewan;

switch(namaHewan) {
    case 'Kuda':
    case 'Jerapah':
        jenisHewan = "Hewan berkaki empat";
    break;
    case 'Ayam':
    case 'Bebek':
        jenisHewan = "Hewan ternak";
    break;
    default:
        jenisHewan = "Bukan Hewan";
}
console.log(`jadi ${namaHewan} merupakan ${jenisHewan}`);

/** Looping */
let index = 0;
do {
    console.log("Pengulangan:" + index);
    index++;
} while (index < 5);

for (let i = 3; i <=10; i+= 2 ) {
    console.log(i);
}
/** Fungsi */
function penyanyi(nama, usia) {
    return {
        nama: nama,
        usia: usia,
    }
}

let ktp = penyanyi("Alan Walker", 20);
console.log(ktp);

function luaspersegi(panjang, lebar) {
    let hitung = panjang * lebar;
    return hitung;
}

let luas = luaspersegi(20,50);
console.log(luas);

/** Object */
let ulangTahun = {
    nama: "indonesia",
    usia: 80,
    cetak: function(){
        console.log("Selamat tulang tahun " + this.nama + " yang Ke-" + this.usia);
    }
}
ulangTahun.cetak();


let pemain = {
    nama: "Haji Son",
    klub: "Persib",
    usia: 23,
};
console.log(pemain.klub);

/** Array */
let buah = ["anggur", "pisang", "apel", "nanas"];
console.log(buah[0]);

let kendaraan = [
    {
        nama: 'mobil',
        tahun: 2012
    }, {
        nama: 'motor',
        tahun: 2001
    }, {
        nama: 'sepeda',
        tahun: 2020
    }
]
console.log(kendaraan[1].tahun);

/** Operator Aritmatika */
let a = 10;
let b = 5;
let x = 15;
let y = 2;
let ab = 20;
let cd = "20";

let umur = 25;

let saya = (umur <= 20 ) ? 'dewasa' : 'remaja';
console.log(saya);

let pangkat = 2**3;
let tambah = a + b;
let kurang = a - b;
let kali = a * b;
let bagi = a / b;

console.log(pangkat);
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

a += b;
console.log(a);
console.log(ab == cd);
console.log(ab === cd);
console.log(ab != cd);
console.log(ab !== cd);
console.log(a <= ab);

/** Operator Logika */
// NOR ||
let punyaKunci = true;
if (!punyaKunci) {
    console.log("dilarang masuk");
} else {
    console.log("silahkan masuk")
}

// OR ||

let hari = 'kamis';
if (hari == 'sabtu' || hari == 'minggu') {
    console.log("hari weekend");
} else {
    console.log("hari weekdays");
}

// AND &&
let xy = 15;
let yz = 10;

if( xy > 10 && yz > 10) {
    console.log("nilai lebih besar")
} else {
    console.log("nilai kecil");
}






