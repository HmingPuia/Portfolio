$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.top-navbar').addClass('sticky')
        }else{
            $('.top-navbar').removeClass('sticky')
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    });
// Slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })

    //toggle
    $('.menu-btn').click(function(){
        $('.top-navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })
})
// Typing animation
var typed= new Typed(".typing",{
    strings:["Full Stack Developer", "Designer","Freelancer","YouTuber",'Chef','Musician'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});
var typed= new Typed(".typing-2",{
    strings:["Full Stack Developer", "Designer","Freelancer","YouTuber","Chef","Musician"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});