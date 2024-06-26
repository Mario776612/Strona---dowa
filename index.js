const response = await fetch('./allcodes.json')
const json = await response.json()
let arrow = ''
let list = ''
let mode = [
	[37, 39, 38, 40],
	[65, 68, 87, 83],
]
let flip = 0

let numbersToArrows = (a) => {
	let arrows = a.replace(/2/g, '🡸 ')
				 .replace(/4/g, '🡺 ')
				 .replace(/1/g, '🡹 ')
				 .replace(/3/g, '🡻 ');
	return arrows;
  }

$(document).ready(function () {
	$('#switch').prop('value', 'Switch : 🡹🡻🡸🡺')
	$('#textbox').attr('value', arrow)
	for (let i in json.Stratagem) {
		$('#Cus-select ,  #Codes-select').append($('<option>', {
			value: json.Stratagem[i].code,
			text: json.Stratagem[i].name
		}));
	}
	$('#CustomWindow').hide();
	$('#ChallangeWindow').hide();
	$('#StratagemsCodes').hide();
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
$('#switch').click(function () {
	if (flip == 0) {
		flip = 1
		$('#switch').prop('value', 'Switch : WSAD')
	} else if (flip == 1) {
		flip = 0
		$('#switch').prop('value', 'Switch :🡹🡻🡸🡺')
	}
})
let toggleWindow = (windowSelector, flipF) => {
    if (flipF) {
        $(windowSelector).show();
        $('#anwser').text('');
        flipF = false;
    } else {
        $(windowSelector).hide();
        flipF = true;
    }
    return flipF;
}

let flipFlop2 = true;
$('#Custom').click(function() {
    flipFlop2 = toggleWindow('#CustomWindow', flipFlop2);
});
let flipFlop1 = true
$('#challange').click(function () {
	flipFlop1 = toggleWindow('#ChallangeWindow' , flipFlop1)
});
let flipFlop3 = true
$('#sCodes').click(function() {
	flipFlop3 = toggleWindow('#StratagemsCodes' , flipFlop3)
});

let clear = () => {
	arrow = ''
	list = ''
	$('#textbox').attr('value', '')
}

$('#clear').click(function () {
	clear();
	$('#anwser').text(' ')
})

let CustomStratagemList = []
let CustomStratagemListArrow = []
$('#Cus-apply').click(function(){
	let add = $('#Cus-select').val()
	CustomStratagemList.push(add)
	CustomStratagemListArrow.push(numbersToArrows(add))
	$('#textbox2').attr('value', CustomStratagemListArrow)

})
$('#check').click(function () {
	let flipFlop = false
		if(flipFlop2 == true){
			for (let i in json.Stratagem) {
				if (json.Stratagem[i].code == list) {
					$('#anwser').text(json.Stratagem[i].name)
					$('#anwser').css('color' , `${json.Stratagem[i].color}`);
					flipFlop = true;
			}
		}
	}else if(flipFlop2 == false){
		for(let j in CustomStratagemList){
			if (list == CustomStratagemList[j]) {
				CustomStratagemList.splice(j , 1)
				CustomStratagemListArrow.splice(j , 1)
				$('#textbox2').attr('value', CustomStratagemListArrow)
				flipFlop = true;
			}
	}
}
	if (flipFlop == false) {
		$('#anwser').css('color' , `black`);
		$('#anwser').text('No match')
	}
	clear()
})

$('#Codes-apply').click(function () {
	let value = $('#Codes-select').val()
	alert(numbersToArrows(value))
})
