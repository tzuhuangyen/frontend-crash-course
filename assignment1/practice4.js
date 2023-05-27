// Practices 4 - loop (for and while) for 和 while 都要各實作一次，每題各兩個答案
// 1.Show 1 to 10000
for (let aa = 1; aa <= 10000; aa++) {
    console.log(aa);
}
// while loop
let bb = 1;

while (bb <= 10000) {
    console.log(bb);
    bb++;
}
// 2.Show 1 to 100 even numbers
// for loop
for (let fromNum = 1; fromNum <= 100; fromNum++) {
    if (fromNum % 2 == 0) {
        console.log(fromNum)
    }
};

//while loop
let fromNum2 = 1;
while (fromNum2 <= 100) {
    if (fromNum2 % 2 == 0) {
        console.log(fromNum2)
    }
    fromNum2++
};
// // 3.Show 1 to 100 odd numbers
let oddNum = 2;
while (oddNum <= 100) {
    if (oddNum % 2 !== 0) {
        console.log(oddNum)
    }
    oddNum++
};

let oddNum2 = 2;
while (oddNum2 <= 100) {
    if (oddNum2 % 2 !== 0) {
        console.log(oddNum2)
    }
    oddNum2++
};
// 4.Show 1 to 100 prime numbers (質數 只能被1和自身整除且大於1的自然數)
// for loop
function isPrime(n) {
    if(n < 2) {
      return false;
    }
    for(let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true
  };
  

  // check for every number from 1 to num
  let number = 100;
  for (let p = 1; p <= number; p++) {
    // check if current number is prime
    if (isPrime(p)) {
      console.log(p);
    }
  };

  //while loop
let p2 = 1;
let p2num = 100;
while(p2 < p2num) {
  if (isPrime(p2)) {
    console.log(p2)
  }
  p2++;
};


// 5.Declare a variable called size and show the height of size triangle
// for loop
let triStar = "";
for(let  m = 1; m <= 5; m++) {
    triStar += "*";
  console.log(triStar)
}
//while loop
let triStar2 = "";
let ee = 1;
while(ee <= 5) {
    triStar2 += "*";
  console.log(triStar2);
  ee++
};
// 6.Show Multiplication Table (from 1*1 to 9*9)
for(let ii = 1; ii <= 9; ii++) {
    for(let jj = 1; jj<= 9; jj++) {
      console.log(`${ii} * ${jj} = ${ii*jj}`)
    }
  }
  
// while loop
  let xx = 1;
  while(xx <= 9) {
    let yy = 1;
    console.log(`${xx} * ${yy} = ${xx*yy}`);
    while(yy <= 9) {
      yy++;
      console.log(`${xx} * ${yy} = ${xx*yy}`)
    }
    xx++;
  }