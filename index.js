var VIDEO_ASPECT_RATIO = 16.0 / 9.0;


var galleryTextStrings = [
  "<em>\"Re-imagine people are in galaxy\"</em>",
  "<em>\"Turn into Claude Monet style painting\"</em>",
  "<em>\"Turn into Van Gogh style painting\"</em>",
  "(Top) <em>\"Turn into vivid color painting\"</em>"
  +"&nbsp;&nbsp;"
  +"(Bottom) <em>\"Turn into dark color painting\"</em>",

];


var object1TextStrings = [
  "Original image",
  "<em>\"Turn sheeps into wolves\"</em>",
  "<em>\"Turn sheeps into polar bears\"</em>",
  "<em>\"Turn sheeps into reindeers\"</em>",
  "<em>\"Turn sheeps into kangaroos\"</em>",
];

var object2TextStrings = [
  "Original image",
  "<em>\"Turn penguins to chickens\"</em>",
  "<em>\"Turn penguins to sealions\"</em>",
  "<em>\"Turn penguins to bears\"</em>",
  "<em>\"Turn penguins to pandas\"</em>",
];


var panorama2TextStrings = [
  "Original image",

  "(Left) Turn into spring"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"(Right) Turn into fall",

  "(Left) Turn into summer"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"(Right) Turn into winter",

  "(Left) Turn into sunny weather"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"(Center) Turn into rainy weather"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"(Right) Turn into snowy weather",

  "(Left) <em>\"Turn into Van Gogh style painting\"</em>" 
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  + "(Right) <em>\"Turn into Paul Gauguin style painting\"</em>",
];

var birdTextStrings = [
  "Original video",
  "<em>\"Make it sunny day\"</em>",
  "<em>\"Make it midnight\"</em>",
  "<em>\"Make it sunset\"</em>",
  "<em>\"Make it spring\"</em>",
  "<em>\"Make it summer\"</em>",
  "<em>\"Make it autumn\"</em>",
];


var moreTextStrings = [
  "<em>\"Give him a yellow T-shirt\"</em>",
  "<em>\"Make it as a painting of Claude Monet\"</em>",
  "<em>\"Turn a brown dog into a Dalmatian\"</em>",
];

var personTextStrings = [
  "<em>\"Re-imagine him as a glowing colorful vaporwave 3D low-poly graphic object\"</em>",
  "<em>\"What if he were an anime character?\"</em>",
  "<em>\"Make him smile\"</em>",
];



$("#bird-video").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#bird-video1").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#bird-video2").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#bird-video3").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#bird-video4").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#more-video1").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#more-video2").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#more-video3").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#more-video4").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#person-video").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#person-video1").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});

$("#person-video2").on('loadedmetadata', function () {
  this.width = this.videoWidth;
  this.height = this.videoHeight;
  console.log(this.width, this.height);
});


$(function () {

  current_bird_idx = 0;

  birdVideo1 = document.getElementById('bird-video1');
  birdVideo2 = document.getElementById('bird-video2');
  birdVideo3 = document.getElementById('bird-video3');
  birdVideo4 = document.getElementById('bird-video4');

  birdText = document.getElementById('bird-text');

  birdThumbnails = [
    document.getElementById('source'),
    document.getElementById('sunny'),
    document.getElementById('midnight'),
    document.getElementById('sunset'),
    document.getElementById('spring'),
    document.getElementById('summer'),
    document.getElementById('autumn'),
  ];
  for (var i = 0; i < birdThumbnails.length; i++) {
    birdThumbnails[i].addEventListener('click', change_bird_index.bind(this, i));
  }
  change_bird_index(current_bird_idx);

  current_person_idx = 0;

  personVideo = document.getElementById('person-video');
  personVideo1 = document.getElementById('person-video1');
  personVideo2 = document.getElementById('person-video2');

  personText = document.getElementById('person-text');

  personThumbnails = [
    document.getElementById('graphic'),
    document.getElementById('anime'),
    document.getElementById('smile'),
  ];
  for (var i = 0; i < personThumbnails.length; i++) {
    personThumbnails[i].addEventListener('click', change_person_index.bind(this, i));
  }
  change_person_index(current_person_idx);

  current_more_idx = 0;

  moreVideo1 = document.getElementById('more-video1');
  moreVideo2 = document.getElementById('more-video2');
  moreVideo3 = document.getElementById('more-video3');
  moreVideo4 = document.getElementById('more-video4');

  moreText = document.getElementById('more-text');

  moreThumbnails = [
    document.getElementById('break'),
    document.getElementById('lucia'),
    document.getElementById('dog'),
  ];
  for (var i = 0; i < moreThumbnails.length; i++) {
    moreThumbnails[i].addEventListener('click', change_more_index.bind(this, i));
  }
  change_more_index(current_more_idx);


  var zoomElements = document.getElementsByClassName("zoom");

  for (var i = 0; i < zoomElements.length; i++) {
    var zoomElement = zoomElements[i];
    zoomElement.addEventListener("mouseenter", function (event) {
      var img = this.getElementsByTagName("img")[0];
      changeOpacity(img, 0);
    });

    zoomElement.addEventListener("mouseleave", function (event) {
      var img = this.getElementsByTagName("img")[0];
      changeOpacity(img, 1);
    });

    zoomElement.addEventListener("mousemove", zoom);
  }


  current_gallery_idx = 0;
  source_gallery = document.getElementById('gallery-source');
  edit_gallery = document.getElementById('gallery-edit');
  galleryText = document.getElementById('gallery-text');

  galleryThumbnails = [
    document.getElementById('galaxy'),
    document.getElementById('monet'),
    document.getElementById('gogh'),
    document.getElementById('color'),
  ];
  for (var i = 0; i < galleryThumbnails.length; i++) {
    galleryThumbnails[i].addEventListener('click', change_gallery_index.bind(this, i));
  }
  change_gallery_index(current_gallery_idx);


  current_object1_idx = 0;
  object1Text = document.getElementById('object1-text');

  object1Thumbnails = [
    document.getElementById('sheep'),
    document.getElementById('wolf'),
    document.getElementById('polar'),
    document.getElementById('reindeer'),
    document.getElementById('kangaroo'),
  ];
  for (var i = 0; i < object1Thumbnails.length; i++) {
    object1Thumbnails[i].addEventListener('click', change_object1_index.bind(this, i));
  }
  change_object1_index(current_object1_idx);



  // current_object2_idx = 0;
  // object2Text = document.getElementById('object2-text');

  // object2Thumbnails = [
  //   document.getElementById('penguin'),
  //   document.getElementById('chicken'),
  //   document.getElementById('sealion'),
  //   document.getElementById('bear'),
  //   document.getElementById('panda'),
  // ];
  // for (var i = 0; i < object2Thumbnails.length; i++) {
  //   object2Thumbnails[i].addEventListener('click', change_object2_index.bind(this, i));
  // }
  // change_object2_index(current_object2_idx);

  // img_panorama1 = document.getElementById('panorama-img1');
  // img_panorama2 = document.getElementById('panorama-img2');

  current_panorama2_idx = 0;
  panorama2Text = document.getElementById('panorama2-text');

  panorama2Thumbnails = [
    document.getElementById('original'),
    document.getElementById('season1'),
    document.getElementById('season2'),
    document.getElementById('weather'),
    document.getElementById('artist'),
  ];
  for (var i = 0; i < panorama2Thumbnails.length; i++) {
    panorama2Thumbnails[i].addEventListener('click', change_panorama2_index.bind(this, i));
  }

  change_panorama2_index(current_panorama2_idx);


});


function change_object1_index(idx) {
  object1Thumbnails[idx].classList.add("active-btn");
  if (current_object1_idx != idx) {
    object1Thumbnails[current_object1_idx].classList.remove("active-btn");
  }
  current_object1_idx = idx;
  object1Text.innerHTML = object1TextStrings[idx];

}

function change_object2_index(idx) {
  object2Thumbnails[idx].classList.add("active-btn");
  if (current_object2_idx != idx) {
    object2Thumbnails[current_object2_idx].classList.remove("active-btn");
  }
  current_object2_idx = idx;
  object2Text.innerHTML = object2TextStrings[idx];

}



$(document).ready(function(){

    // Get references to the video elements
    // var sourceMic = document.getElementById('source_mic');
    var downMic = document.getElementById('down_mic');
    var patchMic = document.getElementById('patch_mic');
    var oursMic = document.getElementById('ours_mic');

    // Variable to keep track of the number of videos ready to play
    var videosReady = 0;

    // Event listener for videos ready to play
    function videoReady() {
        videosReady++;
        // if (videosReady === 4) {
        if (videosReady === 3) {
            // All videos are ready, play them simultaneously
            // sourceMic.play();
            // setTimeout(function() {
            //   // Code to be executed after the delay (3 seconds)
            //   // This code will run after waiting for 3 seconds
            //   // Write your code here
            // }, 10000);

            // downMic.play();
            // patchMic.play();
            // oursMic.play();
            setTimeout(function() {
              downMic.play();
              patchMic.play();
              oursMic.play();
            }, 3000);
        }
    }

    // Add event listeners to check if the videos are ready to play
    // sourceMic.addEventListener('canplaythrough', videoReady);
    downMic.addEventListener('canplaythrough', videoReady);
    patchMic.addEventListener('canplaythrough', videoReady);
    oursMic.addEventListener('canplaythrough', videoReady);

});

$(document).ready(function(){
  var images = ['resources/image/object/sheep.png', 
  'resources/image/object/wolf.png', 
  'resources/image/object/polar_bear.png',
  'resources/image/object/reindeer.png',
  'resources/image/object/kangaroo.png',
  ];

  var imageIndex = 0;
  var image = $('#ObjectImage1');

  function changeImage(index) {
    image.fadeOut(1000, function() {
      image.attr('src', images[index]);
      image.fadeIn(1000);
    });
  }

  $('#sheep').click(function() {
    changeImage(0);
  });

  $('#wolf').click(function() {
    changeImage(1);
  });

  $('#polar').click(function() {
    changeImage(2);
  });

  $('#reindeer').click(function() {
    changeImage(3);
  });

  $('#kangaroo').click(function() {
    changeImage(4);
  });

});



// $(document).ready(function(){
//   var images = ['resources/image/object/penguin.png', 
//   'resources/image/object/chicken.png', 
//   'resources/image/object/sealion.png', 
//   'resources/image/object/bear.png',
//   'resources/image/object/panda.png',
//   ];

//   var imageIndex = 0;
//   var image = $('#ObjectImage2');

//   function changeImage(index) {
//     image.fadeOut(1000, function() {
//       image.attr('src', images[index]);
//       image.fadeIn(1000);
//     });
//   }

//   $('#penguin').click(function() {
//     changeImage(0);
//   });

//   $('#chicken').click(function() {
//     changeImage(1);
//   });

//   $('#sealion').click(function() {
//     changeImage(2);
//   });

//   $('#bear').click(function() {
//     changeImage(3);
//   });

//   $('#panda').click(function() {
//     changeImage(4);
//   });


// });


$(document).ready(function(){
  var image1 = $('#displayedImage1');
  var image2 = $('#displayedImage2');
  var images = ['resources/image/panorama/source.png', 
                'resources/image/panorama/season1_.png', 
                'resources/image/panorama/season1.png',
                'resources/image/panorama/season2_.png', 
                'resources/image/panorama/season2.png',
                'resources/image/panorama/weather_.png', 
                'resources/image/panorama/weather.png',
                'resources/image/panorama/artist_.png', 
                'resources/image/panorama/artist.png',
              ];
  var imageIndex = 0;

  $('#original').click(function() {
    image2.attr('src', "");
    image1.attr('src', images[0]);
    image1.fadeIn(2000);
    
  });

  $('#season1').click(function() {
    // similar to Button1, but with images[3] and images[4]
    image2.attr('src', images[1]);
    image1.fadeOut(1000);
    image2.fadeIn(1000);
    setTimeout(function() {
      image1.attr('src', images[2]);
      image2.fadeOut(2000);
      image1.fadeIn(2000);
    }, 2000);
  });

  $('#season2').click(function() {
    // similar to Button1, but with images[0]
    image2.attr('src', images[3]);
    image1.fadeOut(1000);
    image2.fadeIn(1000);
    setTimeout(function() {
      image1.attr('src', images[4]);
      image2.fadeOut(2000);
      image1.fadeIn(2000);
    }, 2000);
  });

    $('#weather').click(function() {
      // similar to Button1, but with images[0]
      image2.attr('src', images[5]);
      image1.fadeOut(1000);
      image2.fadeIn(1000);
      setTimeout(function() {
        image1.attr('src', images[6]);
        image2.fadeOut(2000);
        image1.fadeIn(2000);
      }, 2000);
  });

  $('#artist').click(function() {
    // similar to Button1, but with images[0]
    image2.attr('src', images[7]);
    image1.fadeOut(1000);
    image2.fadeIn(1000);
    setTimeout(function() {
      image1.attr('src', images[8]);
      image2.fadeOut(2000);
      image1.fadeIn(2000);
    }, 2000);
});


});



function change_gallery_index(idx) {
  galleryThumbnails[idx].classList.add("active-btn");
  if (current_gallery_idx != idx) {
    galleryThumbnails[current_gallery_idx].classList.remove("active-btn");
  }
  current_gallery_idx = idx;
  galleryText.innerHTML = galleryTextStrings[idx];

  edit_gallery.style.backgroundImage = "url(resources/image/4k/" + galleryThumbnails[idx].id + ".png)";
  edit_gallery.querySelector('img').src = "resources/image/4k/" + galleryThumbnails[idx].id + ".png";


}




function change_panorama2_index(idx) {
  panorama2Thumbnails[idx].classList.add("active-btn");
  if (current_panorama2_idx != idx) {
    panorama2Thumbnails[current_panorama2_idx].classList.remove("active-btn");
  }
  current_panorama2_idx = idx;
  panorama2Text.innerHTML = panorama2TextStrings[idx];

}

function change_bird_index(idx) {
  birdThumbnails[idx].classList.add("active-btn");
  if (current_bird_idx != idx) {
    birdThumbnails[current_bird_idx].classList.remove("active-btn");
  }
  current_bird_idx = idx;
  birdText.innerHTML = birdTextStrings[idx];
  birdVideo1.src = "resources/video/bird/fatezero/" + birdThumbnails[idx].id + ".mp4";
  birdVideo2.src = "resources/video/bird/pix2vid/" + birdThumbnails[idx].id + ".mp4";
  birdVideo3.src = "resources/video/bird/gen1/" + birdThumbnails[idx].id + ".mp4";
  birdVideo4.src = "resources/video/bird/ours/" + birdThumbnails[idx].id + ".mp4";
  birdVideo1.load();
  birdVideo2.load();
  birdVideo3.load();
  birdVideo4.load();
}


function change_more_index(idx) {
  moreThumbnails[idx].classList.add("active-btn");
  if (current_more_idx != idx) {
    moreThumbnails[current_more_idx].classList.remove("active-btn");
  }
  current_more_idx = idx;
  moreText.innerHTML = moreTextStrings[idx];
  moreVideo1.src = "resources/video/more/fatezero/" + moreThumbnails[idx].id + ".mp4";
  moreVideo2.src = "resources/video/more/pix2vid/" + moreThumbnails[idx].id + ".mp4";
  moreVideo3.src = "resources/video/more/gen1/" + moreThumbnails[idx].id + ".mp4";
  moreVideo4.src = "resources/video/more/ours/" + moreThumbnails[idx].id + ".mp4";
  moreVideo1.load();
  moreVideo2.load();
  moreVideo3.load();
  moreVideo4.load();
}


function change_person_index(idx) {
  personThumbnails[idx].classList.add("active-btn");
  if (current_person_idx != idx) {
    personThumbnails[current_person_idx].classList.remove("active-btn");
  }
  current_person_idx = idx;
  personText.innerHTML = personTextStrings[idx];
  personVideo1.src = "resources/3d/fangzhou/baseline/" + personThumbnails[idx].id + ".mp4";
  personVideo2.src = "resources/3d/fangzhou/ours/" + personThumbnails[idx].id + ".mp4";
  personVideo.load();
  personVideo1.load();
  personVideo2.load();
}


function zoom(e) {
  var zoomers = document.getElementsByClassName("zoom");

  for (var i = 0; i < zoomers.length; i++) {
    var zoomer = zoomers[i];
    var offsetX, offsetY;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageY;
    var x = offsetX / zoomer.offsetWidth * 100;
    var y = offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + "% " + y + "%";
  }
}

function changeOpacity(element, opacity) {
  var zoomElements = document.getElementsByClassName("zoom");

  for (var i = 0; i < zoomElements.length; i++) {
    zoomElements[i].getElementsByTagName("img")[0].style.opacity = opacity;
  }
}

