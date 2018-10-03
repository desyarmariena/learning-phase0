/* 
Exercise 6 - Number Palindrome
*/

function angkaPalindrome(num) {
    // you can only write your code here!
    // jika num adalah satuan
    var isPalindrome = false;
    if(num > 0 && num < 9){
        return num+1;
    } else {
        while(isPalindrome === false){
            var strNum = String(++num);
            // console.log('num', num, 'strNum', num);

            for(var i = 0; i < strNum.length; i++){
                var j = strNum.length-1;
                if(i !== j && i !== Math.floor(strNum.length/2)){
                    //console.log('i:',i, 'j:',j);
                    if(strNum[i]===strNum[j]){
                        // console.log(`strNum[${i}]: ${strNum[i]} strNum[${j}]: ${strNum[j]}`);
                        isPalindrome = true;
                        // console.log('palindrome',isPalindrome);
                    }
                    j--;
                }
            }
        }
        return strNum;
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001