/* 
Exercise 10 - Perkalian Unik
*/

/* Diberikan sebuah function perkalianUnik(arr) 
yang menerima satu parameter berupa array yang 
berisikan angka. Function akan me-return array 
baru yang mengandung angka yang setiap nilainya 
merupakan hasil kali angka lain yang bukan 
angka itu sendiri. */

function perkalianUnik(arr) {
    
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        var tempKali = 1;
        for(var j = 0; j < arr.length; j++){
            if(i !== j){
                tempKali *= arr[j];
            }
        }
        newArr.push(tempKali);
    }
    return newArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]