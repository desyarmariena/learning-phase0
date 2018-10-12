// Exercise 18 - Kali Terus

// Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka);
    
    if(strAngka.length === 1){
        return angka;
    }
    
    var perkalian = 1;
    for(var i = 0; i < strAngka.length; i++){
        perkalian *= strAngka[i];        
    }
    return kaliTerusRekursif(perkalian);

    
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6