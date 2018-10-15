/*
Instruksi
=========
Buatlah sebuah function bernama capitalH yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.

Buatlah sebuah symbol pola berikut:
contoh 1 ( capitalH(3) ):
| |
|-|
| |

contoh 2 ( capitalH(5) ):
|   |
|   |
|---|
|   |
|   |
 
contoh 3 ( capitalH(6) ):
|    |
|    |
|----|
|----|
|    |
|    |



tinggi huruf dan lebar sesuai dengan nilai parameter height.
garis vertical mengunakan symbol pipeline(|)
garis horizontal mengunakan symbol minus(-)
minimal nilai ganjil adalah 3, untuk nilai genap minimalnya adalah 6

*/

function capitalH(height){
    for(var baris = 0; baris < height; baris ++){
        var rocket = '';
        for(var kolom = 0; kolom < height; kolom++){
            if(kolom === 0 || kolom === height-1){ //cek kolom pertama atau terakhir
                rocket += '|';
            } else if(height % 2 === 1){ //cek jika height ganjil
                if(baris === Math.floor(height/2)){ //cek baris tengah
                rocket += '-';
                } else {
                rocket += ' ';
                }
            } else if(height % 2 === 0){ //cek jika height genap
                if(baris === (height/2)-1 || baris === (height/2)){ //cek baris tengah
                    rocket += '-';
                } else {
                rocket += ' ';
                }
            }
        }
        console.log(rocket);
    }
// console.log('=================');
}

//Test case
capitalH(3);
capitalH(5);
capitalH(6);
capitalH(9);
capitalH(11);