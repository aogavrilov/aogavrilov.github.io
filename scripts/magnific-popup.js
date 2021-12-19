$.extend(true, $.magnificPopup.defaults, {
    tClose: 'Закрыть', // Alt text on close button
    tLoading: 'Загрузка %curr% фото', // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
        tPrev: 'Назад', // Alt text on left arrow
        tNext: 'Вперед', // Alt text on right arrow
        tCounter: '%curr% из %total%' // Markup for "1 из 8" counter
    },
    image: {
        tError: '<a href="%url%">Фото</a> не может быть загружено' // Error message when image could not be loaded
    },
});


$('.gallery-item').magnificPopup({
    type: 'image', //type
    closeOnContentClick: false, //don't close when click on img
    closeOnBgClick: false, //don't close when click on background
    enableEscapeKey: true, //close when click (esc)
    alignTop: false, //img in the center
    removalDelay: 300, //delay for animation using
    mainClass: 'mfp-fade', //string that contains classes that will be added to the root element of popup wrapper and to dark overlay
    showCloseBtn: true, //show close button
    gallery: {
        // options for gallery
        enabled: true,
        preload: [1,3], //will load 3 next items and 1 that is before current
        navigateByImgClick: false, //don't navigate when click on img
    },
    image: {
        titleSrc: function() {return 'Нажми на картинку';}, //title
    },
});

$(document).ready(function () {
    $(document).on("click", ".mfp-img", function () {
        if (this.alt !== 'alt')
            window.location.href = this.alt;
    });
});