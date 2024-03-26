const response = await fetch('./allcodes.json')
const json = await response.json()
let arrow = ''
let list = ''
let mode = [
	[37, 39, 38, 40],
	[65, 68, 87, 83],
]
let flip = 0
$(document).ready(function () {
	$('#switch').prop('value', 'Switch : 🡹🡻🡸🡺')
	$('#textbox').attr('value', arrow)
})
$(document).keydown(function (e) {
	if (e.which === mode[flip][0]) {
		arrow += '🡸 '
		list += '2'
		$('#textbox').attr('value', arrow)
	}
	if (e.which === mode[flip][1]) {
		arrow += '🡺 '
		list += '4'
		$('#textbox').attr('value', arrow)
	}
	if (e.which === mode[flip][2]) {
		arrow += '🡹 '
		list += '1'
		$('#textbox').attr('value', arrow)
	}
	if (e.which === mode[flip][3]) {
		arrow += '🡻 '
		list += '3'
		$('#textbox').attr('value', arrow)
	}
})
$('#clear').click(function () {
	arrow = ''
	list = ''
	$('#textbox').attr('value', '')
})
$('#switch').click(function () {
	if (flip == 0) {
		flip = 1
		$('#switch').prop('value', 'Switch : WSAD')
	} else if (flip == 1) {
		flip = 0
		$('#switch').prop('value', 'Switch :🡹🡻🡸🡺')
	}
})
$('#check').click(function () {
	let flipFlop = false
	for (let i in json.Stratagem) {
		if (json.Stratagem[i].code == list) {
			console.log(json.Stratagem[i].name)
			flipFlop = true
		}
	}
	if (flipFlop == false) {
		console.log('No match')
	}
	arrow = ''
	list = ''
	$('#textbox').attr('value', '')
})
$('#challange').click(function () {
	alert(json.Stratagem[Math.floor(Math.random() * json.Stratagem.length)].name)
})
