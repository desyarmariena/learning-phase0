/* 
Tantangan Array 1 - Mengakses Nilai Dalam Array

Buatlah sebuah fungsi dengan nama balikString. 
Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya. 
*/

function balikString(str){
    var reverseString = '';

    for(var i = str.length-1; i >= 0; i--){
        reverseString += str[i];
    }
    return reverseString;
}

console.log(balikString('Hello World!'));