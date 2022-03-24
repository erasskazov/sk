
lightbox.option({
    // albumLabel: 'Image %1 of %2',
    alwaysShowNavOnTouchDevices: false,
    fadeDuration: 600,
    fitImagesInViewport: true,
    imageFadeDuration: 600,
    maxWidth: 800,
    maxHeight: 600,
    positionFromTop: 50,
    resizeDuration: 700,
    showImageNumberLabel: true,
    wrapAround: false,
    sanitizeTitle: false
  })

// modal
$('[data-modal=call]').on('click', function() {
    $('.overlay, #call').fadeIn('slow')
});

$('.modal__close').on('click', function() {
    $('.overlay, #call, #thanks').fadeOut('slow')
});

function validateForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });        
};

validateForms('.modal form');

$('input[name=phone]').mask("+7 (999) 999-9999")

$('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");
        $('#call').fadeOut();
        $('form').trigger('reset');
        $('overlay, #thanks').fadeIn('slow');
    });
    return false;
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list-hamburger'),
    menuItem = document.querySelectorAll('.menu__item-hamburger'),
    hamburger = document.querySelector('.hamburger__item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__item_active');
        menu.classList.toggle('menu__list-hamburger_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__item');
            menu.classList.toggle('menu__list-hamburger');
        })
    })
})