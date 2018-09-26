/* 
Soal
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
Function akan me-return true jika jumlah karakter x sama 
dengan jumlah karakter o, dan false jika tidak. 
*/

function xo(str) {
    // you can only write your code here!
    var xTotal = 0, yTotal = 0, xyTotal = false;
  
    for(var i = str.length; i > 0; i--){
      if(str[i-1] === 'x'){
        xTotal++;
      } else {
        yTotal++;
      }    
    }
    if(xTotal === yTotal){
      xyTotal = true;
    }
    //console.log(`${str} => X Total : ${xTotal}, Y Total : ${yTotal}`);
    return xyTotal;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true