function fixedFloat (n, l = 2) {
  if (typeof n !== 'number' || n !== n) {
    return 'NaN'
  }
  if (l > 6) {
    throw new Error('超过最大限定范围')
  }
  var mul = Math.pow(10, l)
  n = Math.round(n * mul) / mul
  return n.toFixed(l)
}

console.log(fixedFloat(123.456))  // 123.46
console.log(fixedFloat(-3.005))  // -3.00
console.log(fixedFloat(3.005))  // 3.01
console.log(fixedFloat(3.015))  // 3.02
console.log(fixedFloat(3))  // 3.00
console.log(fixedFloat(0.1))  // 0.10
console.log(fixedFloat(0.01))  // 0.01
console.log(fixedFloat(0))  // 0.00
console.log(fixedFloat())  // NaN
console.log(fixedFloat(null))  // NaN
console.log(fixedFloat({}))  // NaN
console.log(fixedFloat('a'))  // NaN
