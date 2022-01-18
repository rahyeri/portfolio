/* http://rahyeri.dothome.co.kr/home의 서브 - 그래픽 디자인 페이지 제이쿼리 소스입니다 
    제작 : rahyeri 최종수정일 22.01.14*/

$(function () {
  //내비  
  $('nav').hide();
  $('.fa-bars').click(function () {
    $('nav').slideDown(500);
    $(this).hide();
    $('.fa-times-circle').fadeIn();
  });
  $('.fa-times-circle').click(function () {
    $('nav').fadeOut();
    $(this).hide();
    $('.fa-bars').fadeIn();
  });

  //메인글자효과
  setInterval(function () {
    $('#sub_title').animate({
      'opacity': '0.6'
    }, 300).animate({
      'opacity': '1'
    }, 300).animate({
      'opacity': '0.6'
    }, 300).animate({
      'opacity': '1'
    }, 300).animate({
      'opacity': '0.6'
    }, 300).animate({
      'opacity': '1'
    }, 300);
  }, 7000);


  //마우스오버시 네모

  $('.grid_wrap > li a').hover(function () {
    $(this).next('.inline1').stop().animate({
      'width': '95%',
      'opacity': '1'
    }, 500);
    $(this).siblings().eq(1).stop().delay(200).animate({
      'width': '90%',
      'opacity': '1'
    }, 500);
    $(this).siblings().eq(2).stop().delay(300).animate({
      'height': '200%',
      'opacity': '1'
    }, 500);
    $(this).siblings().eq(3).stop().delay(400).animate({
      'height': '200%',
      'opacity': '1'
    }, 500);

  }, function () {
    $('.inline1').stop().animate({
      'width': '0px',
      'opacity': '0'
    }, 500);
    $('.inline2').stop().animate({
      'width': '0px',
      'opacity': '0'
    }, 500);
    $('.inline3').stop().delay(100).animate({
      'height': '0%',
      'opacity': '0'
    }, 500);
    $('.inline4').stop().delay(200).animate({
      'height': '0%',
      'opacity': '0'
    }, 500);
  });

  //마우스오버시 글자효과

  //g_txt222222
  $('.grid_wrap > li:nth-child(2) a').hover(function () {
    $('.grid_wrap > li:nth-child(7) .g_txt2').addClass('effect2');
    $('.grid_wrap > li:nth-child(7) .g_txt2 a').css('text-shadow', '5px 5px 0px #222');
  }, function () {
    $('.grid_wrap > li:nth-child(7) .g_txt2').removeClass('effect2');
    $('.grid_wrap > li:nth-child(7) .g_txt2 a').css('text-shadow', '0px 0px 0px #222');
  });
  $('.grid_wrap > li:nth-child(4) a').hover(function () {
    $('.grid_wrap > li:nth-child(9) .g_txt2').addClass('effect2');
    $('.grid_wrap > li:nth-child(9) .g_txt2 a').css('text-shadow', '5px 5px 0px #222');
  }, function () {
    $('.grid_wrap > li:nth-child(9) .g_txt2').removeClass('effect2');
    $('.grid_wrap > li:nth-child(9) .g_txt2 a').css('text-shadow', '0px 0px 0px #222');
  });
  //g_txt
  $('.grid_wrap > li:nth-child(6) a').hover(function () {
    $('.grid_wrap > li:nth-child(1) .g_txt').addClass('effect');
    $('.grid_wrap > li:nth-child(1) .g_txt a').css('text-shadow', '5px 5px 0px #222');
  }, function () {
    $('.grid_wrap > li:nth-child(1) .g_txt').removeClass('effect');
    $('.grid_wrap > li:nth-child(1) .g_txt a').css('text-shadow', '0px 0px 0px #222');
  });

  $('.grid_wrap > li:nth-child(8) a').hover(function () {
    $('.grid_wrap > li:nth-child(3) .g_txt').addClass('effect');
    $('.grid_wrap > li:nth-child(3) .g_txt a').css('text-shadow', '5px 5px 0px #222');
  }, function () {
    $('.grid_wrap > li:nth-child(3) .g_txt').removeClass('effect');
    $('.grid_wrap > li:nth-child(3) .g_txt a').css('text-shadow', '0px 0px 0px #222');
  });

  $('.grid_wrap > li:nth-child(10) a').hover(function () {
    $('.grid_wrap > li:nth-child(5) .g_txt').addClass('effect');
    $('.grid_wrap > li:nth-child(5) .g_txt a').css('text-shadow', '5px 5px 0px #222');
  }, function () {
    $('.grid_wrap > li:nth-child(5) .g_txt').removeClass('effect');
    $('.grid_wrap > li:nth-child(5) .g_txt a').css('text-shadow', '0px 0px 0px #222');
  });

  // 모달창 
  $('.modal').hide();
  $('.grid_wrap > li').click(function () {
    $('.modal').show();
      
      return false;
  });
  $('.fa-close').click(function () {
    $('.modal').hide();
      
      return false;
  });

   //이미지 클릭시 모달창에 가져오기 
   let gImg = $('.grid_wrap > li img');
  
     gImg.click(function(){
      let url = $(this).attr('src');
       $('.modal img').attr('src', url.replace('on','off'));
     });
});
