/* 
Soal 4 - Mengenal penggunaan Conditional Switch Case dalam JavaScript
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
Disini kamu diminta untuk membuat format tanggal. 
Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945. 
*/

var hari, bulan, tahun;

hari = prompt('Input tanggal! (1 - 31)');
bulan = prompt('Input bulan! (1 - 12)');
tahun = prompt('Input tahun! (1900 - 2200)');

// dengan asumsi user pasti input dengan benar
switch(bulan){
  case '1': bulan = 'Januari'; break;
  case '2': bulan = 'Februari'; break;
  case '3': bulan = 'Maret'; break;
  case '4': bulan = 'April'; break;
  case '5': bulan = 'Mei'; break;
  case '6': bulan = 'Juni'; break;
  case '7': bulan = 'Juli'; break;
  case '8': bulan = 'Agustus'; break;
  case '9': bulan = 'September'; break;
  case '10': bulan = 'Oktober'; break;
  case '11': bulan = 'November'; break;
  case '12': bulan = 'Desember'; break;
}

console.log(`Tanggal yang dimasukkan ${hari} ${bulan} ${tahun}`);