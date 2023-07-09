// let 이름: string = "kim";
// 이름 = 123;

let 이름: string[] = ["kim", "park"];
let 나이: { age: number } = { age: 123 };

let 이름2: string | number = "kim";

type nameType = string | number;
let 이름3: nameType = "kim";

// 타입으로 void를 설정가능한데 return이 없는지 체크할 수 있는 타입입니다.
//에러
function 함수(x: number | string) {
  // 산술 연산의 왼쪽은 'any', 'number', 'bigint' 또는 열거형 형식이어야 합니다.
  //    =>  지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없습니다.
  //   return x * 2;
}

//가능
function 함수2(x: number | string) {
  if (typeof x === "number") {
    return x * 2;
  }
}
function 내함수(x: number): number {
  return x * 2;
}

// Object
type MyObject = {
  name?: string;
  age: number;
};
let 철수: MyObject = {
  name: "kim",
  age: 50,
};

// 어떤 타입이 들어올지 모를 때 index signature를 통해 지정할 수 있다.
type MyObject2 = {
  // index signature
  [key: string]: number;
};
let 철수2: MyObject2 = {
  age: 50,
  weight: 100,
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// Union type
// 할당하는 순간 타입은 string 또는 number 중 하나로 변환
let 이름4: string | number = "kim";
let 나이4: string | number = 100;
let 어레이: (number | string)[] = [1, "2", 3];
let 오브젝트: { data: number | string } = { data: "123" };

// '+' 연산자를 'string | number' 및 'number' 형식에 적용할 수 없다. (확실해야함!)
let 나이5: string | number;
// 나이5 + 1;

// ex1)
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
// ex2)
function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));

// Type Narrowing
function 내함수2(x: number | string) {
  if (typeof x === "number") {
    return x + 1;
  } else if (typeof x === "string") {
    return x + 1;
  } else {
    return 0;
  }
}
// Type Assertion
function 내함수3(x: number | string) {
  return (x as number) + 1;
}

// 변수 설정
type 사람 = {
  name: string;
  age: number;
};

let teacher: 사람 = { name: "john", age: 20 };
type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };

// ex1)
type User = { name: string; email?: string; phone: string };
type Adult = { adult: boolean };

type NewUser = User & Adult;

let 회원가입정보: NewUser = {
  name: "kim",
  adult: false,
  phone: "1234",
};

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}
// 만들함수("010-1111-2222", func1, func2);

// interface
// 1. 대문자로 작명 2. { } 안에 타입을 명시
interface Square {
  color: string;
  width: number;
}
let 네모: Square = { color: "red", width: 100 };
// ex1)
interface Student {
  name: string;
}
interface Teacher {
  name: string;
  age: number;
}
// 위랑 아래랑 같음 => extends 사용
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
// Type alias VS Interface
// interface의 경우 일반적으로 extends
interface Animal2 {
  name: string;
}
interface Cat2 extends Animal2 {
  legs: number;
}
// type alias의 경우 & 기호를 쓰면 object
type Animal3 = {
  name: string;
};
type Cat = Animal3 & { legs: number };
// ex)
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// 이 장바구니를 표현하기 위한 방법은 아래와 같다.
interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

interface Cart2 {
  product: string;
  price: number;
  quantity: number;
  total: number;
}
