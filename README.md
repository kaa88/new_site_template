# New site template v1.04

### Шаблоны элементов:
- menu (html, css, js)
- popup (html, css, js)
- scroll_lock (js)
- media_switcher (js)
- random (js)
- onload_counter (js)
- input_checkbox (html, css)
- accordion_css (html, css)
- accordion_js (html, css, js) - сделать конструктор
- selection (html, css, js)
##### Сделать:
- input_range (html, css, js) - доделать, разобраться в jq-ui.css
- accordion_jq c jq-ui
- неактивная кнопка текущей страницы
- кнопка "наверх" в разных вариантах


### Папки:
#design, #js, #kit, #old, #scss, css, fonts, img, js

### Комментарии по работе:
После создания нового репозитория удалить название у файла .gitignore.

---

### План развития:

#### Задача:
для ускорения процесса разработки наработать различные модули шаблона:
- html: использовать сборщик типа kit или gulp с инклудами + формулы
- css: шаблоны "особых" вещей (бургер, модал. окна и т.д.), переменные (шрифты, медиа, цвета?) и еще что-то
- js: шаблоны базовых функций (бургер, модал. окна, рандом и т.д.)

Учить горячие клавиши, создавать сниппеты, искать полезные плагины.<br>
При выключенном JS применять деградацию: замена скриптованных элементов прямыми ссылками (?)

Нужен GULP!

---

### Changelog:
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