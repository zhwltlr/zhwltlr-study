# Next-13

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

#### 1. Next.js ver.13

- Next.js version 13에 개편된 내용을 중점적으로 다룸
- app 디렉토리는 다음에 대한 지원이 포함된다고 한다.
  - 레이아웃: 상태를 유지하고 비용이 많이 드는 재렌더링을 피하면서 경로 간에 UI를 쉽게 공유한다. 즉, 페이지가 변경되어도 지속적으로 보여질 nav와 같은 컴포넌트는 layout.tsx에서 작성해주면 됨
  - 스트리밍: 즉시 로드 상태를 표시하고 렌더링되는 UI 단위로 스트리밍
  - 데이터 가져오기 지원: async 서버 구성 요소 및 fetchAPI를 통해 구성 요소 수준 가져오기가 가능
  - `app/` 내부에 경로를 생성하려면 `page.tsx`로 file 생성
    <img src="https://github.com/zhwltlr/zhwltlr-study/assets/100506719/b571e739-6cc7-475b-8365-310a76a62423" />

#### 2. Next Auth

- 처음부터 Next.js와 Serverless를 지원하도록 설계되었고, 모든 OAuth 서비스와 작동하도록 설계되었으며 OAuth 1.0, 1.0A, 2.0 및 OpenID Connect를 지원한다. 로그인 버튼, 로그아웃 버튼 등과 같은 UI 컴포넌트를 제공하여 프로젝트에서 사용하기 쉽도록 도와준다.
- 유연성: 많은 인기 있는 로그인 서비스에 대한 내장 지원이 있다. 즉, 이메일/비밀번호, Google, Facebook, GitHub, Twitter, Auth0 등 다양한 옵션을 설정하여 사용할 수 있다.

  ```
  import GitHubProvider from "next-auth/providers/github";
  ...
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
  ```

<br />

## More

- [블로그 정리 글](https://blog.naver.com/zhwltlr/223114102591)을 참고하세요
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [블로그 정리 글](https://blog.naver.com/zhwltlr/223231504372) - What is Next-Auth
- [블로그 정리 글](https://blog.naver.com/zhwltlr/223236593765) - Next-Auth with jwt token
