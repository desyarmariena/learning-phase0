/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [   0  1  2  3
          [ 1, 2, 3, 4 ], i = 0
          [ 8, 7, 6, 5 ], i = 1
          [ 9, 10, 11, 12 ], i = 2
          [ 16, 15, 14, 13 ] i = 3
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]


NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

**/


function squareNumber(num) {
  // your code here
  var newArr = [];

  if(num < 3){
    return 'Minimal input adalah 3';
  }

  var value = 1;
  // loop array pertama
  for(var i = 0; i < num; i++){
    var baris = [];
    var num2 = (value + num) - 1; //nilai untuk baris ganjil

    //loop array kedua
    for(var j = 0; j < num; j++){
      //jika baris ganjil, masukkan nilai num2
      if(i % 2 === 1){    

        if(num2 % 4 === 0){
          baris[j] = '#';
        } else if (num2 % 2 === 0){
          baris[j] = 'o';
        } else {
          baris[j] = 'x';
        }

        num2--;
      } else {

        if(value % 4 === 0){
          baris[j] = '#';
        } else if (value % 2 === 0){
          baris[j] = 'o';
        } else {
          baris[j] = 'x';
        }
      }
      value++;
    }
    newArr.push(baris);
  }
  return newArr;
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
