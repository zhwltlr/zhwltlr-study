# Typescript

## Description

#### 1. 함수에서의 제네릭 사용

```typescript
// 제네릭을 사용하지 않은 경우
function echo(value: any): any {
  return value;
}

let result = echo(10); // result는 any 타입

// 제네릭을 사용한 경우
function betterEcho<T>(value: T): T {
  return value;
}

let betterResult = betterEcho(10); // betterResult는 number 타입
betterResult = betterEcho("Hello, generics!"); // betterResult는 string 타입
```

#### 2. 배열의 맨 앞에 요소를 추가하는 제네릭 함수

```typescript
function prepend<T>(array: T[], value: T): T[] {
  return [value, ...array];
}

let numbers = [2, 3, 4];
let updatedNumbers = prepend(numbers, 1); // updatedNumbers: [1, 2, 3, 4]

let fruits = ["orange", "banana"];
let updatedFruits = prepend(fruits, "apple"); // updatedFruits: ["apple", "orange", "banana"]
```

### 3. 제네릭 클래스

```typescript
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // 출력: 42

let stringBox = new Box<string>("Hello, generics!");
console.log(stringBox.getValue()); // 출력: Hello, generics!
```

- `<T>`는 제네릭 매개변수 => 실제 사용될 때 구체적인 타입으로 대체
- 제네릭 타입은 타입스크립트에서 함수, 클래스, 인터페이스 등을 작성할 때 특정 타입을 동적으로 지정할 수 있게 해주는 기능
- 코드의 재사용성,유연성

## More

- [블로그 정리글](https://blog.naver.com/zhwltlr/223121753347) - typescript 개념 및 예제
