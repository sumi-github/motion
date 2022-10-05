$(function(){
    $('#banner li:nth-child(1)').click(function(){
        $('.popup1').fadeIn();//show()
    });
    $('#banner li:nth-child(2)').click(function(){
        $('.popup2').fadeIn();//show()
    });
    $('#banner li:nth-child(3)').click(function(){
        $('.popup3').fadeIn();//show()
    });
    $('#banner li:nth-child(4)').click(function(){
        $('.popup4').fadeIn();//show()
    });

    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide()
    });
});