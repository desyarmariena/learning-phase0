/**
Array Injector
--------------
Implementasikan function `arrayInjector` untuk menyisipkan `secondData` ke `firstData`.
Diberikan juga parameter tambahan yaitu `index` yang akan digunakan untuk menandakan bahwa
`secondData` akan dimasukkan mulai ke `index`.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

Contoh:
  - input: [8, 'foobar', 'foobaz'], 1, ['bar', 'baz']
    output: [8, 'bar', 'baz', 'foobar', 'foobaz']
*/

//ALGORITMA
/* 
1. Simpan variable index dengan nilai index dari parameter
2. Simpan variable newArr dengan array kosong sebagai nilai awal
3. Lakukan pengulangan sebanyak panjang dari firstData disimpan dalam nilai i
4. Cek nilai i, apakah sama dengan index. Jika sama, lakukan pengulangan sebanyak panjang dari secondData untuk memasukkan array ke dua kedalam newArr
5. Setelah semua nilai dalam secondData dimasukkan ke dalam newArr, lanjutkan pengulangan memasukkan nilai selanjutnya dari firstData ke newArr
6. pengulangan selesai, kembalikan nilai newArr
*/

// PSEUDO CODE FUNCTION ARRAYINJECTOR
/* 
STORE "index" with index value 
STORE "newArr" with empty array

FOR i = 0 to firstData length array
  IF i = "index" then
    FOR j = 0 to secondData length array
      STORE secondData[j] to newArr
  
  STORE firstData[i] to newArr

RETURN newArr
*/

function arrayInjector (firstData, index, secondData) {
  // Code disini
  var index = index;
  var newArr = [];

  for(var i = 0; i < firstData.length; i++){
    if(i === index){
      for(var j = 0; j < secondData.length; j++){
        newArr.push(secondData[j]);
      }
    }
    newArr.push(firstData[i]);
  }
  return newArr;
}

console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));
// [1, 2, 3, 4, 5, 6]

console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
// [10, 20, 30, 40, 50, 60, 70]

console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
// ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']
