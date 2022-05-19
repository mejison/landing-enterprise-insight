(function() {
    const freeDemoDialog = document.getElementById('free-demo-dialog');

    freeDemoDialog.addEventListener('click', function(event) {
        const target = event.target;
        if ( ! target.closest('.dialog')) {
            freeDemoDialog.classList.remove('open');
        }
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
    }

    let speeds = [2500, 1500, 1800, 2500, 3000];

    $('.slider').each(function(index) {
        $(this).slick({
            dots: true,
            arrows: false,
            speed: 1000,
            autoplaySpeed: speeds[index],
            infinite: true,
            slidesToShow: 1,
        });
    });
    
    let sliders = [];

    $('.slider').each(function() {
        let {top} = $(this).offset();
        sliders = [
            ...sliders,
            {
                el: $(this).first(),
                top,
            }
        ]
    });

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY
        sliders.forEach(function(slide) {
            if (scrollY + 300 >= slide.top) {
                $(slide.el).slick('slickSetOption', {
                    autoplay: true
                }, true);
            }
        });

        if (scrollY >= $(window).height() - 200) {
            $('.moving-mouse-holder').fadeOut();
        }
        if (scrollY <= 50) {
            $('.moving-mouse-holder').fadeIn();
        }
    }, false);

    $("[name='phone']").formatPhoneNumber();
    
    $('.free-demo-open').click(function() {
        $('#free-demo-dialog').addClass('open');
    });

    $('#free-demo-cancel').click(function() {
        $('#free-demo-dialog').removeClass('open');
    });

    $('#sidebar-close').click(function() {
        $('.sidebar-mobile').toggleClass('open');
    });

    $('#burger').click(function() {
        $('.sidebar-mobile').addClass('open');
    });

    $('.dropbtn').click(function() {
        $('.dropdown-content').not($(this).parent().find('.dropdown-content')).removeClass('show');
        $(this).parent().find('.dropdown-content').toggleClass('show');
    });

    $(".moving-mouse-holder").click(function() {
        window.scrollTo({
            top: $( window ).height(),
            behavior: "smooth"
        });
    });

    let isDragging = false;
    $('.slider .slick-slide')
        .mousedown(function() {
            $(window).mousemove(function() {
                isDragging = true;
                $(window).unbind("mousemove");
            });
        })
        .mouseup(function() {
            var wasDragging = isDragging;
            isDragging = false;
            $(window).unbind("mousemove");
            if (!wasDragging) {
                $('#free-demo-dialog').addClass('open');
            }
        });

    $('.macbook').click(function() {
        $('#free-demo-dialog').addClass('open');
    });

    $('#free-demo-form, #contact-us-form').submit(function(event) {
        event.preventDefault();
        let data = {
            name: $("[name='name']").val(),
            email: $("[name='email']").val(),
            organization: $("[name='organization']").val(),
            job_title: $("[name='job_title']").val(),
            phone: $("[name='phone']").val(),
        };

        if ($('[name="agree"]').is(":checked")) {
            console.log(data);

            swal({
                position: 'top-end',
                type: 'success',
                icon: 'success',
                title: 'Form successfully submitted',
                text: 'You will be contacted',
                showConfirmButton: true,
              })
        }
    });
})();