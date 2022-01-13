/* http://rahyeri.dothome.co.kr/home의  서브페이지 제이쿼리 소스입니다 
          제작 : rahyeri 최종수정일 22.01.08*/

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

  //탭메뉴
  let n1 = $('.tabmenu > li:first-child p');
  let n2 = $('.tabmenu > li:nth-child(2) p');
  let n3 = $('.tabmenu > li:nth-child(3) p');
  let n4 = $('.tabmenu > li:last-child p');
  let img = $('article img');

  $('.tabmenu > li:first-child').find('p').addClass('tab');

  $(n1).click(function () {
    $('section > article').hide();
    $('.jeju').fadeIn();
    $('.tabmenu > li > p').removeClass('tab');
    $(this).addClass('tab');
    $('h2').css({
      'height': '0px',
      'width': '0px'
    }).animate({
      'width': '90%',
      'height': '160px'
    }, 700);
    img.css('left', '-100%').animate({
      'left': '0px'
    }, 500);

  });
  $(n2).click(function () {
    $('section > article').hide();
    $('.bread').fadeIn();
    $('.tabmenu > li > p').removeClass('tab');
    $(this).addClass('tab');
    $('h2').css({
      'height': '0px',
      'width': '0px'
    }).animate({
      'width': '90%',
      'height': '160px'
    }, 700);
    img.css('top', '-100%').animate({
      'top': '0px'
    }, 500);

  });
  $(n3).click(function () {
    $('section > article').hide();
    $('.hacker').fadeIn();
    $('.tabmenu > li > p').removeClass('tab');
    $(this).addClass('tab');
    $('h2').css({
      'height': '0px',
      'width': '0px'
    }).animate({
      'width': '90%',
      'height': '160px'
    }, 700);
    img.css('left', '-100%').animate({
      'left': '0px'
    }, 500);
  });
  $(n4).click(function () {
    $('section > article').hide();
    $('.san').fadeIn();
    $('.tabmenu > li > p').removeClass('tab');
    $(this).addClass('tab');
    $('h2').css({
      'height': '0px',
      'width': '0px'
    }).animate({
      'width': '90%',
      'height': '160px'
    }, 700);
    img.css('bottom', '-800px').animate({
      'bottom': '0px'
    }, 500);
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


  // 모달창 
  $('.modal').hide();
  $('.jeju .wrapbox > figure img').click(function () {
    $('.modal').show();
    $('#modalimg').attr('src', './image/webjeju.jpg');
  });
  $('.hacker .wrapbox > figure img').click(function () {
    $('.modal').show();
    $('#modalimg').attr('src', './image/webgame.jpg');
  });
  $('.bread .wrapbox > figure img').click(function () {
    $('.modal').show();
    $('#modalimg').attr('src', './image/webbread.jpg');
  });
  $('.san .wrapbox > figure img').click(function () {
    $('.modal').show();
    $('#modalimg').attr('src', './image/websan.jpg');
  });
  //모달창닫기
  $('.fa-close').click(function () {
    $('.modal').hide();
  });

});