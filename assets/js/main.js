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
    // var n=1;
    // $(".doctors-images img").hover(
    //     function(){
    //         $(this).css({
    //             "z-index":n++,
    //             "filter":"unset"
    //         }).siblings().css("filter","grayscale(1)")
    //     }
    // )
    if ($(window).innerWidth() > 751) {
        $(".moaaz").hover(
            function(){
                $(".sameih").css({
                    opacity:0,
                })
                $(this).css("filter","grayscale(0)")
            }
        )
        $(".sameih").hover(
            function(){
                $(".sameih").css({
                    opacity:1,
                })
                $(".moaaz").css("filter","grayscale(1)")
            }
        )
    }
    
});
//  disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();
