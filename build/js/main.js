const $ = window.$;

window.onload = function() {
    $('#menu-bar').click(()=>{
        $('#side-bar').toggle();
    });
};