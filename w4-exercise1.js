/* Exercise 1 - Angka Prima */

/* Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false. */

function angkaPrima(angka) {
    // you can only write your code here!
    var angkaPembagi = [2, 3, 5, 7];
    var isPrima = true;

    for(var i = 0; i < angkaPembagi.length; i++){                
        if((angka !== angkaPembagi[i]) && (angka % angkaPembagi[i] === 0)){            
            isPrima = false; break;
        }    
    }
    return isPrima;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false