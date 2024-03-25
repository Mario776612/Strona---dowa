let arrow = '';
let mode = [[37,39,38,40],[65,68,87,83]]
let flip = 0;
$( document ).ready(function() {
    $('#switch').prop('value',"Switch : ⬆️⬇️⬅️➡️")
})
$(document).keydown(function(e){
    if (e.which === mode[flip][0]) { 
       arrow += "⬅️";
       $('p').text(arrow)
    }
    if (e.which === mode[flip][1]){
        arrow += "➡️";
        $('p').text(arrow)
    }
    if (e.which === mode[flip][2]){
        arrow += "⬆️";
        $('p').text(arrow)
    }
    if (e.which === mode[flip][3]){
        arrow += "⬇️";
        $('p').text(arrow)
    }
});
$('#clear').click(function(){
    arrow = '';
    $('p').text('')
 });
 $('#switch').click(function(){
    if(flip == 0){
        flip = 1
        $('#switch').prop('value',"Switch : WSAD")
    }else if(flip == 1){
        flip = 0
        $('#switch').text('value',"Switch :⬆️⬇️⬅️➡️")
    }
 });