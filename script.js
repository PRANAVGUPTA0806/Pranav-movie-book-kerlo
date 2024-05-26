$(document).ready(function(){
    var exitIntent = false;
    $(document).mouseleave(function(){
      exitIntent = true;
    });
    $(window).on("mouseout", function(event) {
      if (event.clientY < 0 && exitIntent == true) {
        $("#exit-popup").fadeIn();
      }
    });
    $("#continue-button").click(function(){
      $("#exit-popup").fadeOut();
    });
  });
  function Myfunction(){
    alert(" Your issue is submitted THANK YOU !!");
    }
