// Exercise 7 - Digit Perkalian Minimum

/* Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2. */

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arrPerkalian = [];
    var digitMinimum = 0;
    for(var i = 1; i <= angka; i++){
        var perkalian = []
        for(var j = angka; j >= i; j--){
            if( i * j === angka){
                perkalian.push(i);
                perkalian.push(j);
                arrPerkalian.push(perkalian);

                //hitung digit perkalian
                if( digitMinimum == 0 || (String(i).length + String(j).length) < digitMinimum){
                    digitMinimum = String(i).length + String(j).length;
                }
            }            
        }
    }

    
    return digitMinimum;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2