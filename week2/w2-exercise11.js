/* 
Soal
Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
Function akan me-return kata yang dibalik. 
Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ". 
*/

function balikKata(kata) {
    // you can only write your code here!
    var balikKataResult = '';
  
    for(var i = kata.length-1; i >= 0; i--){
      balikKataResult += kata[i];
    }
    return balikKataResult;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS