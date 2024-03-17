let pemainBola = {
    nama: "Haji Son",
    klub: "Palembang FC",
    nomorPunggung: 7,
    negara: "Korea Selatan"
};
console.log(pemainBola.klub);
console.log(pemainBola.negara);

//metode
let negara = {
    nama: "Indonesia",
    usia: 78,
    cetak: function() {
        console.log("Selamat ulang tahun " + this.nama + " yang ke-" + this.usia +"!");
    }
};
negara.cetak();

