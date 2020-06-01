$(function(){
    var progressValue = $('.progress-bar__value'),
        progressFill = $('.progress-bar__fill');

    for(a=0; progressValue.length > a; a++){
        var size = progressValue[a].innerText.slice(0, -1);
        $(progressFill[a]).css({ "width": size + '%'})
    }


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
$('.portfolio__bottom-grid').isotope({

});
$('.portfolio__bottom-button').on('click touchart', function(){
    $('.portfolio__bottom-button').removeClass('portfolio__bottom-button--active');
    $(this).addClass('portfolio__bottom-button--active');
    var filterValue = $(this).attr('data-i');
    console.log(filterValue)
    $('.portfolio__bottom-grid').isotope({ filter: filterValue})
})
// $('.portfolio__bottom-grid').isotope({
//     getSortData: {

//     }
// })
});