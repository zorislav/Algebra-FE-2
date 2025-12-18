// 1. call

var obj = { num: 2 };

function add(a) {
  return this.num + a;
}

var b = add(3);
console.log(b);

var c = add.call(obj, 3);
console.log(c);

// 2. apply

// 3. bind

function add2(a, b) {
  return this.num + a + b;
}

var d = add2.bind(obj, 3, 5);
console.log(d());
