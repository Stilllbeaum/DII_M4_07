//for loop
n = 3;
fac_for = 1;
for (let i = 1; i <= n; i++) {
    fac_for *= (n - 1);
}
console.log(fac_for)

//wile loop
n = 6;
let fac_while = 1;
while (n > 0) {
    fac_while *= n;
    n--;
}
console.log(fac_while)

//fibonacci for
n = 10;
let f2 = 0;
let f1 = 1;
let fib_for = 1;
for (let i = 2; i < n; i++) {
    f1 = f2;
    f2 = fib_for;
    fib_for = f2 + f1;
}
console.log(fib_for)

//fibonacci wile
n = 10;
f2 = 0;
f1 = 1;
let fib_while = 1;
let i = 2
while (i < n) {
    f1 = f2;
    f2 = fib_while;
    fib_while = f2 + f1;
    i++;
}
console.log(fib_while)

//prime num
n = 57;
let isPrime = true;
for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime)
//CMU
let cmu = {
    'name': 'chaing mai university',
    'lat': 18.8046735,
    'long': 98.9528446,
}
let maya = {
    'name': 'maya',
    'lat': 18.8047037,
    'long': 98.9440898,
}
let cenfest = {
    'name': 'central chaing mai',
    'lat': 18.8048018,
    'long': 98.917825,
}
console.log(cmu)

//employee
let employee=[5]
employee[0]={
    'นาย ก':'นามสมมติ',
    'อายุ':'68 ปี',
    'เงินเดือน':'75900',
}
employee[1]={
    'นาย ข':'นามสมมติ',
    'อายุ':'35 ปี',
    'เงินเดือน':'55400',
}
employee[2]={
    'นาย ค':'นามสมมติ',
    'อายุ':'51 ปี',
    'เงินเดือน':'81000',
}
employee[3]={
    'นาย ง':'นามสมมติ',
    'อายุ':'76 ปี',
    'เงินเดือน':'5111000',
}
employee[4]={
    'นาย ข':'นามสมมติ',
    'อายุ':'22 ปี',
    'เงินเดือน':'20500',
}
console.log(employee)

salarySum=0;
for(let i=0; i<employee.length; i++){
    salarySum+=employee[i].เงินเดือน
}
console.log(salarySum)

ageAvg=0;
for (let i=0; i<employee.length; i++){
    ageAvg+=employee[i].อายุ
}
ageAvg=ageAvg/employee.length;
console.log(ageAvg);

//mathod
function findSum(array, key){
    sum=0;
    for(let i=0; i<employee.length; i++){
        sum+=array[i][key];
    }
    return sum;
}
function findAvg(array, key){
    sum=findSum(array, key);;
    avg=sum/array.length;
    return avg;
}
salarySum=findSum(employee, 'เงินเดือน');
ageAvg=findAvg(employee, 'อายุ')

console.log(salarySum);
console.log(ageAvg);