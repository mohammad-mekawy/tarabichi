$(document).ready(function(){
    $(".scalable").hover(
        function(){
            $(this).addClass("T-large").removeClass("T-small").siblings().removeClass("T-large").addClass("T-small")
        }
    )
    $(".nav-link").mouseenter(
        function(){
            let T_class= $(this).data("ball");
            $("#ball").removeAttr('class').addClass(T_class)
        }
    )
    var n=1;
    $(".doctors-images img").hover(
        function(){
            $(this).css({
                "z-index":n++,
                "filter":"unset"
            }).siblings().css("filter","grayscale(1)")
        }
    )
});