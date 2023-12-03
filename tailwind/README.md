# Tailwind

## Getting Started

First, install the tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

And, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Description

#### 1. Tailwind

- page.tsx, layout.tsx를 활용
- [id] 폴더로 동적 라우팅 확인

#### 2. React-hokk-form

- React-hook-form을 이용하여 간단한 로그인 페이지 구현
- 유효성 검증 포함
- useFieldArray : 동적으로 생성되는 form 작업을 위한 custom hook

  ```
      function FieldArray() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test", // unique name for your Field Array
  });


  return (
      {fields.map((field, index) => (
      <input
          key={field.id} // important to include key with field's id
          {...register(`test.${index}.value`)}
      />
      ))}
  );
  }
  ```

## More

- [블로그 정리글1](https://blog.naver.com/zhwltlr/223088662689) - Tailwind css 설치 및 간단 예제
- [블로그 정리글2](https://blog.naver.com/zhwltlr/223132240108) - React-hook-form (with tailwind.css)
