# New site template v2.08

### TO DO:
- раздел fonts в style.css для подключения шрифтов google fonts?
- попап переработать
- grid-slider
- scrolling navigation (mogo)
- сниппеты sublime: appdata>roaming>sublimetext3>packages>user здесь создать файл имя.snippet,
	туда вставить код из snippet generator
	pseudo, for, console.log...

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
- recounter (js)									OK
- transition_lock (js)							OK
- scroll_lock (js)								OK
- random (js)										OK
- onload_counter (js)							OK
- header (html, css, js)						OK
- footer (html, css)								OK
- modal (html, css, js)							OK
- accordion_css (html, css)					OK
- accordion_js (html, css, js)				OK
- select (html, css, js)						OK
- input_checkbox (html, css)					OK
- input_radio (html, css)						OK
- input_range_colored (html, css, js)		OK
- input_range_double (html, css, js)		OK
- form_to_email (html, css, js, php)		OK, добавить загрузку картинок
- video_player (html, css, js)				OK, в будущем сделать доп оптимизацию для свайпера
- swiper_customs (js)							OK, в будущем переделать initVirtual в модуль
- json_load (js)									OK
- module_loader (js)								OK
- loadscreen (html, css, js)					OK
- spoiler (html, css, js)						OK
- up_button (html, css, js)					OK

### Папки:
design, #src (css, js, php, libs, fonts(otf), img, other_stuff, temp)

### Комментарии по работе:
- скопировать все файлы в новый репозиторий
- в коммандной строке прописать "npm i" для установки gulp
- удалить название у файла .gitignore

### Правила:
- использовать БЭМ нейминг
- html делать отдельный файл для одинаковых модулей
- css @media писать внутри каждого элемента
- css ко всем ссылкам добавлять :visited
- для retina изображения в src сохранять только в 2х (остальное нарежет gulp)

---

### Changelog:

#### v2.08
- new spoiler module
- исчезающая кнопка "наверх"

#### v2.07
- во многих скриптах изменена структура, добавлены проверки
- конструкторы переделаны в классы
- header, modal: таймер считывается сам из CSS (нужно установить переменную в элемент body)
- header: добавлен блок Submenu
- modal: обновлены стили
- video_player: поддержка нескольких видео (играет только 1, уровень звука один для всех)
- scroll_lock упрощен
- мелкие исправления

#### v2.06
- gulp при сохранении копирует не все файлы, а измененный (кроме модулей)
- gulp добавлена обработка картинок (ретинизация и сжатие)
- mobileSwitch переделан в recounter, теперь поддерживает несколько брейкпоинтов
- modal: добавлено открытие другого модала из предыдущего, общий закрывающий фон, ссылки вместо эвентов
- добавлен loadscreen
- video модуль: обновлены css js, new videosample
- svg sprite module (html & reset.scss)
- hiding header сам считает высоту хедера
- new globs.scss
- phone mask для формы
- select добавлен вызов функции при выборе
- scroll_lock переделан toggle
- footer упрощен
- templates update
- мелкие исправления

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