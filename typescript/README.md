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

### 4. `interface` VS `type`

- 선언 방식
  **`interface`**: 주로 객체의 구조를 정의

  ```typescript
  interface Person {
    name: string;
    age: number;
  }
  ```

  **`type`**: 객체, 유니온, 인터섹션 등의 더 다양한 타입을 정의

  ```typescript
  type Person = {
    name: string;
    age: number;
  };
  ```

- 확장 가능성
  **`interface`**: 선언된 인터페이스는 나중에 다른 인터페이스나 클래스에서 확장 가능

  ```typescript
  interface Animal {
    name: string;
    eat(): void;
  }
  interface Dog extends Animal {
    bark(): void;
  }
  ```

**`type`**: `type`은 확장이 불가능

- 호환성
  **`interface`**: 두 개의 동일한 이름을 가진 인터페이스를 선언하면 자동으로 병합

  ```typescript
  interface Car {
    brand: string;
  }

  interface Car {
    model: string;
  }

  // 결과적으로는 { brand: string, model: string }
  ```

  **`type`**: 동일한 이름의 `type`을 선언하면 컴파일 오류가 발생

- 프로퍼티의 설정 가능 여부
  **`interface`**: 프로퍼티에 대한 `readonly`나 `optional` 등의 설정이 가능

  ```typescript
  interface Person {
    readonly name: string;
    age?: number;
  }
  ```

  **`type`**: 프로퍼티에 대한 `readonly`나 `optional`을 설정할 수 없음

- 용법
  - 보통 간단한 객체 구조를 정의할 때는 `interface`를 사용하고, 더 복잡한 타입을 다룰 때는 `type`을 사용하는 경향이 있다.
  - 두 가지를 혼용하여 사용해도 상관없으며, 프로젝트에 따라 사용하면 됨

## More

- [블로그 정리글](https://blog.naver.com/zhwltlr/223121753347) - typescript 개념 및 예제
