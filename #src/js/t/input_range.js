// Input range
// Required jquery.js & jquery-ui.js
$('.jq-slider').slider({
	min: 0,
	max: 1000,
	value: 300,
	range: 'min', // окрашивает область до ползунка
	slide : function(event, ui) {    
            $('#jq-slider-count').text(ui.value); // обработчик события
            $('.slider-bubble').text(ui.value); // обработчик события окошка
        }
});
$('#jq-slider-count').text($('.jq-slider').slider('value')); // установка значения при инициализации
// далее я добавляю скриптом окошко со значением, т.к. DOM элементов таких нет
$('.ui-slider-handle').append('<span class="slider-bubble"></span>');
$('.slider-bubble').text($('.jq-slider').slider('value'));
// /
