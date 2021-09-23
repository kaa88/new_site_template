let formToEmail = {};
formToEmail.send = async function(e) {
	e.preventDefault();
	let report = e.target.querySelector('.form-report');
	report.classList.remove('ok');
	report.classList.remove('er');
	if (this.check(e.target)) {
		report.classList.add('er');
		report.innerHTML = 'Заполните необходимые поля';
		return;
	}
	let formData = new FormData(e.target);
	formData.append('form', e.target.getAttribute('name'));
	// Add elems that ignored by new FormData 
	this.addCustomInputs(e, formData, 'input-range');
	// /

	this.log(formData); // check the correctness

	e.target.classList.add('_sending');
	let response = await fetch('php/sendmail.php', {
		method: 'POST',
		body: formData
	});
	if (response.ok) {
		report.classList.add('ok');
		report.innerHTML = 'Сообщение отправлено';
		this.clean(e.target);
	}
	else {
		report.classList.add('er');
		report.innerHTML = 'Ошибка при отправке формы';
	}
	e.target.classList.remove('_sending');
}
formToEmail.check = function(form) {
	let errors = 0;
	let inputs = form.querySelectorAll('input, textarea');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].classList.remove('_error');
		if (inputs[i].classList.contains('_req') && inputs[i].value == '') {
			inputs[i].classList.add('_error');
			errors++;
			continue;
		}
		switch (inputs[i].getAttribute('name')) {
			case 'name':
				if (inputs[i].value && /^.{2,}$/.test(inputs[i].value) == false) {
					inputs[i].classList.add('_error');
					errors++;
				}
				break;
			case 'email':
				if (inputs[i].value && /^[a-zA-Z-.]{3,}@[a-z]{3,}\.[a-z]{2,5}$/.test(inputs[i].value) == false) {
					inputs[i].classList.add('_error');
					errors++;
				}
				break;
			case 'phone':
				if (inputs[i].value && /^[0-9]{10,}$/.test(inputs[i].value) == false) {
					inputs[i].classList.add('_error');
					errors++;
				}
				break;
		}
	}
	return errors;
}
formToEmail.log = function(formData) {
	for (let pair of formData.entries()) {
		console.log(pair[0] + ': ' + pair[1]);
	}
}
formToEmail.addCustomInputs = function(e, form, elemName) {
	let elem = e.target.querySelectorAll('.' + elemName);
	for (let i = 0; i < elem.length; i++) {
		form.append(elem[i].getAttribute('name'), elem[i].getAttribute('value'));
	}
}
formToEmail.clean = function(form) {
	let inputs = form.querySelectorAll('input, textarea');
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].hasAttribute('name'))
			inputs[i].value = '';
	}
}
for (let i = 0; i < document.forms.length; i++) {
	document.forms[i].addEventListener('submit', formToEmail.send.bind(formToEmail));
}