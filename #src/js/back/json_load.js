// To do: добавить построение html кода из json файла (как initVirtual в teveres)
async function jsonLoad(filepath) {
	if (!filepath) return;
	let response = await fetch('./' + filepath);
	if (response.ok) {
		console.log('Loaded "' + filepath + '"');
		return response.json();
	}
	else console.log('Failed to load "' + filepath + '"');
}