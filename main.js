(function() {
    const freeDemoDialog = document.getElementById('free-demo-dialog');

    freeDemoDialog.addEventListener('click', function(event) {
        const target = event.target;
        if ( ! target.closest('.dialog')) {
            freeDemoDialog.classList.remove('open');
        }
    });

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
})();