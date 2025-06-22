let b1 = '';

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j < i; j++) {
    b1 += '*';
    //s+='\n';
  }
  b1 += '\n';
}

console.log(b1);

let b2 = '';

for (let i = 10; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    b2 += '*';
    //s+='\n';
  }
  b2 += '\n';
}

console.log(b2);
