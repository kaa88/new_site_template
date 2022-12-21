# New site template v4.00

### TO DO:

Для WordPress:
- проверить gulp-html-clean с php
- проверить "bodyclass"
- всегда хранить копии медиафайлов, т.к. ВП их иногда 'теряет'
- список плагинов
- сделать шаблон с настройками ACF


- упростить базовый шаблон, редкие вещи (типа animated burger) комментировать, все необходимые эл-ты раскрасить в разные цвета, добавить комментарии что и для чего нужно
- после размера fullhd нужно чтобы сайт был на весь экран, всё пропорционально увеличилось, чтобы не было микро размера в 4к
- перейти бы на "em()" на постоянку
- scroll_lock - подумать как улучшить useDefaultGroups
- возможно сделать отдельный модуль maskInputFill и дополнить другими типами инпутов
- video_player сделать доп оптимизацию для свайпера
- tabs добавить on-func ?
- scrolling navigation (mogo)
- css scroll snap спецификация
- VS Code попробовать (+ы: консоль, подключение шрифтов с googlefonts через плагин...)

НОВОЕ ПОРТФОЛИО:
- фоновая картинка с параллаксом
- профиль инфо приклеено слева как aside
- работы крупнее раза в 2-3
- описание появляется при ховере с какой-нибудь интересной анимацией
- убрать картинки html css js
- load-анимация (возможно раскрывающиеся шторки на весь экран с приветствием)

-----

### Начало работы:
- создать папку проекта
- скопировать все файлы, кроме readme.md и папки '.git'
- в коммандной строке прописать "npm i" для установки gulp
- поместить макет в папку 'design'
- сделать снимок макета из Figma (на случай, если нет интернета)

### Правила:
- использовать БЭМ нейминг
- html делать отдельный файл для модулей
- css @media писать внутри каждого элемента
- для retina изображения в src сохранять только в 2х (остальное нарежет gulp)
- изображения, которые не нужно сжимать, помечать знаком '$'

### Навыки:
! Писать всё по-английски (в будущем перевести весь шаблон и readme)
- правильно именовать переменные: значения - существительные, функции - глаголы, булевые - is
- функция должна делать одно действие и ее название должно отражать это действие
- писать комменты "зачем этот код"
- не хардкодить константы
- CSS пометить важные свойства, из-за которых сломается модуль, комментом //REQ!

-----

### Папки:
_src
|--_design
|--css
|  |--modules
|--data
|--fonts
|  |--otf
|--js
|  |--modules
|--libs
|--media
|  |--audio
|  |--doc
|  |--img
|  |--video
|--parts
|--service
|--temp
|--wp_custom_theme
   |--_lang
   |--functions

-----

### Changelog:

#### v4.00 - новая архитектура шаблона
- файл с настройками модулей 'loaded_modules.js' (куски кода сами добавляются в html, css и js при включении), так же в помощь добавлен html minify, который сам чистит мусор
- gulp-переменные - переменные модулей, а так же 'lite-build' и 'wordpress' (так же из бонусов - при верстке шрифты не выдают ошибку в девтулсах)
- style - унифицированные переменные типа media-mobile-xs (т.е. нет больше локальных переменных modal-header2)
- mixins.scss - обновления функций, описание
- aspect ratio переменные и миксин (style, mixins)
- colors.scss - теперь css-переменные через 'var' (в body) для более удобного добавления новых цветовых тем; добавлены переменные для градиентов
- globs - новые классы desktop-only, mobile-only, nowrap, стили для textarea
- добавлен component-test part для верстки всяких глобалок и тестов (#component-test.html)
- svg спрайт вместо iconfont + базовый спрайт иконок
- переделан svg.html, теперь вместо 'path' используется 'use' со ссылкой на спрайт
- 404 - удалил файл шаблона, т.к. он такой же как index (контент перенес в templates)
- папка img - _DUMMY@2x.jpg для быстрого добавления тестового изображения (так же добавлено в сниппеты)
- перенес класс page-home в @include ... 'bodyclass': 'page-home',
- добавлена переменная --window-height для правильного расчета высоты меню в мобильных браузерах с плавающими панелями
- новые модули:
	+ moduleReference (js) - "справочное бюро" для модулей или "модуль взаимодействия"
	+ prevent tabbing - отключает базовую табуляцию по инпутам (т.к. она ломает верстку, "скачет" через модалки и скрытые формы)
	+ position_marker - маркер, который считает позицию какого-то эл-та на странице
	+ time_select - выбор времени с выпадающим списком
	+ input-file - добавление файла к форме с превью и очисткой
	+ user_agent script - добавляет в body класс с названием браузера
	+ rotation alert (templates, css)
	+ copyright (css)
	+ dev-panel (начало) - панелька с нужными данными (переменные, aspect-ratio и т.д.)
- много исправлений и переделок модулей header, modal, scroll-lock, trans-lock для лучшей совместной работы, добавлены новые взаимодействия, протестировано в разных комбинациях
- header_metrics.js вынесен из хедера и выполняется в середине DOMа, предотвращает прыгание при пересчете высоты хедера
- header - разделены open и close buttons, добавлен button-box для open/close btns
- header - переделан submenu, поддерживается любая многоуровневая вложенность
- header - hidingHeader теперь и на десктопе, так же добавлен  compact mode
- header - возврат хедера с плавной анимацией (для menu и shareHeader)
- header - on-funcs
- header - настроил print версию (адрес, qr-code)
- menu burger - добавлен вариант с анимацией
- modal - on-функция теперь может срабатывать на всех окнах (параметр 'any')
- modal - добавлен расчет z-index, чтобы каждое новое окно открывалось свехру (раньше порядок был как указано в html)
- modal - теперь закрывает предыдущие окна при открытии новых
- modal - настройка для использования хедера shareHeader, крестик в хедере выключает модал
- form - обновил код, новые настройки, комменты, css классы
- form - переписал phoneMask (больше функциональности)
- form - добавил проверку через класс required-one
- form - добавлен скрипт для чекбоксов (вписывает value, чтобы делать проверки и вписывать в formdata)
- form - обновлена очистка формы - чекбоксы, радио, селекты чистит особым образом, так же чистку можно вызвать снаружи, указав селектор формы
- form - переписал систему сообщений, есть поддержка нескольких сообщений
- form - переписал прогресс-бокс, сделал адаптив, проверил положение в кнопке и в форме
- swiper модуль для верстки без интернета
- swiper print - заготовка для свайпера, чтобы перебивать враппер в грид с расстановкой auto-fit
- jsMediaQueries - исправлена ошибка, когда пропускаются брейкпоинты при развертывании окна на полный экран; добавлен testMode; mobile breakpoint теперь сам считывает переменную
- select - добавлен пересчет высоты враппера и сворачивание при ресайзе; добавлена функция reset; эвент для чистки из формы; поддержка error-класса формы
- gulp - убрал css_media_queries, добавил html cleaner'ы (2)
- мелкие исправления

#### v3.02
- header: если хедера нет в html, то скрипт создаст пустой хедер для того, чтобы работали переменные; позволяет отключать хедер без последствий
- вернул mobileSwitchWidth, чтобы была возможность отключать jsmediaqueries
- cookies небольшие изменения в описании и path
- ВП:
	много настроек в functions: images, exerpt, scripts
	добавлена информация по настройке .htaccess и robots.txt для ВП
	добавлена папка #lang и шаблон файла перевода .ро для Poedit
	single.php переделан шаблон
- мелкие исправления

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