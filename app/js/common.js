var day = 12;
var hours = 22;
var minutes = 12;

var remain_bv   = day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;

    var day = Math.floor( (timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var secs = Math.floor(timestamp - hour*60*60 - mins*60);
    var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

    $('.afss_day_bv').text(day);
    $('.afss_hours_bv').text(left_hour);

    if(String(mins).length > 1)
        $('.afss_mins_bv').text(mins);
    else
        $('.afss_mins_bv').text("0" + mins);
    if(String(secs).length > 1)
        $('.afss_secs_bv').text(secs);
    else
        $('.afss_secs_bv').text("0" + secs);

}

$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if(remain_bv <= 0){
            alert('Hello');
        }
    }, 1000);
});


$('.catalog_items').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    nav: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})