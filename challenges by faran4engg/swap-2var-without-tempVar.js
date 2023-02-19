// Swap two numbers without using a temp variable?

let val1 = "111";
let val2 = "112233";

// sol one
val1 = [val1, val2];
val2 = val1[0];
val1 = val1[1];
// console.log(val2, val1);

// sol two
let a = "osama",
	b = "mansoor";
[a, b] = [b, a];
console.log(a, b);
