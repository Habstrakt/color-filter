/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/


const colorItems = document.querySelectorAll('.colorItem');
const imgHolder = document.querySelector('#imgHolder img');
const link = '//webcademy.ru/files/js2020/solaris/';
let attr;

colorItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    if(!event.target.classList.contains('colorItem--active')) {
      document.querySelectorAll('.colorItem--active').forEach(function(active) {
        active.classList.remove('colorItem--active');
      })
    }
    item.classList.add('colorItem--active');
    attr = item.getAttribute('color')
    
    switch(attr) {
      case 'black':
        imgHolder.setAttribute('src', `${link}black.png`)
        break;
      case 'blue':
        imgHolder.setAttribute('src', `${link}blue.png`)
        break;
      case 'graphite':
        imgHolder.setAttribute('src', `${link}graphite.png`)
        break;
      case 'orange':
        imgHolder.setAttribute('src', `${link}orange.png`)
        break;
      case 'red':
        imgHolder.setAttribute('src', `${link}red.png`)
        break;
      case 'white':
        imgHolder.setAttribute('src', `${link}white.png`)
        break;
      case 'whitepure':
        imgHolder.setAttribute('src', `${link}white-pure.png`)
        break;
    }
  })
})







