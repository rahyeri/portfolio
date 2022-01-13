/* http://rahyeri.dothome.co.kr/home의 메인페이지 제이쿼리 소스입니다 
    제작 : rahyeri 최종수정일 22.01.08*/

$(document).ready(function () {

    let Time = setInterval(function () {
        $('.s3_2 > ul > li > span').fadeIn(3000).delay(3000).fadeOut();
    }, 3800); //svg밑에 글씨 나타나게 

    //다이얼 내비 클릭시 스크롤효과
    $('.c01').click(function () {
        $('html,body').animate({
            scrollTop: '1800px'
        }, 500);
        return false; //함수종료(#기능새로고침되어 깜빡이는 증상 없애기)
    });
    $('.c02').click(function () {
        $('html,body').animate({
            scrollTop: '2500px'
        }, 500);
        return false; //함수종료(#기능새로고침되어 깜빡이는 증상 없애기)
    });
    $('.c03').click(function () {
        $('html,body').animate({
            scrollTop: '200px'
        }, 500);
        return false; //함수종료(#기능새로고침되어 깜빡이는 증상 없애기)
    });

    //토글버튼클릭시내비  
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

    //다이얼내비 스크롤 내려가면 색상변경 + 방문환영글자나타남

    $(window).scroll(function () {
        let Pos = $(window).scrollTop();
        // let s5= $('.s5 h3').offset();
        if (Pos >= 700) {
            $('.s3_2 > p').css('transform', 'translateX(' + -Pos / 13 + '%)'); //yes i can do it!!
            $('.circle a').addClass('navcolor');
            // $('.tlt').textillate('start');
            $('#particles-js').hide();
        } else {
            $('.circle a').removeClass('navcolor');
            $('#particles-js').show();
        }
    });



    //인트로 페이지 

    $('.font1').css('opacity', '1').addClass('act').animate({
        'left': '43%'
    }, 200);
    $('.font2').delay(200).animate({
        'opacity': '1'
    }, 300).animate({
        'left': '46%'
    }, 300);
    $('.font3').delay(500).animate({
        'opacity': '1'
    }, 300).animate({
        'left': '47%'
    }, 200).addClass('act');
    $('.font4').delay(900).animate({
        'opacity': '1'
    }, 300).animate({
        'width': '30px'
    }, 100).animate({
        'height': '30px'
    }, 100).animate({
        'border-radius': '50%'
    }, 100).animate({
        'top': '37%'
    }, 400).animate({
        'left': '52.2%'
    }, 400);
    $('.font5').delay(1500).animate({
        'opacity': '1'
    }, 300).addClass('act').animate({
        'top': '46%'
    }, 200, function () {
        $('.font4')
            .animate({
                'width': '3000px',
                'height': '3000px',
                'top': '-70%',
                'left': '-60%'
            }, 1000)
    });
    $('.font_wrap').delay(3000).fadeOut();

    $('#txt').show();
    $('.back, h1').delay(2500).slideUp(500).delay(500).slideDown(500).animate({
        'width': '0px'
    }, {
        'height': '100%'
    }, 2000).delay(200).animate({
        'width': '50%'
    }, 600, 'easeOutQuart');

    $('.name').hide().delay(4000).slideUp(500).slideDown(500).animate({
        'left': '91%'
    }, 500, 'easeOutQuart').animate({
        'left': '51%'
    }, 600);

    $('.circle').hide().delay(5000).fadeIn(1000);
    $('#myphoto').hide().delay(6000).fadeIn(1000);
    // $('.font').removeClass('act');


    //볼륨다이얼
    $('.c03').mouseenter(function () {
        $('.c_in img').stop().rotate({
            duration: 2000,
            angle: -40,
            animateTo: -80
        });
    });

    $('.c03').mouseleave(function () {
        $('.c_in img').rotate({
            angle: 0
        });
    });
    $('.c02').mouseenter(function () {
        $('.c_in img').stop().rotate({
            duration: 2000,
            angle: 40,
            animateTo: 80
        });
    });

    $('.c02').mouseleave(function () {
        $('.c_in img').rotate({
            angle: 0
        });
    });

    //포트폴리오 글자효과

    setInterval(function () {
        $('.port.n1').animate({
            'opacity': '0.8'
        }, 300);
        $('.port.n1').animate({
            'opacity': '1'
        }, 300);
        $('.port.n2').delay(300).animate({
            'opacity': '0.8'
        }, 00);
        $('.port.n2').animate({
            'opacity': '1'
        }, 300);
        $('.port.n3').delay(600).animate({
            'opacity': '0.8'
        }, 300);
        $('.port.n3').animate({
            'opacity': '1'
        }, 300);
        $('.port.n4').delay(900).animate({
            'opacity': '0.8'
        }, 300);
        $('.port.n4').animate({
            'opacity': '1'
        }, 300);
        $('.port.n5').delay(1200).animate({
            'opacity': '0.8'
        }, 300, function () {
            $('.port.n5').animate({
                'opacity': '1'
            }, 300);
        });

    }, 4000);

    



});