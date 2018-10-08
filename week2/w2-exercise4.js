/* 
Soal 4 - Mengenal penggunaan Conditional Switch Case dalam JavaScript
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. 
Disini kamu diminta untuk membuat format tanggal. 
Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945. 
*/

var hari = 1;
var bulan = 10;
var tahun = 2018;

if(hari >= 1 && hari <= 31){
  if(bulan >= 1 && bulan <= 12){
    if(tahun >= 1900 && tahun <= 2200){
      switch(bulan){
        case 1: bulan = 'Januari'; break;
        case 2: bulan = 'Februari'; break;
        case 3: bulan = 'Maret'; break;
        case 4: bulan = 'April'; break;
        case 5: bulan = 'Mei'; break;
        case 6: bulan = 'Juni'; break;
        case 7: bulan = 'Juli'; break;
        case 8: bulan = 'Agustus'; break;
        case 9: bulan = 'September'; break;
        case 10: bulan = 'Oktober'; break;
        case 11: bulan = 'November'; break;
        case 12: bulan = 'Desember'; break;
      }
      console.log(`Tanggal yang dimasukkan`, hari, bulan, tahun);
    } else {
      console.log('Anda salah memasukkan tahun! (1900 - 2200');
    }  
  } else {
    console.log('Anda salah memasukkan bulan! (1 - 12');
  }
} else {
  console.log('Anda salah memasukkan tanggal! (1 - 31)');
}