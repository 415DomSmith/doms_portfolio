
$(document).ready(function () {
  $('#myHWBox').mouseover(function (){
		$("#myHW").children("video")[0].play();
  });

  $('#myHWBox').mouseleave(function (){
		$("#myHW").children("video")[0].pause();
  });

  $('#adamapBox').mouseover(function (){
		$("#adamap").children("video")[0].play();
  });

  $('#adamapBox').mouseleave(function (){
		$("#adamap").children("video")[0].pause();
  });

  $('#twixtBox').mouseover(function (){
		$("#twixt").children("video")[0].play();
  });

  $('#twixtBox').mouseleave(function (){
		$("#twixt").children("video")[0].pause();
  });

});
