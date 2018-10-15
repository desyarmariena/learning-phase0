/**
  **************
  HALF TRIANGLE
  **************

  Diberikan sebuah function halfTriangle yang memiliki dua paramter yaitu:
   - height bertipe number
   - direction bertipe string

  Function ini akan mengembalikan array multidimensi height * height dimana array
  tersebut berisi angka berbentuk segitiga dan setengahnya lagi spasi berbentuk segitiga (jika dilihat kasat mata)
  sesuai dengan parameter direction.

  Untuk pola bisa dilihat pada test case

  NOTE:
  - HEIGHT MINIMUM ADALAH 4, JIKA KURANG DARI 4 MAKA RETURN `Minimum height is 4`

**/
function halfTriangle(height, direction) {
  // your code here
  /*va r resultArr = [];
  
  if(height < 4){
    return 'Minimum height is 4';
  } else if(direction === 'down' && height >= 4){
    
    for(var i = 0; i < height; i++){
      //push angka
      var barisArr = [];
      for(var j = 0; j < height; j++){
        barisArr[j] = '' + (j + 1);
        //push baris
        for(var k = i+1; k < height; k++){
          barisArr[k] = ' ';
        }
      }            
      resultArr.push(barisArr);
      // console.log(barisArr); 
    }
  } else if(direction === 'up' && height >= 4){
    //print per baris
    for(var i = 0; i < height; i++){
      var barisArr = [];
      //print angka atau spasi
      for(var j = 0; j < height; j++){
        if( i >= 1 && i > j){
          barisArr[j] = ' ';
        } else {
          barisArr[j] = '' + (j + 1);        
        }        
      }
      resultArr.push(barisArr);
    }
      
  }
  return resultArr;   */

  var result = [];

  if (height < 4){
    return 'Minimum height is 4';
  }

  for(var i = 1; i <= height; i++){
    var arrayKecil = [];

    for(var j = 1; j <= height; j++){

      if(direction === 'up'){
        if(j < i){
          arrayKecil.push(' ');
        } else {
          arrayKecil.push(String(j));
        }
      } else {
        if(j > i){
          arrayKecil.push(' ');
        } else {    
          arrayKecil.push(String(j));
        }
      }
    }
    result.push(arrayKecil);
  }

  return result;
}

console.log(halfTriangle(5, 'up'));
// [ [ '1', '2', '3', '4', '5' ],  i = 0
//   [ ' ', '2', '3', '4', '5' ],  i = 1; j = 1
//   [ ' ', ' ', '3', '4', '5' ],  i = 2; j = 2
//   [ ' ', ' ', ' ', '4', '5' ],  i = 3; j = 3
//   [ ' ', ' ', ' ', ' ', '5' ] ] i = 4; j = 4
 
console.log(halfTriangle(7, 'down'));
// // [ [ '1', ' ', ' ', ' ', ' ', ' ', ' ' ], i = 0; j = 1
// //   [ '1', '2', ' ', ' ', ' ', ' ', ' ' ], i = 1; j = 2
// //   [ '1', '2', '3', ' ', ' ', ' ', ' ' ], i = 2; j = 3
// //   [ '1', '2', '3', '4', ' ', ' ', ' ' ], i = 3; j = 4
// //   [ '1', '2', '3', '4', '5', ' ', ' ' ], i = 4; j = 5
// //   [ '1', '2', '3', '4', '5', '6', ' ' ], i = 5; j = 6
// //   [ '1', '2', '3', '4', '5', '6', '7' ] ]

console.log(halfTriangle(3, 'up')); // Minimum height is 4

console.log(halfTriangle(4, 'up'));
// // [ [ '1', '2', '3', '4' ],
// //   [ ' ', '2', '3', '4' ],
// //   [ ' ', ' ', '3', '4' ],
// //   [ ' ', ' ', ' ', '4' ] ]

console.log(halfTriangle(4, 'down'));
// // [ [ '1', ' ', ' ', ' ' ],
// //   [ '1', '2', ' ', ' ' ],
// //   [ '1', '2', '3', ' ' ],
// //   [ '1', '2', '3', '4' ] ]
