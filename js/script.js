$(function(){
    var progressValue = $('.progress-bar__value'),
        progressFill = $('.progress-bar__fill');

    for(a=0; progressValue.length > a; a++){
        var size = progressValue[a].innerText.slice(0, -1);
        $(progressFill[a]).css({ "width": size + '%'})
    }
})