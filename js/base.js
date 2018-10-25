/* 上水石 author:pengzg */
$(function(){

    $('#mySwiper').swiper({
        //分页器
        pagination:'#mySwiper .swiper-pagination'
        ,paginationClickable:true
        //自动播放
        ,autoplay:2000
        ,autoplayDisableOnInteraction:false
        //循环
        , loop:true
        //左右按钮
        ,prevButton:'.swiper-button-prev'
        ,nextButton:'.swiper-button-next'
      });

});