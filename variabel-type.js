/* Contoh Sederhana Perbedaan Let dan Const Variabel*/

let hargaSewa = 1000000;
console.log("Harga sewa mobil:", hargaSewa);
hargaSewa = 2500000;
console.log("Harga sewa mobil seminggu:", hargaSewa);

const hargaBeli = 2000000;
hargaBeli = 3500000;
console.log("Harga beli sapi:", hargaBeli);
console.log("Harga jual sapi:", hargaBeli);

function simpanBarang(){
    if(true) {
        var barang = "Baju";
    }
    console.log(barang);
}
simpanBarang();

// /*Contoh sederhana Type Data Javascript*/

let judulFilm = "Spiderman";
console.log(judulFilm);
console.log(typeof(judulFilm))
let episode = 200;
console.log(episode);
console.log(typeof(episode))
let tayang = true;
console.log(tayang);
console.log(typeof(tayang))
let tokoh;
console.log(tokoh);
console.log(typeof(tokoh))
let sutradara = null;
console.log(sutradara);
console.log(typeof(sutradara));