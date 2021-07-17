function init() {
  return function (nama) {
    console.log(nama);
  };
}
let panggilNama = init();
panggilNama("Alfian");

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}
let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatSore = ucapkanSalam("Sore");
selamatPagi("Alfian");
selamatSiang("Widitama");
selamatSore("Alfian Widitama");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})(); // ini dapat langsung menjalankan function tanpa harus memasukan ke dalam variabel
counter = 100;
console.log(add());
console.log(add());
console.log(add());
