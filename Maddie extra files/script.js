<script>
  $(document).ready(function() {

    $(function () {
      $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
          $("body").addClass("sticky-shrinknav-wrapper");
        } else {
          $("body").removeClass("sticky-shrinknav-wrapper");
        }
      })
    })
  }

  $(document).ready(function(){ 
var prev = 0;
  var $window = $(window);
  var nav = $('.scrollhide-nav');
  
$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('hidden', scrollTop > prev);
  prev = scrollTop;

})
  });

  


</script>