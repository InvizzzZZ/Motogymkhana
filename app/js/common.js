(function ($) {
    $(function () {

        $('#up').click(function () {
            $('html, body').animate({scrollTop: 0}, 1000);
            return false;
        })

    })
})(jQuery);

$(function changeBG() {
    var count = 0;
    setInterval(function () {
        if (count === 0) $('body').removeClass('element3');
        $('body').removeClass('element' + count);
        count++;
        $('body').addClass('element' + count);
        if (count === 3){
            count = 0;
        }
    }, 5000);
});
