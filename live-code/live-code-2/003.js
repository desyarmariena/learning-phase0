/*
================
Fruit & Vegetables Checker
================
[INSTRUCTIONS]
FVChecker adalah sebuah function yang menerima satu parameter berupa array of string.
function tersebut akan menghitung jumlah buah (F) dan sayur (V)
dan function akan mereturn jumlah masing2 buah dan sayur serta harga jual keseluruhan.
Adapun ketentuan harganya:
Fruits (F) = 1000
Vegetables (V) = 500
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
FVChecker(['F','V','F'])
output: jumlah Buah: 2, jumlah Sayur: 1. totalnya menjadi Rp. 2500
*/

function FVChecker(array) {
  // only write code here
  var fruits = 0;
  var vegs = 0;
  var harga = 0;
  var str = '';
  for(var i = 0; i < array.length; i++){
    if(array[i] === 'F') {
      fruits++;
    } else if(array[i] === 'V'){
      vegs++;
    }
  }
  harga = (fruits * 1000) + (vegs * 500);
  str = 'jumlah Buah: ' + fruits + ', jumlah Sayur: ' + vegs +'. totalnya menjadi Rp. ' + harga;
  return str;
}

console.log(FVChecker(['F','V','F']));
// jumlah Buah: 2, jumlah Sayur: 1. totalnya menjadi Rp. 2500
console.log(FVChecker(['V','V','F','F','V']));
// jumlah Buah: 2, jumlah Sayur: 3. totalnya menjadi Rp. 3500
console.log(FVChecker(['V','F','F','F','F']));
// jumlah Buah: 4, jumlah Sayur: 1. totalnya menjadi Rp. 4500
console.log(FVChecker(['F','F']));
// jumlah Buah: 2, jumlah Sayur: 0. totalnya menjadi Rp. 2000
console.log(FVChecker(['V','V','V','V']));
// jumlah Buah: 0, jumlah Sayur: 4. totalnya menjadi Rp. 2000
