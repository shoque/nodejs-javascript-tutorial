/* Javscript is a  dynamic and untyped language.
-In JavaScript a value is declared with var

-An important difference with other typed languages like java is that,
 in javsacript we don't declare the type of a variable.A varibale can hold
 any types.
ex-
*/

var k = 5;//holding a number,the value is 5
console.log(k);
k = "hello";//holding a string,the value is "hello"
console.log(k);
k = [2, 3, 4, 5, 6];//holding an array,the value is an array
console.log(k);

/* whatever a variable holds is a value.
-In javascript there are few basic types of values such as numbers,strings,
objects,functions,boolean,undefined values,etc.
-Operators are things that acts on values.Some of javscript operators are
+,-,%,typeof,etc
*/

/*Numbers
JavaScript uses 64-bit to store a single number value.
Infinity, -infinity, NaN
-Any numeric operation that does not produce a meaningful result will become
NaN or not a number/
*/
k = 1/0;
console.log(k);//prints Infinity
k = 1 + Infinity;
console.log(k);//prints Infinity
k = 0/0
console.log(k);//prints NaN
k = Math.sqrt(-1);
console.log(k)//prints Nan for complex numbers
k = Infinity - Infinity //prints Nan.

/* if we want to check the  type for a value, we can use the type of operator.
ex-
*/
console.log(typeof (1/0));//1/0 is Infinity, which is a Number.
console.log(typeof Infinity - Infinity);//Infinity - Infinity produces NaN; a number
console.log(typeof 3)//prints number.
/*strings*/
var getString = "hello world\ngo to second line";
console.log(getString);//print the string in two lines.
getString = "hello"+" world";//concat with plus operators
console.log(getString);
console.log(typeof getString);//prints string
/*Logical operators */
