//fundementals part 2
const YearRetire = (bithYear , firstName) =>{
    const age = 2023-bithYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement}`;
}
function sayHello(FirstName){
    return FirstName;
}
const EvenOdd = function(number){
    return (number&1 ? "odd" : "even");
}

let numbers = [1,2,3,4,5];
function sumFrom(idx){
    if(idx == numbers.length)
        return 0;
    return numbers[idx] + sumFrom(idx+1);
}
console.log(sumFrom(4));
console.log(EvenOdd(6));

const calcAge = function(bithYear){
    const curYear = (new Date).getFullYear();
    return curYear - bithYear;
}
console.log(calcAge(2002));