module.exports = function reverseString(n) {
  if (n < 0) {
  let reversed = '';
  const m = String(n * -1);  
  for (let i = m.length - 1; i >= 0; i--) {
    reversed = reversed + m[i];     
  }
  console.log(reversed);
  return reversed;
} else {
  let reversed = '';
  const m = String(n);  
  for (let i = m.length - 1; i >= 0; i--) {
    reversed = reversed + m[i];     
  }
  console.log(reversed);
  return reversed;
}
}

