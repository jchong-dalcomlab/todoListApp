# TODO List 파일럿 - 릴리스 노트

## 시작: props drilling version
리액트를 다루는 기술 chapter 10 예제를 그대로 활용

## 1차 업데이트: context 적용
Context Provider 및 reducer 등을 활용하여 리팩터링
props drilling 을 줄임
> 이 업데이트 부터 refactor-ctx 라는 이름으로 가지치기 함

## 2차 업데이트: 자료구조 확장 
사용자 선택 개념을 추가하기 위해 기존 자료구조 상위에 사용자 정보를 추가 확장 했다.
이 과정 속에서 수정된 사용자별 TODO 데이터가 상위 컴포넌트에서 초기에 전달한 데이터와 별개로 동작하는 이슈를 확인,
useState 이용하여 전체 자료구조를 관리하고 데이터가 변화할 때 이를 상위 이벤트로 전달하여 변화를 반영하는 해결책을 적용함 

## 타입스크립트 프로젝트로 전환

1. TypeScript 설치
   프로젝트에 TypeScript와 관련 타입 정의를 설치합니다.

```Bash
npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest
```

2. tsconfig.json 파일 생성
   프로젝트 루트에 `tsconfig.json` 파일을 생성하고 TypeScript 컴파일러 옵션을 설정합니다.

```Bash
npx tsc --init
```

3. 파일 확장자 변경
   `.js` 또는 `.jsx` 파일을 `.ts` 또는 `.tsx`로 변경합니다.
4. 코드 변환 시작
   간단한 컴포넌트부터 시작하여 점진적으로 TypeScript로 변환합니다.
   •	프롭스에 타입을 추가합니다.
   •	상태(state)에 타입을 추가합니다.
   •	함수 반환 값에 타입을 추가합니다.
5. 타입 정의 추가
   필요한 경우 서드파티 라이브러리의 타입 정의를 설치하거나 직접 작성합니다.
6. 점진적 마이그레이션
   전체 프로젝트를 한 번에 변환하지 않고, 파일 단위로 점진적으로 변환합니다.
   •	`allowJs: true` 옵션을 사용하여 JavaScript와 TypeScript 파일의 공존을 허용합니다.
   •	새로운 기능을 개발하거나 버그를 수정할 때 해당 파일을 TypeScript로 변환합니다.
7. 엄격한 타입 검사 적용
   `tsconfig.json`에서 점진적으로 더 엄격한 타입 검사 규칙을 적용합니다.
8. 테스트 코드 변환
   Jest나 Enzyme과 같은 테스트 코드도 TypeScript로 변환합니다.
9. 빌드 및 오류 수정
   프로젝트를 빌드하고 발생하는 TypeScript 오류를 수정합니다.
   이 과정을 통해 자바스크립트 리액트 프로젝트를 타입스크립트로 성공적으로 변환할 수 있습니다. 변환 작업은 시간이 걸릴 수 있으므로 인내심을 가지고 점진적으로 진행하는 것이 중요합니다.

> 필자는 아직 타입스크리브를 문법을 모름니다. 그럼에도 불구하고 AI 한테 시켜 내용을 모두 Type Script 로 변경했습니다.