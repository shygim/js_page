//1.변수
//변수의 종류
var	variableVar;// 가장 오래된 변수 선언 키워드, 함수 범위 또는 전역 범위, 재선언 및 재할당 가능 (비추천)
let	variableLet;//ES6(ES2015)에서 도입, 블록 범위, 재할당 가능하지만 재선언 불가능
const	variableConst="const";//ES6에서 도입, 블록 범위, 상수(constant), 재할당 및 재선언 불가능, 초기값 필요

//변수규칙
//문자,숫자,$,_로 구성(숫자로 시작 or 예약어 사용불가)
let camelCase; //카멜케이스 일반적으로 사용
let snake_case; //스네이크케이스
let PascalCase; //파스칼케이스
/*자료형

  //기본타입
    //Number	모든 정수 및 부동 소수점 숫자를 포함(매우 큰 정수는 제외)
    //BigInt	매우 큰 정수를 다룰 때 사용합니다. 일반적인 Number 타입으로 표현할 수 없는 크기의 정수를 나타내며, 값 끝에 'n'을 붙여 표기합니다.
    //String	"",'',``으로 묶어 문자열 저장
    //Boolean	논리적 값인 'true'와 'false'
    //Symbol	유일하고 변경 불가능한 기본값으로, 주로 객체의 고유한 속성 키로 사용됩니다. 충돌 방지
    //Undefined	변수가 선언되었으나 아직 값이 할당되지 않았음을 나타냅니다.
    //Null	의도적으로 '없음' 또는 '무효'임을 나타내는 값

//복합 타입 (Complex Types)

    //Object	{key:value}키와 값의 쌍으로 구성, (함수, 배열, 날짜, 내장객체 등을 포함)
    Object.enrise() : [키,값]을 요소로 하는 배열 반환
    .keys() : [키]를 요소로 하는 배열 반환
    .values() : [값]를 요소로 하는 배열 반환
    .seal(): 객체를 변경할 수 없게 해준다.
    .is(): 두 값이 같은 지 확인, NaN은 확인불가
    .assign(): 하나 이상의 소스객체로부터 대상객체로 속성을 복사
*/
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const mergedObject = Object.assign({}, target, source);
console.log("Object.assign():", mergedObject);
/* 출력: Object.assign(): { a: 1, b: 3, c: 4 }

    //Function	객체의 일종으로 취급되어, 함수 내 속성과 메서드를 가짐 
    //Array	[value1,2,...]형태로 구성, 서로 다른 밸류타입 허용, typeof 시 Object, isArray함수로 확인가능
    //  concat(), filter(), map(), slice(), sort(), splice(), forEach(), find(), join() , includes(), reduce(), push(),pop()
*/ 
    //객체 종류

// 일반 객체:	가장 기본적인 객체 형태, 키-값 쌍을 포함	
let person = {name: 'Alice', age: 25};
// 배열:	순서가 있는 값의 집합	
let fruits = ['apple', 'banana', 'cherry'];
// 함수:	실행 가능한 코드 블록을 포함하는 객체	
function greet(name) { return 'Hello ' + name; }
// 날짜: (Date)	날짜와 시간을 나타냄	
let studyday = new Date();
const studyString = studyDay.toISOString().split('T')[0]; // T를 기준으로 분할, [0]은 날짜. [1]은 시간.

// 정규 표현식: (RegExp)	문자열에서 패턴 검색 및 처리를 위해 사용	
let pattern=/[a-zA-Z]+/g
// 에러: (Error)	실행 중에 발생하는 오류를 나타냄	
try {
  throw new Error('Something went wrong');
} catch (e) {
  console.error(e.message); // Something went wrong
}
// 내장 객체:	자바스크립트에 내장된 객체, 고유한 기능과 속성을 가짐	
console.log(Math.random()); // 0과 1 사이의 랜덤한 숫자
console.log(Number.parseInt('10', 10)); // 10
// 전역 객체:	코드 어디에서나 접근할 수 있는 객체	

console.log(globalThis.location.href); // 브라우저 환경
console.log(globalThis.process.version); // Node.js 환경
//함수


// 함수 선언식 (Function Declaration) 함수를 정의하고 함수명을 지정
function bread() {
  console.log("This is a bread function declaration");
}

// 함수 표현식 (Function Expression) 정의한 함수를 변수에 할당, 익명함수형태로 변수 할당가능
const breadFunc = function() {
  console.log("This is a bread function expression");
};

// 화살표 함수 (Arrow Function) ES6도입, (매개변수) => {수행내용};을 변수에 할당 가능
const breadArrow = () => {
  console.log("This is a bread arrow function");
};

// 익명 함수 (Anonymous Function) 콜백함수에서 활용
setTimeout(function() {
  console.log('Hello');
}, 1000);

// 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE) 선언즉시 실행
(function() {
  console.log('I am invoked immediately');
})();


// 지역변수:	함수 내부에서 선언된 변수로, 해당 함수 내부에서만 접근할 수 있습니다.
// 전역변수:	함수 외부에서 선언된 변수로, 스크립트 전체에서 접근할 수 있습니다.
// 메서드:	객체에 속한 함수를 의미하며, 해당 객체의 속성으로써 동작합니다.
// 매개변수(parameter):	함수 정의 시 활용한 변수명 
// 전달 인자(argument):	함수 호출 시 전달되는 실제 값
// this:	현재 실행 중인 코드에서 사용되는 객체를 가리키는 키워드로, 주로 메서드 내부에서 사용됩니다.
// 해당 메서드를 호출한 객체를 가리키거나, 함수가 어디서 호출되었는지에 따라 동적으로 결정될 수 있습니다.
const order = {
  drink: "아메리카노",
  size: "Tall",
  makeDrink: function() {
   
    console.log("사이즈 : " + this.drink + ", 종류 : " + this.size);
  }
};
order.makeDrink(); // 사이즈 : 아메리카노, 종류 : Tall
 //this는 메서드가 호출될 때 호출된 객체에 바인딩되므로,
 // makeDrink 메서드가 order 객체에서 호출될 때 this는 order 객체를 가리킴
 //객체 내에 함수로 정의된 속성은 키(key)로도 부를 수 있고, 메서드로도 부를 수 있습니다. 


// Class: Data와 메소드의 묶어 상속 및 캡슐화 지원, 기술적으로 함수 종류로 인식

class Person {
  #name; //private 프로퍼티, 내부에서만 접근 가능(#메소드도 동일)
  _age; //protected 프로퍼티, 스크립트 전체에서만 접근 가능(_는 순수 표기용)
  constructor(name, age) { //생성자 
    this.#name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
}



//조건문, 반복문
// for 반복문 예제 : 초기조건; 초기조건 확인 후 조건식; 내역 수행 후 증감식;
for (let i = 0; i < 5; i++) {
  console.log(i); // 0부터 4까지 출력
}

// for...in 반복문 예제 : 입력받은 객체의 키를 순환 
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(key, object[key]); // 객체의 각 속성과 값을 출력
}

// for...of 반복문 예제 : 입력받은 배열의 각 요소를 순환
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value); // 배열의 각 요소를 출력
}

// while 반복문 예제
let i = 0;
while (i < 5) {
  console.log(i); // 0부터 4까지 출력
  i++;
}

// do...while 반복문 예제 : 기존 while()조건문 자리에 do 작성 후 수행문 뒤로 옮김
let j = 0;
do {
  console.log(j); // 0부터 4까지 출력, 최소 한 번은 실행
  j++;
} while (j < 5);


// break 예제 : 반복문을 빠져나옴
for (let k = 0; k < 10; k++) {
  if (k === 5) break; // i가 5에 도달하면 반복문을 중단
  console.log(k); // 0부터 4까지만 출력
}

// continue 예제 : 다음 반복문으로 넘어감
for (let l = 0; l < 10; l++) {
  if (l % 2 === 0) continue; // l이 짝수이면 다음 반복으로 건너뜀
  console.log(l); // 1, 3, 5, 7, 9 출력
}

// switch 예제 :  다중 분기, switch 인자에 일치하는 case부터 ~break까지 처리
const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple!'); // 'Apple!' 출력
    break;
  case 'banana':
    console.log('Banana!');
    break;
  default:
    console.log('Unknown fruit');
}

// switch 를 if 문으로 변환

if (fruit === 'apple') {
    console.log('Apple!'); // 'Apple!' 출력
} else if (fruit === 'banana') {
    console.log('Banana!');
} else {
    console.log('Unknown fruit');
}