# 1. Newton Second Law

<!-- Buatlah sebuah algoritma / pseudocode untuk menghitung resultan gaya pada sebuah mobil yang memiliki massa benda 600 kg dan ketika didorong oleh tiga orang percepatannya adalah 2 m/s2! -->

<!-- Algoritma -->
1. Simpan 'massa benda' dengan nilai 600
2. Simpan 'percepatan benda' dengan nilai 2
3. Lakukan perhitungan dengan mengalikan 'massa benda' dengan 'percepatan benda'
4. Simpan hasil perhitungan sebelumnya sebagai 'resultan gaya'
5. Tampilkan 'resultan gaya'

<!-- Pseudo Code -->
```
SAVE 'massa benda' with 600
SAVE 'percepatan benda' with 2
COMPUTE 'massa benda' multiply by 'percepatan benda'
SAVE previous computation result as 'resultan gaya'
PRINT 'resultan gaya'
```


# 2. Tahun Kabisat

<!-- Dalam kalender Gregorian, tahun kabisat memiliki beberapa kriteria yaitu antara lain:

    Jika tahun habis di bagi 4 dan tidak habis di bagi 100, dan
    Jika tahun habis di bagi 4, habis di bagi 100 dan habis di bagi 400 -->

<!-- Algoritma -->
1. Simpan 'tahun' dengan nilai berapapun
2. Simpan 'jenis tahun' tanpa nilai berapapun. Akan diisi nanti
3. Jika 'tahun' habis dibagi 4 dan 'tahun' tidak habis dibagi 100, simpan 'TAHUN KABISAT' ke dalam 'jenis tahun'
4. Jika 'tahun' habis dibagi 4, 'tahun' habis dibagi 100 dan 'tahun habis dibagi 400, simpan 'TAHUN KABISAT' ke dalam 'jenis tahun'
5. Jika tidak keduanya, simpan 'BUKAN TAHUN KABISAT' ke dalam 'jenis tahun'
6. Tampilkan 'jenis tahun'

<!-- Pseudo Code -->
```
READ and SAVE 'tahun'
SAVE 'jenis tahun' without any value
IF 'tahun' mod 4 EQUALS 0 and 'tahun' mod 100 EQUALS > 0
    SAVE 'TAHUN KABISAT' to 'jenis tahun
ELSE IF 'tahun' mod 4 EQUALS 0 and 'tahun' mod 100 EQUALS 0 and 'tahun' mod 400 EQUALS 0
    SAVE 'TAHUN KABISAT' to 'jenis tahun
ELSE
    SAVE 'BUKAN TAHUN KABISAT' to 'jenis tahun'
PRINT 'jenis tahun'
```

# 3. Laundry Day

<!-- Foxie akan mencuci pakaiannya menggunakan mesin cuci. Pakaian yang akan dicuci oleh Foxie sebanyak 20 dan akan dimasukkan ke mesin cuci. Mesin cuci akan dinyalakan jika semua pakaian Foxie sudah masuk ke mesin cuci. -->

<!-- Algoritma -->
1. Simpan 'laundry' dengan 0 sebagai nilai awal
2. Cek jika nilai 'laundry' dibawah 20, lanjut ke tahap 3. Jika lebih dari atau sama dengan 20, lanjut ke tahap 5
3. Tambah nilai 'laundry' sebanyak 1
4. Ulangi tahap 2
5. Tampilkan kalimat 'Mesin cuci dinyalakan!'

<!-- Pseudo Code -->
```
STORE 'laundry' with 0

WHILE 'laundry' < 20
    ADD 'laundry' by 1

PRINT 'Mesin cuci dinyalakan!'
```

# 4. Periksa Kuku

<!-- Seorang guru akan memeriksa kuku siswa-siswinya yang sebanyak 40 orang dengan cara berkeliling kelas. Jika guru menemukan siswa/siswi yang memiliki kuku yang panjang maka guru akan menghukum siswa/siswi tersebut, jika tidak guru akan memuji siswa/siswi tersebut. -->

<!-- Algoritma -->
1. Simpan 'students' dengan 0 sebagai nilai awal
2. Cek jika nilai students dibawah 40, lanjut ke tahap 3. Jika lebih dari atau sama dengan 40, lanjut ke tahap ...
3. Jika 'kuku siswa' panjang, lanjut ke tahap 4. Jika 'kuku siswa' tidak panjang, lanjut ke tahap 5.
4. Guru akan menghukum siswa. Lanjut ke tahap 6.
5. Guru akan memuji siswa
6. Tambah nilai siswa sebanyak 1
7. Kembali ke tahap 2

<!-- Pseudo Code -->
```
STORE 'students' with 0

WHILE 'students' < 40
    IF 'kuku panjang'
        DO 'Hukum Siswa'
    ELSE
        DO 'Puji Siswa'
    ADD 'students' by 1
```