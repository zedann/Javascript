const friends = ['zedan',3,'hussein'];
const years = new Array(1,2,3,4);
// let x = [1,2];
// console.log(x);
// x = [3,4];
// console.log(x);
function calcTip(billValue){
    return (billValue >= 50 && billValue <= 300 ? billValue * 15/100 : billValue * 20/100);
}
const bills = [125,555,44];
const tips =[];
for(let i = 0 ; i < bills.length;i++)
    tips.push(calcTip(bills[i]));
const totals = [];
for(let i = 0 ; i < bills.length ; i++)
    totals.push(bills[i]+tips[i]);
console.log(totals);

//