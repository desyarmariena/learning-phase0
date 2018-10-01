/* 
Exercise 12 - Tentukan Deret Geometri
*/

/* Diberikan sebuah function tentukanDeretGeometri(arr) 
yang menerima satu parameter berupa array yang terdiri 
dari angka. Function tersebut akan mengembalikan true 
jika array dari parameter tersebut merupakan deret 
geometri. */

function tentukanDeretGeometri(arr) {
    var selisih = arr[1] / arr[0];
    var geometri = true;

    for(var i = 1; i < arr.length; i++){
        if(arr[i] / arr[i-1] !== selisih){
            geometri = false;
        }
    }
    return geometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false