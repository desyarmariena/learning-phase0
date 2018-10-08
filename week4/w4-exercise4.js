// Exercise 4 - Mencari Modus

/* Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1 */

function cariModus(arr) {
    // you can only write your code here!
    var banyakAngkaMuncul = [];
    
    //hitung jumlah perulangan kata
    for(var i = 0; i < arr.length; i++){
        var temp = 0;
        for(var j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                temp++;
            }
        }
        banyakAngkaMuncul.push(temp);
    }

    //cari modus
    //cek apakah jumlah angka muncul dalam array sama / tidak ada modus
    var hasModus = false;
    for(var i = 0; i < banyakAngkaMuncul.length-1; i++){
        if(banyakAngkaMuncul[i] !== banyakAngkaMuncul[i+1]){
            hasModus = true; break;
        }
    }
    if(hasModus){
        var indeks = 0;
        var frekuensiTerbanyak = banyakAngkaMuncul[0];
        //cari frekuensi terbanyak muncul
        for(var i = 1; i < banyakAngkaMuncul.length-1; i++){
            if(banyakAngkaMuncul[i] > banyakAngkaMuncul[i+1] && 
                frekuensiTerbanyak !== banyakAngkaMuncul[i]){
                indeks = i;
                frekuensiTerbanyak = banyakAngkaMuncul[i];
            }
        }        
        return arr[indeks];
    } else {
        return -1;
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1