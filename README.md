# New site template v2.01

### TO DO:
- модал: добавить функцию вызова из модального окна еще одного
- попап переработать
- selection: див красивее, но на мобиле тег selection открывается в полноэкранное меню (попробовать совместить)
- js: избавиться от undefined значений; использовать const и let; объекты, прототипы
- использовать стили для a:visited

Учить горячие клавиши, создавать сниппеты, искать полезные плагины.<br>
При выключенном JS применять деградацию: замена скриптованных элементов прямыми ссылками (?)

---

### Шаблоны элементов:
- menu (html, css, js)
- popup (html, css, js)
- scroll_lock (js)
- media_switcher (js)
- random (js)
- onload_counter (js)
- input_checkbox (html, css)
- accordion_css (html, css)
- accordion_js (html, css, js)
- selection (html, css, js)

##### Сделать:
- input_range (html, css, js) - доделать, разобраться в jq-ui.css
- accordion_jq c jq-ui ???
- неактивная кнопка текущей страницы
- кнопка "наверх" в разных вариантах
- scrolling navigation (mogo)
- simple slider


### Папки:
#src (css, js, fonts, img, temp), design

### Комментарии по работе:
После создания нового репозитория удалить название у файла .gitignore.

---

### Changelog:
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