/* 
Soal 7 - Perulangan Play with Asterisks
*/

// Soal 1 - Menyusun Barisan Bintang
var rows1 = prompt('Input sebuah angka');
while(rows1>0){
  console.log('*');
  rows1--;
}

// Soal 2 - Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = prompt('Input sebuah angka');
for(var i=0; i < rows2; i++){
  for(var j=0; j < rows2; j++){
    document.write('*');
  }
  document.write('<br>');
}

// Soal 3 - Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = prompt('Input sebuah angka');
for(var i=0; i < rows3; i++){
  for(var j=0; j <= i; j++){
    document.write('*');
  }
  document.write('<br>');
}