/*
==================================
Array Mastery: Second Largest
==================================
Nama:________
[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

function secondLargest(numbers) {
  // Code here
  /* for(var i = 0; i < numbers.length; i++){
    for(var j = 0; j < numbers.length-1; j++){
        if(numbers[j] < numbers[j+1]){
            temp = numbers[j+1];
            numbers[j+1] = numbers[j];
            numbers[j] = temp;
        }
    }
  }

  return numbers[1]; */
  
  var max = numbers[0];
  
  //cari nilai terbesar
  for(var i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
      max = numbers[i];
    }
  }
  
  //cari nilai terbesar berikutnya
  var secondMax = -1;
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] < max && numbers[i] > secondMax){
      secondMax = numbers[i];
    }
  }

  return secondMax;
}

// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313
