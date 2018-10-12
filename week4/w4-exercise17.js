// Exercise 17 - Total Digit

// Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka);

    if(strAngka.length === 1){
        return Number(strAngka);
    }

    return Number(strAngka[0]) + totalDigitRekursif(strAngka.substring(1,strAngka.length));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5