
 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar_one").style.background = "#fff";
    document.getElementById("navbar_one").style.position = "fixed";
    $(".nav_link").css('color','rgb(44, 48, 48)');
    $(".navbar-toggler-icon").css('color','rgb(44, 48, 48)');
  

  } else {
    document.getElementById("navbar_one").style.background = "#1D1E1E";
    document.getElementById("navbar_one").style.position = "fixed";
    $(".nav_link").css('color','rgb(152, 157, 158)');
    $(".navbar-toggler-icon").css('color','rgb(152, 157, 158)');
    
  }
};

$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});


$('.navbar-nav').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 1000,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing',
  
 
});


function videoId(button) {
  var $videoUrl = button.attr("data-video");
  if ($videoUrl !== undefined) {
    var $videoUrl = $videoUrl.toString();
    var srcVideo;
    
    if ($videoUrl.indexOf("youtube") !== -1) {
      var et = $videoUrl.lastIndexOf("&");
      if (et !== -1) {
        $videoUrl = $videoUrl.substring(0, et);
      }
      var embed = $videoUrl.indexOf("embed");
      if (embed !== -1) {
        $videoUrl =
          "https://www.youtube.com/watch?v=" +
          $videoUrl.substring(embed + 6, embed + 17);
      }
     
      srcVideo =
        "https://www.youtube.com/embed/" +
        $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
        "?autoplay=1&mute=1&loop=1&playlist=" +
        $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
        "";
    } else if ($videoUrl.indexOf("youtu") !== -1) {
      var et = $videoUrl.lastIndexOf("&");
      if (et !== -1) {
        $videoUrl = $videoUrl.substring(0, et);
      }
      var embed = $videoUrl.indexOf("embed");
      if (embed !== -1) {
        $videoUrl =
          "https://youtu.be/" +
          $videoUrl.substring(embed + 6, embed + 17);
      }
     
      srcVideo =
        "https://www.youtube.com/embed/" +
        $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
        "?autoplay=1&mute=1&loop=1&playlist=" +
        $videoUrl.substring($videoUrl.length - 11, $videoUrl.length) +
        "";
      
      } else if ($videoUrl.indexOf("vimeo") !== -1) {
      srcVideo =
        "https://player.vimeo.com/video/" +
        $videoUrl
          .substring($videoUrl.indexOf(".com") + 5, $videoUrl.length)
          .replace("/", "") +
        "?autoplay=1";
      
      
    } else if ($videoUrl.indexOf("mp4") !== -1) {
      return (
        '<video loop playsinline autoplay><source src="' +
        $videoUrl +
        '" type="video/mp4"></video>'
      );
    } else {
      alert(
        "The video assigned is not from Youtube, Vimeo or MP4, remember to enter the correct complete video link .\n - Youtube: https://www.youtube.com/watch?v=43ngkc2Ejgw\n - Vimeo: https://vimeo.com/111939668\n - MP4 https://server.com/file.mp4"
      );
      return false;
    }
    return (
      '<iframe src="' +
      srcVideo +
      '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
  } else {
    alert("No video assigned.");
    return false;
  }
}

$(".lets-play").click(function (e) {
  e.preventDefault();
  var $theVideo = videoId($(this));
  if ($theVideo) {
    $("#video-wrap")
      .html(
        '<span class="video-overlay"></span><div class="video-container">' +
          $theVideo +
          '</div><button class="close-video">x</button>'
      )
      .addClass("active");
  }
});

$(document).on("click", ".close-video, .video-overlay", function () {
  $("#video-wrap").empty().removeClass("active");
});







