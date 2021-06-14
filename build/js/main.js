const $ = window.$;

window.onload = function() {
    $('#menu-bar').click(()=>{
        $('#side-bar').toggle();
    });

    $('.input-number').on("wheel", function (e) {
        $(this).blur();
    });
};