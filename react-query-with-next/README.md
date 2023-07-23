# React-query-with-next

## Getting Started

First, install package-json.

```
npm install
```

And, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

#### 1. React-query

- 사용하게 된 이유 :서버로부터 값을 가져오거나 업데이트 하는 로직을 데이터 저장하는 역할을 하는 store 내부에 개발하여 store에 서버 데이터와 클라이언트 데이터가 공존하게 되었다. 예를 들어, recoil 안에 selector를 통해 데이터가 업데이트 되는 경우 서버 데이터와 클라이언트 데이터가 혼재되는 경우가 발생된다. 그래서 이를 방지하고자 react-query를 사용하여 서버, 클라이언트 데이터를 분리하기 시작하였다.
- useQuery
  - 비동기 데이터 요청의 모든 상태 및 관리 작업을 처리하는 객체이다
  - HTTP GET METHOD와 같이 서버에 저장되어 있는 상태를 불러와서 사용한다
  - Unique Key를 필요로 하며, 이 key로 서버상태를 로컬에 캐시하고 관리한다
  - 첫번째 파라미터 : Unique Key, 두번째 파라미터 : api 호출 함수
- useMutatiton
  - 데이터를 수정하고 서버로 보내는 비동기 요청을 처리하는 객체로, 서버에 데이터를 보낼 때 성공 또는 실패에 따라 상태를 업데이트 할 수 있다.
  - HTTP POST, PUT, DELETE요청과 같이 서버에 side effect를 발생시켜 서버의 상태를 변경시킬 때 사용한다
  - useMutation의 첫번째 파라미터는 이 Muitation 요청을 수행하기 위한 Promise를 return

#### 2. Customization

- 고려 사항

  - data fetch시 url과 method를 명시하여 get은 useQuery custom hook 으로 post 는 useMutation custom hook 으로 만들어 준다.
  - useQuery, useMutation의 옵션을 전달 해줄 방법을 생각한다.

        import { useQuery } from "@tanstack/react-query";
        import axios from "axios";

        const getAxios = async (args: IRqQuery) => {
            return await axios({
                url: `https://jsonplaceholder.typicode.com/posts`,
                method: "get",
                }).catch((err) => {
                console.log(err.response.status);
            });
        };

        export const useRqQueryCustom = (args: IRqQuery) => {
            return useQuery([`${args.key}`], () => getAxios(args), args.reqOptions);
        };

#### 3. Material UI

- 특징

  - Material Design 가이드라인: Material UI는 Google이 개발한 Material Design 가이드라인을 준수합니다. 이 가이드라인은 디자인 요소와 패턴에 관한 포괄적인 설명을 제공하여 뛰어난 사용자 경험과 일관성 있는 디자인을 제공하는데 도움을 줍니다.

  - 다양한 컴포넌트: Material UI는 버튼, 입력 필드, 카드, 대화 상자, 스낵바, 탭 등과 같은 다양한 UI 컴포넌트를 제공합니다. 이러한 컴포넌트들은 Material Design 가이드라인에 따라 디자인되어 있으며, 높은 수준의 일관성과 효과적인 디자인을 제공합니다.

  - 테마 지원과 커스텀 테마: Material UI는 커스텀 테마를 생성하고 적용할 수 있습니다. 이를 통해 컬러, 폰트, 그림자 등의 스타일을 변경하여 앱에 고유한 디자인 시스템을 적용할 수 있습니다.

  - 반응형 디자인: Material UI 컴포넌트들은 기본적으로 반응형으로 동작합니다. 다양한 디바이스에서 적절하게 조정되어 모바일 기기와 데스크톱 화면에서도 일관성 있게 동작합니다.

  - CSS-in-JS 스타일링: Material UI는 JSS(JavaScript Style Sheets)를 사용하여 컴포넌트에 스타일을 적용합니다. 이는 컴포넌트 단위로 스타일을 관리하고 컴포넌트의 스타일과 로직을 분리하는데 도움이 됩니다.

## More

- [블로그 정리글1](https://blog.naver.com/zhwltlr/223101743583) - React Query (with Recoil)
- [블로그 정리글2](https://blog.naver.com/zhwltlr/223138339836) - React-query useQuery, useMutation Custom Hooks
- [블로그 정리글3](https://blog.naver.com/zhwltlr/223157740743) - Material UI
