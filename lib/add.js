function add(a,b) {
  // 实现该函数
  var tmpA = a.toString().split('');
  var tmpB = b.toString().split('');
  var sum = '',num = 0;
  while((tmpA.length > 0 && tmpB.length > 0) || num != 0){
  	let a = tmpA.pop() - 0 || 0;
  	let b = tmpB.pop() - 0 || 0;
  	let tmpSum = a + b + num - 0;
  	sum = tmpSum%10 + sum;
  	num = parseInt(tmpSum/10);
  }
  tmpA = tmpA.join('');
  tmpB = tmpB.join('');
  
  return tmpA + tmpB + sum;
}

module.exports = add