//Homework-2
//## Работа с простыми типами
var concatenate = function (str1, str2) {
  return str1 + str2;
};
console.log('concatenate', concatenate('first ', 'second'));
var testObject = {
  howIDoIt: 'test 1',
  simeArray: ['I do it well', 'String 2', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};
// array.map(function(currentValue, index, arr), thisValue);
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue);
var testArray = ['first ', 'second ', 'third ', 'forth ', 'fifth '];
testArray.reduce(sumUp, 'null ');
console.log('testArray.reduce(sumUp)', testArray.reduce(sumUp, 'null '));
function sumUp(accum, el) {
  return accum + el;
}
var tsSum = function (arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
};
tsSum([1, 5]);
// console.log('tsSum([1, 5])', tsSum([1, 5]));
var tsString = 's';
var tsNumber = 5;
var strOrNumber = 4;
var tsArr1 = [1, 2, 3];
var tsArr2 = [1, 2, 3];
//Tuples
var tsNextArr = ['1', 2];
var a = tsNextArr[0],
  b = tsNextArr[1];
var tsObj = {
  name: 'Alexey',
  birthday: 35,
};
var data = {
  key1: 'key',
  key2: 'key33',
};
var val3 = data.key3;
//(Lesson 5)
//Functions
var MethodEnum;
(function (MethodEnum) {
  MethodEnum['add'] = 'add';
  MethodEnum['sb'] = 'sub';
  MethodEnum['div'] = 'divide';
})(MethodEnum || (MethodEnum = {}));
function calculate(method, first, second) {
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
var ArrowFunc = function () {
  return null;
};
//(Lesson 6)
//Generics
function identity(value) {
  return value;
}
identity('333');
identity(2);
// interface MyArray<T> {
// 	[n: number]: T;
// 	map<U>(fn: (el: T) => U): U[];
// }
var tsArr = [1, 3, 4];
tsArr.map(function (i) {
  return i + 1;
});
tsArr.map(function (i) {
  return 'df';
});
function getLen(arr) {
  return arr.length;
}
getLen([1, 2, 3]);
