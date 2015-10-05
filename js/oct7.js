var videos = [ "v1-bike_rack_covers", "v2-abi" ];

var names = [ "Bike Rack Covers", "Mastering ABI" ];

var lengths = [ "1:15", "4:30" ];

var views = [ "25", "12" ];

var usefulness = [ "3.1", "2.5" ];

var description = [ "This video explains how to properly fold bike rack covers.", "This video provides a quick explanation of everything you need to know about ABI and how to do those things." ];

var related = [ [ "v2-abi", "v1-bike_rack_covers", "v2-abi" ], [ "v1-bike_rack_covers", "v2-abi", "v1-bike_rack_covers" ] ];

function video( x ) {
   var current = videos.indexOf( x );
   document.getElementById("vid").style.display = "block";
   document.getElementById("src").src = "videos/" + x + ".mp4";
   document.getElementById("video-name").innerHTML =  names[current];
   document.getElementById("video-length").innerHTML = lengths[current];
   document.getElementById("video-views").innerHTML = views[current];
   document.getElementById("video-usefulness").innerHTML = usefulness[current];
   document.getElementById("video-description").innerHTML = description[current];
   document.getElementById("img1").src = "images/" + related[current][0] + ".jpg";
   document.getElementById("img1").setAttribute( "onClick", "video('" + related[current][0] + "')");
   document.getElementById("img2").src = "images/" + related[current][1] + ".jpg";
   document.getElementById("img2").setAttribute( "onClick", "video('" + related[current][1] + "')");
   document.getElementById("img3").src = "images/" + related[current][2] + ".jpg";
   document.getElementById("img3").setAttribute( "onClick", "video('" + related[current][2] + "')");
   
   
}