var bills = [100, 40, 250];
var tips = [];
var total = [];
function tipCalculator(bills) {
    
    for (i = 0 ; i < bills.length; i++) {
        if (bills[i] < 50) {
            tips.push(bills[i] * 0.2);
        } else if (bills[i] >= 50 && bills[i] < 200) {
            tips.push(bills[i] * 0.15);
        } else {
            tips.push(bills[i] * 0.1);
        } 
        
    }
    return tips;
}

tips = tipCalculator(bills);

console.log(tips);


for (i = 0 ; i < bills.length; i++) {
        total.push(bills[i] + tips[i]);
    }

console.log(total);