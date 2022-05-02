$(function(){
var charts = $('.myskill-wrap');
var chart = $('.chart');
var chartOST = chart.offset().top - 5000;
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
        var title = item.find('.s_box');
        var targetNum = title.attr('data-num');

        $({rate:0}).animate({rate:targetNum},
            {
                duration:4000,                
                progress:function(){
                    var now = this.rate;    
                    title.text(Math.floor(now)+'%');                    
                }
        });
    }); //chart each
}
});