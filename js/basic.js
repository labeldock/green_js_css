$(document.body).height(2000) // height, width 메서드가 있습니다.
// $(document.body).css('height', 2000) // css 메서드를 사용해도 됩니다.

$(document.body).on('click', '.popup-open', (event)=>{
    $(document.body).addClass('popupshow');
    $(document.body).addClass('no-scroll');
})

$(document.body).on('click', '.popup-close', (event)=>{
    $(document.body).removeClass('popupshow');
    $(document.body).removeClass('no-scroll');
})

// 브라우저 스크롤 이벤트
$(window).on('scroll', ()=>{
    if($('html').scrollTop() > 0){
        // 스크롤이 0보다 크면 scroll 클래스를 추가하고
        $('html').addClass("scroll")
    } else {
        // 스크롤이 0이면 scroll 클래스를 제거합니다.
        $('html').removeClass("scroll")
    }
})

// 제이쿼리 간단한 문법
// 1. $("스타일선택자와 같은 문법")
// -> 단 가상선택자는 제이쿼리에서는 사용할 수 없다.
// 2. 제이쿼리 선택자 다음에는 메서드 혹은 이벤트가 온다.
// 3. 메서드와 이벤트의 차이점은 ()=>{} 함수를 넘겨주는지 값을 넘겨주는지 여부
// 이벤트 : click, scroll, hover, mouseenter, mouseleave