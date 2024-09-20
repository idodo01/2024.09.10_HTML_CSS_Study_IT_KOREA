
let month = prompt('태어날 월을 입력해주세요')
alert(month)
switch(month/1){
    case 12:
    case 1:
    case 2:
        alert('겨울')
        document.getElementById('imgId').src = '4.jpg'
        break;
    case 3:
    case 4:
    case 5:
        alert('봄')
        document.getElementById('imgId').src = '1.jpg'
        break;
    case 6:
    case 7:
    case 8:
        alert('여름')
        document.getElementById('imgId').src = '2.jpg'
        break;
    case 9:
    case 10:
    case 11:
        alert('가을')
        document.getElementById('imgId').src = '3.jpg'
        break;
    default:
        alert('잘못된 계절입니다')
        break;
}
