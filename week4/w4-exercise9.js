// Exercise 9 - Tukar Ukuran (Tukar Besar Kecil)

/* Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan. */

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var hurufKecil = 'abcdefghijklmnopqrstuvwxyz';
    var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var newStr = '';

    for(var i = 0; i < kalimat.length; i++){
        //loop dengan huruf kecil
        var isSimbol = true;
        for(var j = 0; j < hurufKecil.length; j++){
            if(kalimat[i] === hurufKecil[j]){
                newStr += hurufBesar[j];
                isSimbol = false;
            }
        }
        //loop dengan huruf besar
        for(var k = 0; k < hurufBesar.length; k++){
            if(kalimat[i] === hurufBesar[k]){
                newStr += hurufKecil[k];
                isSimbol = false;
            }
        }
        //cek jika bukan huruf besar atau huruf kecil
        if(isSimbol){
            newStr += kalimat[i];
        }
    }
    return newStr;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"