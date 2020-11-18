$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".hamnav").slideToggle(400);
    })
    $(window).resize(function () {
        if($(".hamburger").css("display") == "none")
        {
            $(".hamnav").css("display","none");
        }
    })
})