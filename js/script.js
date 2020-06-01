$(function(){
    var progressValue = $('.progress-bar__value'),
        progressFill = $('.progress-bar__fill');

    for(a=0; progressValue.length > a; a++){
        var size = progressValue[a].innerText.slice(0, -1);
        $(progressFill[a]).css({ "width": size + '%'})
    }
});

$('.slider-depiction').slick({
    // arrows: false
    prevArrow: $('.slider-depiction__arrow-prev'),
    nextArrow: $('.slider-depiction__arrow-next'),
    asNavFor: '.slider-description'
});
$('.slider-description').slick({
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.slider-depiction'
})