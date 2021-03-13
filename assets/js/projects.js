$('.card').on('click', function (e){
    let card = $(e.currentTarget)
    $(card).toggleClass('active')
    
    // if ($(card).hasClass('active')) {
    //     $('body').addClass('noscroll')
    // } else {
    //     $('body').removeClass('noscroll')
    // }
})


// $(window).resize(function() {
//     var brWidth = document.body.clientWidth;
//     var brHeight = document.body.clientHeight;
//     var divWidth = brWidth * 0.5;
//     var divHeight = brHeight * 0.7;
//     $('#').css("width", divWidth+"px");
//     $('#').css("height", divHeight+"px");
// })


// $('.popup').on('click', function (f){
//     toggle()
// })

// function toggle() {
//     let blur = document.getElementById('blur')
//     blur.classList.toggle('active')
//     let popup = document.getElementsByClassName('popup')
//     popup.classList.toggle('active')

    
// }