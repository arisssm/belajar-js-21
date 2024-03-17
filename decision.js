let nilaiUjian = 80;

if (nilaiUjian >= 90) {
    console.log("A");
} else if (nilaiUjian >= 80) {
    console.log("B");
} else if (nilaiUjian >= 70) {
    console.log("C");
} else {
    console.log("Belajar lebih giat");
}

let namaHewan = 'Singa';
let jenisHewan;

switch (namaHewan) {
  case 'Gajah':
  case 'Jerapah':
  case 'Singa':
    jenisHewan = 'Karnivora';
    break;
  case 'Kuda':
  case 'Sapi':
    jenisHewan = 'Herbivora';
    break;
  case 'Orangutan':
  case 'Bonobo':
    jenisHewan = 'Omnivora';
    break;
  default:
    jenisHewan = 'Nama hewan tidak benar';
}

console.log(`Hewan ${namaHewan} termasuk dalam jenis: ${jenisHewan}`);
