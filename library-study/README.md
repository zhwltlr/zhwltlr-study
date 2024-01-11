This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

### Next.js의 API Routes

1. **서버리스 함수**

Next.js의 API Routes는 서버리스(Serverless) 기반의 함수로 동작한다. 이는 서버 코드를 작성하지 않아도 API 엔드포인트를 생성하고 관리할 수 있다는 것을 의미한다.

```
// pages/api/hello.js
export default function handler(req, res) {
res.status(200).json({ message: "Hello from the serverless API!" });
}
```

2. **자동 라우팅**

프로젝트의 `pages/api` 디렉토리 내에 생성한 파일들은 Next가 아~ api 부분이구나 인식하여 별다른 장치 없이도 자동으로 API 엔드포인트로 라우팅된다. 즉, 파일 구조를 통해 URL 경로가 생성되므로 별도의 라우팅 설정이 필요하지 않다는 소리다.

3. **클라이언트 및 서버에서 사용 가능**

API Routes는 서버 사이드와 클라이언트 사이드에서 모두 사용 가능하기 대문에 이를 통해 데이터를 사전 렌더링하여 성능을 향상시킬 수 있게 된다.

<br />

### React split-pane-react

split-pane-react는 React에서 분할된 레이아웃을 만들기 위한 유용한 라이브러리(라고 소개하고 있음)다. 이 라이브러리를 사용하면 화면을 분할하고 여러 개의 패널로 구성할 수 있어 복잡한 레이아웃을 간편하게 구현할 수 있다.

간단히 말해 split-pane-react는 화면을 수평 또는 수직으로 분할하여 패널을 생성하고, 각 패널에 내용을 배치할 수 있게 해주는 역할을 한다.

```
// 초기값 설정
const [sizes, setSizes] = useState([30, 70]);

 <SplitPane
    split="vertical" // 방향 설정 가능
    sizes={sizes} // 변화된 값들이 적용
    onChange={setSizes} // 변화를 감지하여 사이즈 조정
    sashRender={() => (
        <SashContent
        style={{
            backgroundColor: "#859fac",
            padding: "6px",
            borderRadius: "15px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            height: "95%",
        }}
        />
    )} // resizer의 스타일을 지정한다.
    >
    <Pane>
        <div className="h-full flex flex-col">
            {task.title}
        </div>
    </Pane>
    <div className="h-full p-4">
        <div className="bg-gray-200 p-6 rounded-lg h-full text-black">
            <h2 className="text-lg font-bold">{selectedTask.title}</h2>
            <p>{selectedTask.description}</p>
        </div>
    </div>
</SplitPane>
```

<img src="https://github.com/zhwltlr/zhwltlr-study/assets/100506719/1f6fca84-ee4b-4ea4-9dc9-9c5b68e1f0ae" />

<br />

### Tiptap

- Tiptap은 ProseMirror를 기반으로 하는 WYSIWYG(What You See Is What You Get) 에디터를 쉽게 구현할 수 있게 해주는 라이브러리로, 여기서 말하는 ProseMirror는 풍부한 텍스트 에디팅을 제공하는 프레임워크이다.Tiptap은 ProseMirror를 Vue.js와 React와 같은 프레임워크에 통합하기 위한 래퍼이다.

- 특징
  - Tiptap은 모듈화된 아키텍처를 기반으로 함
  - 각각의 기능은 확장(extension)으로 나누어져 있으며, 필요한 기능을 선택 가능

### Quill

- Quill은 tiptap과 마찬가지로 rich text editor의 일종이다. 그리고 이를 리액트 혹은 넥스트 환경에서 통합할 수 있게 react-quill이라는 이름으로 라이브러리가 존재한다. 글꼴, 크기, 스타일링, 목록, 링크, 이미지 삽입 등 다양한 기능을 지원한다.

### xlsx

- excel 파일을 import 혹은 export 하는 라이브러리
  fetch is a low-level API for downloading data from an endpoint. It separates the network step from the response parsing step.

  - Network Step
    fetch(url) returns a Promise representing the network request. The browser will attempt to download data from the URL. If the network request succeeded, the Promise will "return" with a Response object.
    ```
    const response = await fetch(url);
    ```
  - Checking Status Code
    If the file is not available, the fetch will still succeed.
    The status code, stored in the status property of the Response object, is a standard HTTP status code number. Code should check the result.
    Typically servers will return status 404 "File not Found" if the file is not available. A successful request should have status 200 "OK".
  - Extracting Data
    Response#json will try to parse the data using JSON.parse. Like fetch, the json method returns a Promise that must be await-ed:

    ```
    const raw_data = await response.json();
    ```

```
  export async function extractChpaterSectionData(sheet: any, lectureId: number) {
  const data: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[];
  const onlyChapterSectionData = extractChapterSectionData(data);
  const isSaved = await saveChapterSectionData(
      onlyChapterSectionData,
      lectureId
  );
  return isSaved;
  }
```

### shadcn/ui

```
npx shadcn-ui@latest init
```

1. Import the font in the root layout:

```
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "../@/lib/utils"

export const fontSans = FontSans({
subsets: ["latin"],
variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
return (
<html lang="en" suppressHydrationWarning>
<head />
<body
className={cn(
"min-h-screen bg-background font-sans antialiased",
fontSans.variable
)} >
...
</body>
</html>
)
}
```

2. Configure theme.extend.fontFamily in tailwind.config.js

```
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} \*/
module.exports = {
darkMode: ["class"],
content: ["app/**/_.{ts,tsx}", "components/\*\*/_.{ts,tsx}"],
theme: {
extend: {
fontFamily: {
sans: ["var(--font-sans)", ...fontFamily.sans],
},
},
},
}
```

App structure
Here's how I structure my Next.js apps. You can use this as a reference:

```
├── app
│ ├── layout.tsx
│ └── page.tsx
├── components
│ ├── ui
│ │ ├── alert-dialog.tsx
│ │ ├── button.tsx
│ │ ├── dropdown-menu.tsx
│ │ └── ...
│ ├── main-nav.tsx
│ ├── page-header.tsx
│ └── ...
├── lib
│ └── utils.ts
├── styles
│ └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

The rest of the components such as <PageHeader /> and <MainNav /> are placed in the components folder.
The lib folder contains all the utility functions. I have a utils.ts where I define the cn helper.
The styles folder contains the global CSS.

```
npx shadcn-ui@latest add button
```

```
import { Button } from "@/components/ui/button"

export default function Home() {
return (

<div>
<Button>Click me</Button>
</div>
)
}
```

## More

- [블로그 정리 글](https://blog.naver.com/zhwltlr/223170222235) - React split-pane-react
- [블로그 정리 글](https://blog.naver.com/zhwltlr/223188491322) - Next.js의 API Routes
- [블로그 정리 글](https://blog.naver.com/zhwltlr/223249057457) - Next.js WYSIWYG (1) - Quill

<br/>
