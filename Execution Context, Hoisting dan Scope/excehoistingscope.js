// Execution Context, Hoisting & Scope
// 1. creation phase pada Global Context
// Dalam proses ini, progam akan mencari variable sama function terlebih dahulu

// 2. hoisting
// Hoisting adalah menaikan segala hal dalam proses creation, walaupun posisi ada di bawah

// window = global object
// this = window

// 4. execution phase
// Dalam proses ini, progam akan menjalankan program yang dieksekusi

// 5. jika sudah dieksekusi, tumpukan phase akan dihilangkan

function satu() {
  var nama = "Alfian";
  console.log(nama);
}
function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "Widitama";
satu();
dua("Dini");
console.log(nama);

// Proses jalannya program
// 1. Program akan mengecek apakah ada inisialisasi variable dan function atau tidak. Jika ada, program akan menaikan (hoisting) hal tersebut
// ke atas tapi belum mengisi nilai dari variable. Tetapi baru cek ada atau tidak saja dan tidak mengisi nilai.
// console.log(nama) akan menampilkan undefined, karena di atas barisnya tidak ada pengisian nilai variable tersebut.

// 2. var nama = "Widitama", program baru mengisi nilai variable nama dengan Widitama

// 3. satu(), program akan menjalankan function satu.
// Program akan mengecek seperti proses nomor 1, tetapi hanya di dalam scope function tersebut saja.
// Yang akan tampil adalah Alfian, karena di dalam function tersebut ada inisialisasi variable di baris awal.

// 4. dua("Dini"), program akan menjalankan function dua.
// Program akan mengecek seperti proses nomor 1, tetapi hanya di dalam scope function tersebut saja.
// Di dalam function dua tidak ada variable nama, program akan keluar scope tersebut dan akan mencari variable nama.
// Maka ketemulah variable nama dengan isi Widitama.
// Karena pada function dua tidak menerima parameter, maka program tidak akan menampilkan parameter tersebut.

// 5. console.log(nama), program akan menampilkan Widitama, karena di atas baris tersebut sudah ada inisialisasi variable.
