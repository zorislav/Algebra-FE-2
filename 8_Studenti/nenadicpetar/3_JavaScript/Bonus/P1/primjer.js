var a = "5" - 3;
b = "5" + 3;
c = "5" - "4";
d = "5" + +"5";
e = "foo" + +"bar";
f = "5" + -"2";
g = "5" + -+-(-+-(-+(+-+-+-+-(-(-"2")))));
x = 3;
h = "5" + x - x;
i = "5" - x + x;

console.log(a); // ispis: 2
console.log(b); // ispis: 53
console.log(c); // ispis: 1
console.log(d); // ispis: 55
console.log(e); // ispis: fooNaN
console.log(f); // ispis: 5 - 2
console.log(g); // ispis: 5 - 2
console.log(x); // ispis: 3
console.log(h); // ispis: 50
console.log(i); // ispis: 5
