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

    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
    });

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
        $('.dropdown-content').removeClass('show');
        $(this).parent().find('.dropdown-content').addClass('show');
    });

    $(".moving-mouse-holder").click(function() {
        window.scrollTo({
            top: $( window ).height(),
            behavior: "smooth"
        });
    });

    $('.slider .slick-slide').click(function() {
        $('#free-demo-dialog').addClass('open');
    });
})();