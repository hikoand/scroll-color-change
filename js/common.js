$(function() {
  $(window).scroll(function(){
    // 공통변수 선언
    let wHeight = $(this).height();
    let thisScrollTop = $(this).scrollTop();

    // change background
    $(".slide").each(function(){
      // console.log($(this).attr("data-background"))
      let thisOffset = $(this).offset();
      let bodyBg = $(this).data("background");
      console.log(bodyBg)
      console.log($(this).offset().top+','+thisScrollTop);


 //1.진입체크 2.슬라이드가 넘어갈때 체크

      if(thisOffset.top <= thisScrollTop && thisScrollTop < thisOffset.top + wHeight){
      console.log('background changed')
      $("body").css("background-color",bodyBg)
      $(this).addClass("on");
      }else{
        $(this).removeClass("on");
      }

    })

    // navigation fixed
    const navBar = $("nav");

    // console.log('window height: '+wHeight+', 현재 스크롤 탑의 값: '+thisScrollTop)
    if(thisScrollTop > wHeight - 70){
      navBar.addClass("fixed");
    }else{
      navBar.removeClass("fixed");
    }
  });
});
