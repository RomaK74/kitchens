$(document).ready(() => {
    $("#portfolio").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
    });

    $('#count').click(() => {
        $('#popup_container').css('display', 'flex');
    });

    $('#popup_container').click((e) => {
        if (e.target.id === 'popup_container')
            $('#popup_container').hide();
    })

    $('.sub_button > button').click(() => {
        if(name.val() && tel.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&tel=' + tel.val(),
                success: () => {
                    $('#popup_message').show();
                    $('#popup_close').hide();
                },
                error: () => {
                    $('#popup_container').hide();
                    alert('Ошибка. Свяжитесь по номеру телефона 89943513515');
                }
            })
        } else {
            $('#input-error').show();
        }
    });

    $('#popup-name').keypress(  (event) => {
        let nameCheck = parseInt(event.key);
        if (!(isNaN(nameCheck))) {
            event.preventDefault();
        }
    });

    $('.sub_button > button').click((event) => {
        event.preventDefault();
    })

    $('#popup-tel').keypress(  (event) => {
        let nameCheck = parseInt(event.key);
        if (isNaN(nameCheck)) {
            event.preventDefault();
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu_open');
    });

    $('#main #header #menu .menu_item').click(() => {
        $('#header').removeClass('menu_open');
    });
})