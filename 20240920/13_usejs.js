// 스크립트 이용해서 css를 적용하건 이벤트를 별도로 추가해줄 수 있음
// title 변수에 id가 title인 태그를 저장해서 그 태그의 색깔을 파란색으로 바꿈

// querySelector는 1개만 선택됨
// querySelectorAll은 모든 태그가 선택됨
let title = document.querySelector('#title') // querySelector: 선택자
title.style.color = 'blue'

let contents = document.getElementById('contents') // id명 사용해서
contents.style.background = 'pink'

let txt = prompt('글자를 입력해보세요')
alert(txt)
contents.innerText += txt // 입력 받은 것으로 내용 추가 가능