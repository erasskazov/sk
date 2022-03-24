var slider = tns({
  container: '.our-works__carousel',
  items: 8,
  slideBy: 'page',
  slideBy: 1,
  autoWidth: true,
  autoplay: false,
  controls: false,
  mode: "carousel",
  nav: false,
  loop: true,
//   autoWidth: true,
//  rewind: true,
//   autoWidth: true,
//  autoplayButtonOutput: false,
   center: true,
//   autoplayHoverPause: true,
//   autoplayButton: false,
  autoHeight: true,
  viewportMax: 1
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

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