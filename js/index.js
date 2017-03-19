/**
 * Created by Administrator on 2017/3/19.
 */
$(function () {
    var page = 0;
    var perAnimater = 750;
    var currentLeft=0;
    console.log($('.banner-contianer').offset().left);
    $("#pointer a:first-child").on('click',function (event) {
        if(page>0){
            --page;
            $('.page_item_span span').eq(page).addClass('current-index').siblings().removeClass();
           /* var currentLeft = $('.banner-contianer').offset().left;*/
            currentLeft+=perAnimater;
            $('.banner-contianer').animate({left:currentLeft},'slow');
            console.log(page +" :"+ currentLeft);
        }

    });
    $("#pointer a:last-child").on('click',function (event) {
       if(page<4){
           ++page;
        /*   var currentLeft = $('.banner-contianer').offset().left;*/
           $('.page_item_span span').eq(page).addClass('current-index').siblings().removeClass();
           currentLeft-=perAnimater;
           $('.banner-contianer').animate({left:currentLeft},'slow');
           console.log(page +" :"+ currentLeft);
       }
    });
    $(".page_item_span span").on('click',function (event) {
          page=$(this).index();
         $('.page_item_span span').eq(page).addClass('current-index').siblings().removeClass();
        currentLeft = -page*perAnimater;
        $('.banner-contianer').animate({left:currentLeft},'slow');
    })
});