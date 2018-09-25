/* 
Soal 5 - Berlatih perulangan di JavaScript
*/

// Soal 1 - Melakukan Looping Menggunakan While

var angka = 1;

console.log('LOOPING PERTAMA');
while(angka<=20){
  if(angka%2 === 0){  
    console.log(`${angka} - I love coding`);    
  }
  angka++;
}

console.log('\nLOOPING KEDUA');
while(angka>=1){
  if(angka%2 === 0){  
    console.log(`${angka} - I love coding`);    
  }
  angka--;
}

// Soal 2 - Melakukan Looping Menggunakan For

console.log(`\nLOOPING PERTAMA`);

for(var i = 1; i <= 20; i++){
  console.log(`${i} - I love coding`);
}

console.log(`\nLOOPING KEDUA`);

for(var i = 20; i >= 1; i--){
  console.log(`${i} - I love coding`);
}

// Soal 3 - Angka Ganjil dan Genap
for (var i = 1; i <= 100; i++ ){
    if( i%2=== 0){
        console.log(`${i} - GENAP`);
    } else {
        console.log(`${i} - GANJIL`);
    }
}

for (var i = 1; i <= 100; i+=2 ){
    if( i%3=== 0){
        console.log(`${i} KELIPATAN 3`);
    } else {
        console.log(`${i}`);
    }
}

for (var i = 1; i <= 100; i+=5 ){
    if( i%6=== 0){
        console.log(`${i} KELIPATAN 6`);
    } else {
        console.log(`${i}`);
    }
}

for (var i = 1; i <= 100; i+=9 ){
if( i%10=== 0){
    console.log(`${i} KELIPATAN 10`);
} else {
    console.log(`${i}`);
}
}

