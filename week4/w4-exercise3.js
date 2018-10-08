// Exercise 3 - Mencari Median

/* Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. Function akan me-return median dari deret angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut. Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah. */

function cariMedian(arr) {
    // you can only write your code here!
    if(arr.length % 2 !== 0){
        return arr[Math.floor(arr.length/2)];
    } else {
        var median = 0;
        var nilaiTengah = arr.length / 2;
        
        median = (arr[nilaiTengah] + arr[nilaiTengah-1]) / 2;
        
        return median;
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5