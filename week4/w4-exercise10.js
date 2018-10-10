// Exercise 10 - Check AB

/* Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. */

function checkAB(num) {
    // you can only write your code here!
    var foundAB = false;
    for(var i = 0; i < num.length-3; i++){
        //karakter i dan i+4 memiliki jarak 3 karakter
        if(num[i] === 'a' && num[i+4] === 'b'){
            foundAB = true;
        }
        if(num[i] === 'b' && num[i+4] === 'a'){
            foundAB = true;
        }
    }
    return foundAB;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false