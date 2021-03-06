/* 
Soal 7 - Perulangan Play with Asterisks
*/

// Soal 1 - Menyusun Barisan Bintang
var rows1 = 5;
var result2 = '', result3 = '';
while(rows1>0){
  console.log('*');
  rows1--;
}
console.log('');

// Soal 2 - Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;
for(var i=0; i < rows2; i++){
  for(var j=0; j < rows2; j++){
    result2 += '*';
  }
  result2 += '\n';
}
console.log(result2);

// Soal 3 - Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
for(var i=0; i < rows3; i++){
  for(var j=0; j <= i; j++){
    result3 += '*';
  }
  result3 +='\n';
}
console.log(result3);