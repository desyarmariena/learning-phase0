// Exercise 13 - Toko X

/* Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut */

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                    ];

// you can only write your code here!
    var profit = [{ product: 'Sepatu Stacattu',
                    shoppers: [],
                    leftOver: 10,
                    totalProfit: 0 },
                  { product: 'Baju Zoro',
                    shoppers: [],
                    leftOver: 2,
                    totalProfit: 0 },
                  { product: 'Sweater Uniklooh',
                    shoppers: [],
                    leftOver: 1,
                    totalProfit: 0 }
                ];
                
    if(shoppers.length === 0) {
        return [];
    }

    //loop pembeli
    for(var i = 0; i < shoppers.length; i++){
        //loop dengan array profit
        for(var j = 0; j < profit.length; j++){

            if(shoppers[i].product === profit[j].product && 
                profit[j].leftOver >= shoppers[i].amount){

                profit[j].shoppers.push(shoppers[i].name);
                profit[j].leftOver -= shoppers[i].amount; 
                
                //cari harga barang
                for(var k = 0; k < listBarang.length; k++){
                    if(listBarang[k][0] === shoppers[i].product){      
                        profit[j].totalProfit = profit[j].totalProfit + (listBarang[k][1] * shoppers[i].amount);
                    }
                }
            }

        }
    }
    return profit;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]