# New site template v1.03

### Шаблоны элементов:
- menu (html, css, js) - готово
- popup (html, css, js) - доделать
- input_checkbox (html, css) - проверить
- input_range (html, css, js) - доделать, разобраться в jq-ui.css
- ...

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

#### Список элементов, которым нужны шаблоны:
- основное меню с бургером
- модал. окно
- попап
- загрузочный счетчик
- input range
- чекбокс
- выпадающий список
- неактивная кнопка текущей страницы
- аккордеон
- кнопка "наверх" в разных вариантах
- ...
---

### Changelog:
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