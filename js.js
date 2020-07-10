// console.log("hello world");

function numberOrgansOfHheFibonacciChain(a, b, lastOrgan) {
  let counter = 2;
  if (a == 0 && b == 1 && lastOrgan == 1) {
    counter = 3;
  } else {
    let result = b;
    while (result < lastOrgan) {
      // console.log(result);
      result = a + b;
      a = b;
      b = result;
      counter++;
    }
  }

document.getElementById('result').innerHTML=counter
  console.log('number the organs in the chain is :' + counter);
 
}

numberOrgansOfHheFibonacciChain(1, 1, 13);
