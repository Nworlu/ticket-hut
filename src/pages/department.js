import $ from 'jquery'

$(function () {
    $('.homepage-event').show();

    $('#select-host').on("change", function (){
        $('.homepage-event').hide();
        $('.'+$(this).val()).show();

    });
});