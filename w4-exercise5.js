// Exercise 5 - Ubah Huruf

/* Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. */

function ubahHuruf(kata) {
    // you can only write your code here!
    var alfabet = 'abcdefghijklmnopqrstuvwxyz';
    var newStr = '';

    for(var i = 0; i < kata.length; i++){
        //loop alfabet
        for(var j = 0; j < alfabet.length; j++){
            if(kata[i] === alfabet[j]){
                newStr += alfabet[j+1];
            }
        }
    }
    return newStr;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu