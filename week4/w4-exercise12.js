// Exercise 12 - Shopping Time

/* Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut. */

function shoppingTime(memberId, money) {
    // you can only write your code here!

    if(memberId === '' || memberId === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup';
    }

    var memberInfo = {'memberId': memberId,
                      'money': money,
                      'listPurchased': [],
                      'changeMoney': 0
                    };

    //list item
    // Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H&N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000
    var sisaUang = money;
    if(sisaUang > 1500000){
        memberInfo.listPurchased.push('Sepatu Stacattu');
        sisaUang -= 1500000;
    }
    if (sisaUang > 500000){
        memberInfo.listPurchased.push('Baju Zoro');
        sisaUang -= 500000;
    }
    if (sisaUang > 250000){
        memberInfo.listPurchased.push('Baju H&N');
        sisaUang -= 250000;
    }
    if (sisaUang > 175000){
        memberInfo.listPurchased.push('Sweater Uniklooh');
        sisaUang -= 175000;
    }
    if (sisaUang >= 50000){
        memberInfo.listPurchased.push('Casing Handphone');
        sisaUang -= 50000;
    }    
    memberInfo.changeMoney = sisaUang;

    return memberInfo;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja