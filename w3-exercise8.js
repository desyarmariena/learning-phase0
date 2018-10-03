/* 
Exercise 8 - Pasangan Angka Terbesar
*/

/* Diberikan sebuah function pasanganTerbesar(angka) 
yang menerima 1 parameter berupa angka. 
Functiona akan menentukan pasangan dua digit 
angka mana yang paling besar dan 
me-return angka tersebut. 
Contoh, jika angka adalah 183928, maka 
function akan me-return 92, pasangan 
dua digit angka yang paling besar 
diantara yang lainnya. */

function pasanganTerbesar(num) {
    num += ''; // convert ke string
    var nilaiTerbesar = 0;
    // you can only write your code here!
    for(var i = 0; i< num.length-1; i++){
        var tempNum = num[i]+num[i+1];
        if(tempNum > nilaiTerbesar){
            nilaiTerbesar = Number(tempNum);
        }
    }
    return nilaiTerbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99