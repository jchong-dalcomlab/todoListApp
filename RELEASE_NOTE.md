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


