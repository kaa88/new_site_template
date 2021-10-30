# New site template v2.05

### TO DO:
- video player сделать конструктор
- для портфолио сделать скрипт об успешном завершении без php
- модал: добавить функцию вызова из модального окна еще одного
- попап переработать
- page_loader загрузчик (белый экран с анимацией или без)
- кнопка "наверх" в разных вариантах
- scrolling navigation (mogo)
- simple slider
- сниппеты sublime (var, for)

НОВОЕ ПОРТФОЛИО:
- фоновая картинка с параллаксом
- профиль инфо приклеено слева как aside
- работы крупнее раза в 2-3
- описание появляется при ховере с какой-нибудь интересной анимацией
- убрать картинки html css js
- load-анимация (возможно раскрывающиеся шторки на весь экран с приветствием)

### Навыки:
- js: избавиться от undefined значений; использовать const и let; объекты, прототипы
- использовать стили для a:visited
- для отмены работы ссылки (нпр на текущей странице) исп. в css - pointer-events: none;

Учить горячие клавиши, создавать сниппеты, искать полезные плагины.<br>
При выключенном JS применять деградацию: замена скриптованных элементов прямыми ссылками (?)

---

### Готовые шаблоны:
- header (html, css, js)
- footer (html, css)
- modal (html, css, js)
- scroll_lock (js)
- transition_lock (js)
- mobile_switcher (js)
- random (js)
- onload_counter (js)
- accordion_css (html, css)
- accordion_js (html, css, js)
- select (html, css, js)
- input_checkbox (html, css)
- input_radio (html, css)
- input_range - (html, css, js)
- input_range_jsv - (html, css, js)
- form_to_email (html, css, js, php)
- video_player (html, css, js) - сделать конструктор

### Папки:
#src (css, js, php, libs, fonts(otf), img, other_stuff, temp), design

### Комментарии по работе:
- скопировать все файлы в новый репозиторий
- в коммандной строке прописать "npm i" для установки gulp
- удалить название у файла .gitignore

---

### Changelog:
#### v2.05
- модуль video_player
- light версия input_range: использует один элемент "input", оформление через css певдоклассы, закрашивание прогресса трека через javascript, поддерживает вертикальную ориентацию
- onloadInits заменен на window.onload в каждом модуле
- gulpfile.js и папка other_stuff

#### v2.04
- обновление шаблона header (css + lazyload bug)
- script.js добавлен шаблон swiper, onloadInits
- мелкие исправления

#### v2.03
- gulp: выделена папка libs, добавлена обработка файлов php и др.
- добавлен плагин и скрипт php-mailer 
- шаблон input_range на чистом js
- шаблон input_radio
- select поддержка форм, закрытие в любом месте
- добавлен robots.txt
- переработан режим тестирования
- мелкие исправления

#### v2.02
- gulp: плагины для минификации css и js
- ссылки меню на каждой странице формируются скриптом
- в меню добавлена функция, скрывающая header
- переработан selection
- изменены формулы, убран @use "sass:math"
- мелкие исправления

#### v2.01
- изменены шаблоны (index.html[footer], script.js, scroll_lock, menu, mobile_switcher)
- изменены формулы, добавлен @use "sass:math"
- добавлен шаблон footer
- gulp: fonter и скрипт на шрифты

#### v2.00
- переход на Gulp, смена структуры шаблона, начальный сценарий (gulpfile.js)
- добавил папку "test" для тестирования всех модулей

#### v1.04
- резервная копия в GitHub, файл readme.md
- добавил и доделал шаблоны шаблоны (menu, popup, scroll_lock, media_switcher, random, onload_counter, input_checkbox, accordion_css, accordion_js, selection)
- в некоторых шаблонах использован конструктор

#### v1.03
- добавил модули в scss (fonts, mixins, popups, print)
- добавил папку для сборки js

#### v1.02
- убрал поддержку IE (ie.scss, detect.js, script.js)
- добавил noscript.scss

#### v1.01
- файлы scss разбиты на блоки (main, reset, settings, style)

#### v1.00
- созданы папки
- файлы index.html, main.scss, script.js, .gitignore, .gitattributes
- поддержка ie (detect.js)