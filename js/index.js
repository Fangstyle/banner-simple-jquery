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
            page--;
           /* var currentLeft = $('.banner-contianer').offset().left;*/
            currentLeft+=perAnimater;
            $('.banner-contianer').animate({left:currentLeft},'slow');
            console.log(page +" :"+ currentLeft);
        }

    });
    $("#pointer a:last-child").on('click',function (event) {
       if(page<4){
        /*   var currentLeft = $('.banner-contianer').offset().left;*/
           currentLeft-=perAnimater;
           $('.banner-contianer').animate({left:currentLeft},'slow');
           page++;
           console.log(page +" :"+ currentLeft);
       }
    });
});