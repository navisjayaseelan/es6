console.log("Hello Webpack");
console.log("Hellow in the browser");
const limit = 100;
console.log(limit);
const emails = ['navis@example.com','michael@example.com']
emails.push('bearly@email.com')
console.log(emails);

let limited = 200;

{
    let limited = 10;
    console.log('backstage limit', limited);
}

console.log('overall venue limit', limited)

let limited_cons = 200;

{
    const limited_cos = 10;
    console.log('backstage limit', limited_cos);
}

let gd = `good`;
let greeting = `${gd} morning`;
console.log(greeting);

//Spread operater {...}

let a = [20,30,40]
let b = [10, ...a, 50]
console.log(b);

let x = ['Bearly','Jayaseelan']
let y = ['Navis', 'Micheal', ...x ]
console.log(y);

//rest parameter

function collect(...a) {
    console.log(a);
}

collect(1,3,5,7,9);

//let
//const
//block code with scope {}
//template string ${} embedding.
//operating and destructing assignment.
//spread operater.

let z = [4,5,6];
let [four,five] = z;
console.log(four,five);


let ab = ['navis','michael'];
let [a1,b1] = ab;
console.log(a1,b1);

let a2 = {name: "bearly", initial: "J"};
let {name, initial} = a2;
console.log(name, initial);

let a3 = {name1: "bearly", initial1: "J"};
let name1,initial1;
({name1, initial1} = a3);

console.log(name1,initial1)

//Arrow function
//anonymus functions

//Modules
//improved
//to split the code
//using export and import

function cheer(){
	console.log("Woohoo!");
}

var cheers = function(){
	console.log("Woohoosa!");
}

cheers();

// setTimeout(function(){
// 	console.log("Woohoosaer!");
// },0);

//To arrow fucntion
// setTimeout(() => {
// 	console.log("Woohoosaerjarrow!");
// },0);

var cheersarrow = () => {
	console.log("Woohoosa-bing!");
}

cheersarrow();

//Anonymns arrow using map and filter.

let values = [20,30,40]

let double = (n) => {
	return n*2;
}

let doubler = values.map(double);
console.log(values);
console.log(doubler);
let doubler2 = values.map((n) => n*2);
console.log(doubler2);

let points = [7,16,21,4,3,22,5];
let highscores = points.filter((n) => n>15);
console.log(highscores);

let bw = "wooh" + "oo".repeat(100);

let bwe = `wooh h${"oo".repeat(10)}`;

console.log(bwe);
console.log("butterfly".startsWith("butter"));
console.log("butterfly".endsWith("fly"));
console.log("butterfly".includes("fly"));


const addToCart = (item,number) => {
	return Number.isSafeInteger(number);
}
console.log(addToCart('Shirt'),1);

const addToFlipKart = (item,number) => {
	return Number.isFinite(number);
}
console.log(addToFlipKart('Pant',2));

import {fellows , total} from './fellowship';
console.log(fellows, total);

//import {add , multiply} from './math';

import multiply from './math';

console.log(multiply(2,3));
//console.log(add(2,3));

import Animal from './Animal';

class Lion extends Animal {
	constructor(name,height,color) {
		super(name,height);
		this.color = color;
	}

	hello(){
		console.log(`Hello I'm ${this.name} from Pride Rock`)
	}

}

let son = new Lion("Simbu", 4.5, "Red");
console.log(son);

son.hello();

class Calculator{
	
	static add(a,b) {
		return a+b;
	}

	static multiply(a,b) {
		return a*b;
	}
}

let sum = Calculator.add(5,3);
console.log(sum);

function Wizard(name, house, pet) {
	this.name = name;
	this.house = house;
	this.pet = pet;

	this.greet = () => `I'm ${this.name} from ${this.house}`
}

Wizard.prototype.pet_name;

Wizard.prototype.info = function() {
	return `I have a ${this.pet} name ${this.pet_name}`
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry.info());

let dai = new Set();
dai.add(5);
dai.add(43);
dai.add("Wohoo");
dai.add({x: 50, y:200});
console.log(dai.size);
console.log(dai.has(5));

for (let element of dai.values()) {
	console.log(element);
}

let chars = 'asdjflkadjfslkjfdlksjflskjfdlksjdfklsdjfklsdjf';
let chars_arr = chars.split("");
console.log(chars_arr);
let chars_set = new Set(chars_arr);
console.log(chars_set);

let amaps = new Map();
let key_1 = "string key";
let key_2 = { a: 'key' };
let key_3 = function() {};

amaps.set(key_1, 'return value for a string key');
amaps.set(key_2, 'return value for a object key');
amaps.set(key_3, 'return value for a function key');

console.log(amaps);

let numArr = [[1,'one'],[2,'two'],[3,'three']];
let valMap = new Map(numArr);

for(let [key,value] of valMap.entries()) {
	console.log(`${key} points to ${value}`);
}

let stringer = 'abcdefghijklmnopqrstuvwxyz123456mlzxfdgkljhasdflsdhkasdhlasdkjlasdksfadjhl';
let letters = new Map();
for (let i=0; i<stringer.length; i++) {
	let letter = stringer[i];
	if(!letters.has(letter)) {
		letters.set(letter, 1);
	}
	else {
		letters.set(letter, letters.get(letter)+1);
	}
}

console.log(letters);

let string = 'supercalifragilisticexpialidocious';

const countLetter = (word, orig_letter) => {
  let letters = new Map();
  for (let i=0; i<word.length; i++) {
    let letter = word[i];
    if (!letters.has(letter)) {
      letters.set(letter, 1);
    } else {
      letters.set(letter, letters.get(letter)+1);
    }
  }
  return letters.get(orig_letter);
};

let a_count = countLetter(string, 'a');
let x_count = countLetter(string, 'x');
console.log(a_count);
console.log(x_count);

let call = () => {
	let secret = 'ES6 rocks!';
	let reveal = () => {
		console.log(secret);
	}
	//reveal();
	return reveal;
}

let unveil = call();
unveil();

//Function factory.

const addSuffix = (x) => {
	const concat = (y) => {
		return y + x;
	}
	return concat;
}

let add_initial = addSuffix(" J");
console.log(add_initial);
let h = add_initial("Navis Michael Bearly")
console.log(h);

const product = x => y => y * x

let x5 = product(5);
console.log(x5(5));

const addFactory = (x) => {
  return (y) => {
  	return x + y;
  };
};

const add50 = addFactory(50);
const add30 = addFactory(30);
const aaddFactory = x => y => x + y; 
console.log(add50);
console.log(add30);

//Private method with closures.
//moduel pattern
//lexical scoping.
const budget = () => {
	let balance = 0;
	let changeBal = (val) => {
		return balance += val;
	}

	const deposit20 = () => changeBal(20);
	const withdraw20 = () => changeBal(-20);
	const check = () => balance;

	return { deposit20, withdraw20, check}
}

let wallet = budget();
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());

//ES6  Generaters

function* letterMaker() {
	yield 'a';
	yield 'b';
	yield 'c';
}

let letterGen = letterMaker();
console.log(letterGen.next().value);
console.log(letterGen.next().value);
console.log(letterGen.next().value);

function* countMaker() {
	let count = 0;
	while (count < 3) {
		yield count += 1;
	}
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);

//Controlling flow generators.

function* evens() {
	let count = 0;
	while(true) {
		count += 2;
		let reset = yield count;
		if (reset) {
			count = 0;
		}
	}
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);


//Iterators
const arrayIterator = (array) => {
	let index =0;

	return {
		next: () => {
			if(index < array.length) {
				let next = array[index];
				index += 1;
				return next;
			}
		}
	}
}

let it = arrayIterator([1,2,3]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Generator
function* arrayGenerator() {
	yield* arguments;
}

let gt = arrayGenerator(1,2,3);
console.log(gt.next().value);
console.log(gt.next().value);
console.log(gt.next().value);
console.log(gt.next().value);



let pro_res = new Promise((resolve,reject) => {
	resolve('Resovled promise data');
})

pro_res.then(response => console.log(response));

let pro_rej = new Promise((resolve,reject) => {
	reject('Not Resovled promise data');
})

pro_rej.then(response => console.log(response))
		.catch(error => console.log(error));


let pro_res_timer = new Promise((resolve,reject) => {
	setTimeout(() => resolve('Timer Resovled promise data'),3000);
})

console.log('after promise consumption');
pro_res_timer.then(response => console.log(response))
			.catch(error => console.log(error));

//Revisiting Fetch and HTTP

//const root = 'http://jsonplaceholder.typicode.com/posts/1';
const root = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(root, {method: "GET"})
	.then(response => response.json())
	.then(json => console.log(json));


//New ES7 function.
//es7 power
let ater = 2**5;
console.log(ater);
console.log("bear");

let bter = "wonderfful".includes("ful");
console.log(bter)

let bter_array = [2,3,4,5,6].includes(2);
console.log(bter_array);

//es8

let obj = {a:'one', b:'two', c: 'three',d: "four"};
let keys = Object.keys(obj);
let valuesa = Object.values(obj);
let entries = Object.entries(obj);
console.log(keys);
console.log(valuesa);
console.log(entries);

for (let entry of entries) {
	console.log(`key: ${entry[0]}, value: ${entry[1]}`)
}

async function async_one() {
	return "one-async";
}

async_one().then(response => console.log(response));

async function async_two() {
	//throw new Error('Issue with async');
	return "two-async";
}

async_two().catch(error => console.log(error));

async function async_three() {
	const one = await async_one();
	console.log(one);
	const two = await async_two();
	console.log(two);
}

async_three();

async function async_four() {
	const [res_one, res_two] = await Promise.all(
		[async_one(), async_two()]
	)
	console.log(res_one, res_two);
}

async_four();

import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global';

console.log("reeeact");

const element = 'Reacter';

ReactDOM.render(
 	<div>React Application Hello</div>, document.getElementById('root')
);

ReactDOM.render(
	<Global />, document.getElementById('root')
);

