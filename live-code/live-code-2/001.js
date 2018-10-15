/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)
*/

function numberLetters (str) {
  // Code disini
  var newStr = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === '1'){
      newStr += 'i';
    } else if(str[i] === '4'){
      newStr += 'a';
    } else if(str[i] === '3'){
      newStr += 'e';
    } else if(str[i] === '7'){
      newStr += 'u';
    } else if(str[i] === '0'){
      newStr += 'o';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //
