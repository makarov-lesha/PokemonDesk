//Homework-2
//## Работа с простыми типами

const concatenate = (str1: string, str2: string): string => {
	return str1 + str2;
};

console.log('concatenate', concatenate('first ', 'second'));

//## Работа с интерфейсами
interface internalInterface {
	howIDoIt: string;
	simeArray: [s1: string, n1: number];
}

interface TaskInterface {
	howIDoIt: string;
	simeArray: [s1: string, s2: string, n1: number];
	withData: [el1: internalInterface];
}

const testObject: TaskInterface = {
	howIDoIt: 'test 1',
	simeArray: ['I do it well', 'String 2', 42],
	withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

//Типизация для метода reduce

interface MyArray<T> {
	[n: number]: T;

	map<U>(fn: (el: T) => U): U[];
	reduce<U>(fn: (accum: U, el: T) => U, initialValue?: T): U;
}

// array.map(function(currentValue, index, arr), thisValue);
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue);

const testArray: MyArray<string> = [
	'first ',
	'second ',
	'third ',
	'forth ',
	'fifth ',
];
testArray.reduce(sumUp, 'null ');
console.log('testArray.reduce(sumUp)', testArray.reduce(sumUp, 'null '));

function sumUp(accum: string, el: string): string {
	return accum + el;
}

//LESSON
//
//
//
//
//
//
//
//
//
//
//Types (Lesson 1)
type AllUnionTypeAlias =
	| string
	| number
	| null
	| undefined
	| symbol
	| void
	| bigint
	| object
	| [];

let tsSum = (arr: number[]) => arr.reduce((a: number, b: number) => a + b);

tsSum([1, 5]);
// console.log('tsSum([1, 5])', tsSum([1, 5]));

const tsString = 's';
const tsNumber = 5;

type StringOrNumber = string | number;

const strOrNumber: StringOrNumber = 4;

//(Lesson 2)

//Arrays
type TsArr = number | string;
const tsArr1: (number | string)[] = [1, 2, 3];
const tsArr2: Array<TsArr> = [1, 2, 3];
//Tuples
const tsNextArr: [string, number] = ['1', 2];

const [a, b] = tsNextArr;

//(Lesson 3)
//Objects and Interfaces
type TsObj = {
	name: string;
	birthday: number | string;
	male?: string;
};

interface MyFirstInterface {
	readonly name: string;
	birthday: number | string;
	male?: string;
}

const tsObj: MyFirstInterface = {
	name: 'Alexey',
	birthday: 35,
};

interface IndexInterface {
	[n: string]: string | number;
}

const data: IndexInterface = {
	key1: 'key',
	key2: 'key33',
};

const val3 = data.key3;

//(Lesson 5)
//Functions

enum MethodEnum {
	add = 'add',
	sb = 'sub',
	div = 'divide',
}

function calculate(method: MethodEnum, first: number, second: number): number {
	switch (method) {
		case MethodEnum.add:
			return first + second;
		case MethodEnum.sb:
			return first - second;
		default:
			return 1;
	}
}

calculate(MethodEnum.add, 1, 2);

type FnNum = () => number;
type FnDefault = () => void;

const ArrowFunc: FnDefault = () => null;

//(Lesson 6)
//Generics

function identity<T>(value: T): T {
	return value;
}

identity('333');
identity(2);

// interface MyArray<T> {
// 	[n: number]: T;
// 	map<U>(fn: (el: T) => U): U[];
// }

const tsArr: Array<number> = [1, 3, 4];

tsArr.map((i) => i + 1);
tsArr.map((i) => 'df');

function getLen<T extends Array<any>>(arr: T): number {
	return arr.length;
}

getLen([1, 2, 3]);
