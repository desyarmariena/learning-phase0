// Exercise 11 - Change Me

/* Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year' */

function changeMe(arr) {
    // you can only write your code here!
    var arrPerson = [];
    for(var i = 0; i < arr.length; i++){
        var person = {};
        
        person.firstName = arr[i][0];
        person.lastName = arr[i][1];
        person.gender = arr[i][2];
        if(arr[i][3] === undefined || arr[i][3] > 2018){
            person.birthYear = 'Invalid Birth Year';
        } else {
            person.birthYear = 2018 - arr[i][3];
        }
        arrPerson.push(person);
    }
    console.log(arrPerson);
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""