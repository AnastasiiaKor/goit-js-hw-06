Задание 8​

Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

Задание 9​

Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
}

Задание 10 (выполнять не обязательно)​

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
