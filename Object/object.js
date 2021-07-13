// Cara untuk membuat Object pada Javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak, karena harus buat object lagi
// let mahasiswa1 = {
//   nama: "Alfian Widitama",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     // Menggunakan tanda `` agar dapat langsung menghubungkan string dengan tanda ${}
//     console.log(`Halo ${this.nama} selamat makan!`);
//   },
// };
// let mahasiswa2 = {
//   nama: "Dini Nur Madani",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi += porsi;
//     // Menggunakan tanda `` agar dapat langsung menghubungkan string dengan tanda ${}
//     console.log(`Halo ${this.nama} selamat makan!`);
//   },
// };

// 2. Function Declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama} selamat makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama} selamat main!`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama} selamat tidur!`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   // Menggunakan Object.create untuk membawa object lain
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
// // Inisialisasi Object
// let alfian = Mahasiswa("Alfian Widitama", 10);
// let dini = Mahasiswa("Dini Nur Madani", 20);

// 3. Constructor Function
// Menggunakan keyword new
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama} selamat makan!`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama} selamat main!`);
  };
  this.tidur = function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama} selamat tidur!`);
  };
}
// Inisialisasi Object
let alfian = new Mahasiswa("Alfian Widitama", 10);
let dini = new Mahasiswa("Dini Nur Madani", 20);
