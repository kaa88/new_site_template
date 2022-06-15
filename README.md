# New site template v3.01

### TO DO:
- CSS пометить важные свойства, из-за которых сломается модуль, комментом //REQ!

Для WordPress:
- мой шаблон меню поменять, чтобы можно было легко встроить в ВП
- некоторые иконки, которые предполагается менять, делать не шрифтом, а svg
- robots.txt для ВП
- всегда хранить копии медиафайлов, т.к. ВП их иногда 'теряет'
- список плагинов
- уметь настраивать поля через ACF (если захочет заказчик), сделать шаблон с настройками ACF


- tabs добавить on-func ?
- scrolling navigation (mogo)
- swiper: переработать html теги по бэму
- css scroll snap спецификация
- VS Code попробовать (+ы: консоль, подключение шрифтов с googlefonts через плагин...)
- лого АА

НОВОЕ ПОРТФОЛИО:
- фоновая картинка с параллаксом
- профиль инфо приклеено слева как aside
- работы крупнее раза в 2-3
- описание появляется при ховере с какой-нибудь интересной анимацией
- убрать картинки html css js
- load-анимация (возможно раскрывающиеся шторки на весь экран с приветствием)

### Навыки:
Учить горячие клавиши, создавать сниппеты, искать полезные плагины.
При выключенном JS применять деградацию: замена скриптованных элементов прямыми ссылками (?)

-----

### Начало работы:
- создать папку проекта
- скопировать все файлы, кроме readme.md и папки '.git'
- в коммандной строке прописать "npm i" для установки gulp
- поместить макет в папку '#design'

### Правила:
- использовать БЭМ нейминг
- html делать отдельный файл для модулей
- css @media писать внутри каждого элемента
- css ко всем ссылкам добавлять :visited
- для retina изображения в src сохранять только в 2х (остальное нарежет gulp)
- изображения, которые не нужно сжимать, помечать знаком '$'

-----

### Готовые шаблоны:
front:
- js_media_queries (js)							|
- scroll_lock (js)								|
- transition_lock (js)							|
- random (js)										|
- header (html, css, js)						|
- footer (html, css, js)						|
- modal (html, css, js)							|
- accordion_css (html, css)					|
- accordion_js (html, css, js)				|
- select (html, css, js)						|
- simple_counter (js)							|
- input_checkbox (html, css)					|
- input_radio (html, css)						|
- input_range_colored (html, css, js)		|
- input_range_double (html, css, js)		|
- video_player (html, css, js)				| сделать доп оптимизацию для свайпера
- loadscreen (html, css, js)					|
- spoiler (html, css, js)						|
- up_button (html, css, js)					|
- tabs (html, css, js)							|
- qr-code (js)										|
- parallax (html, js)							|
- intersection (js)								|
- pagination (html, css, js)					|
- cookies (js)										|
- popup (html, css, js)							|
back:
- form_to_email (html, css, js, php)		| добавить загрузку картинок
- json_load (js)									|

### Папки:
#src →
	#design
	css →
		modules
	data
	fonts →
		otf
	js →
		back
		front
	libs
	media →
		audio
		doc
		img
		video
	parts
	service
	temp
	wp_custom_theme →
		functions
---

### Changelog:

#### v3.01
- cookies module
- popup module
- footer: добавлен расчет css-переменной для блока main, чтобы он занимал весь экран (как при body display flex, только не ограничивает высоту body)
- spoiler: переделан расчет высоты (через wrapper), добавлена отложенная загрузка (неправильно расчитывал размер контента, если еще не подгружен шрифт)
- настройки gulp для WP: автозамена расширения с html на php, замена dist на assets
- изменено расположение html файлов для совместимости с WP, куски php кода уже в html
- light build изменена проверка: теперь папка без light, а в верстке появляется предупреждение внизу страницы
- тест шрифтов в базовом h1 (в style.scss)
- тест svg в index.html
- мелкие исправления

#### v3.00 - WordPress
- перестройка шаблона под Wordpress
- добавлен шаблон темы WP (настройки темы и Carbon fields)
- добавлена совместимость хедера с wp-adminbar

#### v2.13
- gulp: LightBuild, нарезка favicon, поддержка вложенных папок, streamqueue, оптимизация кода
- реорганизованы папки и файлы
- в head поддержка иконок для всех устройств
- print version update

#### v2.12
- parallax module
- intersection module - подгрузка секциями
- pagination module
- counter обновлен (теперь simple_counter)
- accordion / spoiler: добавлен пересчет высот при ресайзе
- удалены: swiper_customs, module_check_and_load
- mobileSwitchWidth (jmq.mobile) переделан в css-переменную и считывается скриптом
- form email RegExp обновлен
- template обновлен
- script.js убрал описание модулей внутрь
- jQuery вставил ссылку на CDN вместо папки libs
- мелкие исправления

#### v2.11
- header: переработана структура (многоэтажка), теги, стили, скрипт, исправлены баги
- select: исправлены баги при взамодействии нескольких селектов
- scroll-lock: переработан, поддерживает несколько вариантов работы (scroll-lock-item-)
- modal.js добавлена проверка открыто ли меню
- добавлены формулы в миксины (расчет размеров)
- QR-код для print версии
- страница 404 (html, css, .htaccess)
- переменные цветов и шрифтов переделаны обратно (упрощены): style, header, footer, main
- templates обновлен
- gulpfile: добавил папку html
- мелкие исправления

#### v2.10
- recounter переделан в js_media_queries, в нее убрана mobileSwitchWidth
- scroll_lock: можно добавить дополнительные эл-ты к выборке путем добавления класса; исправлены баги
- новая функция getRandomId
- module check & load выделен в отдельный модуль
- обновлены: select, loadscreen, spoiler
- header: 
	- полная (наверное) поддержка submenu, можно делать один общий или несколько в каждом пункте меню, поддержка нескольких уровней вложенности
	- header.js взаимодействует с css переменной, сам считает высоту menu
- исправления для повышения удобства разработки: css переменные, noscript, reset, style.css
- project-note.md для текущих записей по проекту
- мелкие исправления

#### v2.09
- gulpfile: other stuff тоже обрабатывает только измененный файл; 
	можно обозначить ($ в имени файла) изображения, которые не надо сжимать
- mixin functions (rem, em) + sass_math
- tabs module
- swiper_simple module (script.js)
- module check & load изменения в первой части (при мгновенной загрузке)
- header.html добавлен шаблон "многоэтажного" меню
- scroll_lock добавлен пересчет при рекаунте (script.js, scroll-lock.js)
- select update (js, css)
- мелкие исправления

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

#### v2.00 - Gulp
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