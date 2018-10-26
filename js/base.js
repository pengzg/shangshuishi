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
       
      });

      $('#imgSwiper').swiper({
        //分页器
        pagination:'#imgSwiper .swiper-pagination'
        ,paginationClickable:true
        //自动播放
        ,autoplay:2000
        ,autoplayDisableOnInteraction:false
        //循环
        , loop:true
       
      });

      $('#aboutSwiper').swiper({
        //分页器
        pagination:'#aboutSwiper .about-swiper-pagination'
        ,paginationClickable:true
        //自动播放
        ,autoplay:2000
        ,autoplayDisableOnInteraction:false
        //循环
        , loop:true
        //左右按钮
        ,prevButton:'.about-swiper-button-prev'
        ,nextButton:'.about-swiper-button-next'
      });

});