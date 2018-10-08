/* 
Exercise 13 - Target Terdekat
*/

/* Diberikan sebuah function targetTerdekat(arr) 
yang menerima satu parameter berupa array yang 
terdiri dari karakter. Function akan me-return 
jarak spasi antar karakter 'o' dengan karakter 'x' 
yang terdekat. */

function targetTerdekat(arr) {
    // you can only write your code here!
    var indexO;
    var indexX = [];

    // mencari index o dan x
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'o'){
            indexO = i;
        } else if(arr[i] === 'x'){
            indexX.push(i);
        }
    }
    // console.log(indexO, indexX);
    if(indexX.length === 0){
        return 0; // tidak ada x
    } else {
        if(indexX[0] > indexO){
            var jarakSpasi = indexX[0] - indexO;
        } else {
            var jarakSpasi = indexO - indexX[0];
        }
        var jarakTerkecil = 0;
        // console.log('Jarak spasi awal', jarakSpasi);
        for(var i = 1; i < indexX.length; i++){
            if(indexO < indexX[i]){
                if((indexX[i] - indexO) < jarakSpasi){
                    jarakTerkecil = indexX[i] - indexO;
                } else {
                    jarakTerkecil = jarakSpasi;
                }
            } else {
                if((indexO - indexX[i]) < jarakSpasi)
                jarakSpasi = indexO - indexX[i];
            }
        }
        return jarakSpasi;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2