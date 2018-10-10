// Exercise 8 - Mengurutkan Abjad

/* Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut. */

function urutkanAbjad(str) {
    // you can only write your code here!
    var arrStr = str.split('');
    
    for(var i = 0; i < arrStr.length; i++){
        for(var j = 0; j < arrStr.length; j++){
            if ( i !== j && arrStr[i] < arrStr[j] ){
                var temp = arrStr[j];
                arrStr[j] = arrStr[i];
                arrStr[i] = temp;
            }
        }
    }

    var newStr = arrStr.join('');
    return newStr;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'