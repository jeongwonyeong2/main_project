$(function(){
    var charts = $('.design_skill');
    var chart = $('.s_box');
    var chartOST = chart.offset().top - 700;
    // var excuted = false;
    // console.log(excuted);

    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST){
            if(!charts.hasClass('active')){
                animateChart();
                charts.addClass('active');
            }
        }
    });


function animateChart(){
    chart.each(function(){
        var item = $(this);
        var title = item.find('s_box');
        var targetNum = title.attr('data-num');

        $({rate:0}).animate({rate:targetNum},
            {
                duration:1500,
                progress:function(){
                    var now = this.rate;
                    console.log(data-num)
                    var amount = 630 - (630*now/100);
                    
                    title.text(Math.floor(now));
                    circle.css({strokeDashoffset:amount});
                }
        });
    }); //chart each
}
