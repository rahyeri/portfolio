/* http://rahyeri.dothome.co.kr/home의  서브페이지 제이쿼리 소스입니다 
        copyright(c) rahyeri 최종수정일 22.01.08*/
          
$(document).ready(function () {
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
                //귀요미들 슬라이드
                //1. 콘트롤버튼클릭시 인덱스값구하기
                let c_btn = $('.c_btn > li');
                let c = c_btn.index();

                //2. 콘트롤버튼 클릭시 변수값을 구해서 포지션을 이동한다
                c_btn.click(function () {
                    c = -($(this).index() * $('#things img').width());
                    // console.log(c); 확인완료
                    $('.job').stop().animate({
                        'left': c
                    }, 500);
                    $('.c_btn li').removeClass('act01'); //기존서식먼저제거하고
                    $(this).addClass('act01'); //선택된 목록만 서식적용
                });
                //오토플레이
                function move(c) {
                    c = -(c * $('#things img').width());
                    $('.job').animate({
                        'left': c
                    }, 300);
                }
                let num = 0;
                let Timer = setInterval(function () {
                    if (num == 3) {
                        num = 0;
                    } else {
                        num++;
                    }
                    move(num);
                }, 2500);


                //스킬 플레이버튼 클릭시 
                $('.fa-play-circle').click(function () {
                    $('#bars li:first-child > span').animate({
                        'width': '50%'
                    }, 800);
                    $('#bars li:nth-child(2) > span').delay(300).animate({
                        'width': '100%'
                    }, 800);
                    $('#bars li:nth-child(3) > span').delay(600).animate({
                        'width': '60%'
                    }, 800);
                    $('#bars li:nth-child(4) > span').delay(900).animate({
                        'width': '70%'
                    }, 800);
                    $('#bars li:nth-child(5) > span').delay(1200).animate({
                        'width': '70%'
                    }, 800);
                    $('#bars li:nth-child(6) > span').delay(1500).animate({
                        'width': '90%'
                    }, 800);
                    $('#skill li:first-child span').delay(200).animate({
                        'height': '70%'
                    }, 800);
                    $('#skill li:nth-child(2) span').delay(300).animate({
                        'height': '70%'
                    }, 800);
                    $('#skill li:nth-child(3) span').delay(400).animate({
                        'height': '30%'
                    }, 800);
                    $('#skill li:nth-child(4) span').delay(500).animate({
                        'height': '70%'
                    }, 800);
                    $('#skill li:nth-child(5) span').delay(600).animate({
                        'height': '90%'
                    }, 800);
                    $('#skill li:nth-child(6) span').delay(700).animate({
                        'height': '70%'
                    }, 800);
                    $('#skill li:nth-child(7) span').delay(800).animate({
                        'height': '30%'
                    }, 800);
                    $('#skill li:nth-child(8) span').delay(900).animate({
                        'height': '50%'
                    }, 800);
                });


});