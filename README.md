# 리액트 과제 02, 03

-과제날짜 : 05.14 ~ 05.15 / 05.17~05.19


- 과제 02 기능구현 : li의 작은 이미지를 클릭하면 div 안의 큰 이미지의 제목과 옆의 텍스트 내용이 바뀌기

- 과제 02 컴포넌트 구조 : 

Root

├── assets

│   └── api
│       └── data.js

├── components

│   └── MainWork.jsx, styles.scss

│          ├── MainImg.jsx

│          ├── MainList.jsx

│                  └── MainItem.jsx

│          ├── MainText.jsx


***

- 과제 03 기능구현 : 좌우 버튼을 클릭 시, 큰 이미지와 좌측의 안내글이 적힌 아코디언이 함께 움직이게 하기, li안의 이미지를 클릭해도 동일하게 나오도록 하기

- 과제 03 컴포넌트 구조 : 

Root

├── assets

│   └── api

│       └── data.js

├── components

│   └── Subworkcon1.jsx, subwork.scss

│          ├── Subworkcon1List.jsx

│          │        └──Subworkcon1Li.jsx

│          └── Subworkcon1Page.jsx

│                   └── Subworkcon1PageDt.jsx

└── App.jsx
