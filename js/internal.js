
$(document).ready(function () {

 
  //影片彈窗
  $(".video_bth").click(function () {
    $(".md_video").addClass("active");
  });

  //彈窗取消
  $(".md-close,.md .md-overlay").click(function () {
    $(".md").removeClass("active");
  });

  //gotop
  $('.gotop').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 800);
  });
  //高度200 gotop出現
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });


  //手機選單
  $(".menu_button,header .md-overlay,.menu_mob a").click(function () {
    $("header").toggleClass("active");
    $(".menu_mob").slideToggle();
  });



  //浮動按鈕 隨捲軸移動


	$(window).on('scroll', function(){
		scrollTop = $(window).scrollTop();
		if(scrollTop >200){
			$('.cm').stop().animate({'top' : scrollTop + 200 + 'px'}, 400);
		}else{
			$('.cm').stop().animate({'top' : '200px'}, 400);
		}
	});


	$(window).on('scroll', function(){
		scrollTop = $(window).scrollTop();
		if(scrollTop >200){
			$('.cm2').stop().animate({'top' : scrollTop + 260 + 'px'}, 400);
		}else{
			$('.cm2').stop().animate({'top' : '260px'}, 400);
		}
	});






  //lighrbox
  $(document).on('lity:resize', function (event, instance) {
    console.log('Lightbox resized');
  });




});

