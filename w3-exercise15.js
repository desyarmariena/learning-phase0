/* 
Exercise 15 - Mengelompokkan Hewan
*/

/* Diberikan sebuah function groupAnimals(arr) yang menerima 
satu parameter berupa array yang berisi string. Function 
akan me-return array multidimensi dimana array tersebut 
berisikan kategori/kelompok array yang dikumpulkan sesuai 
dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). 
Untuk kasus ini, anggap saja semua text lowercase. */

function groupAnimals(animals) {
    // you can only write your code here!
    var result = [];
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for(var i = 0; i < alphabet.length; i++){
        var kelompokHewan = []
        for(var j = 0; j < animals.length; j++){
            if(animals[j][0] === alphabet[i]){
                kelompokHewan.push(animals[j]);
            }
        }
        if(kelompokHewan.length !== 0){
            result.push(kelompokHewan);
        }
    }
    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]