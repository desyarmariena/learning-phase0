/**

  pada bulan tanggal 1 pada bulan october 2019 jatuh pada hari senin
  buatlah sebuah program yang menampilkan nama hari berdasarkan input tanggal pada bulan dan tahun yang sama

  contoh 1 (tanggal = 2):
  hari selasa

  contoh (tanggal = 8):
  hari senin

  contoh (tanggal = 17):
  hari rabu


 */

var tanggal = 1;
// Put your code here

for(var i = 0; i < 5; i++){
  switch(tanggal-(i*7)){
    case 1 : console.log('Hari Senin'); break;
    case 2 : console.log('Hari Selasa'); break;
    case 3 : console.log('Hari Rabu'); break;
    case 4 : console.log('Hari Kamis'); break;
    case 5 : console.log('Hari Jumat'); break;
    case 6 : console.log('Hari Sabtu'); break;
    case 7 : console.log('Hari Minggu'); break;
  }
}