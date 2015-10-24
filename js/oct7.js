var videos = [ "v1-bike_rack_covers", "v2-abi", "v3-vacuum_unclogging", "v4-vacuum_bags" ];

var names = [ "Bike Rack Covers", "Mastering ABI", "Vacuum Unclogging", "Vacuum Bag Changing" ];

var lengths = [ "1:15", "4:30", "4:40", "0:30" ];

var views = [ "25", "12", "1", "19" ];

var usefulness = [ "3.1", "2.5", "3.7", "4.1"];

var description = [ "This video explains how to properly fold bike rack covers.", "This video provides a quick explanation of everything you need to know about ABI and how to do those things.", "This is a video that shows you how to unclog a vacuum, make sure it is in good working condition, how to change a vacuum bag and provide other handy tips.", "This is a video that shows you how to change a vacuum bag." ];

var related = [ [ "v2-abi", "v3-vacuum_unclogging", "v4-vacuum_bags" ], [ "v1-bike_rack_covers", "v3-vacuum_unclogging", "v4-vacuum_bags" ], [ "v2-abi", "v1-bike_rack_covers", "v4-vacuum_bags" ], [ "v2-abi", "v3-vacuum_unclogging", "v1-bike_rack_covers" ] ];

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

function closeVideo() {
   document.getElementById("vid").style.display = "none";
   document.getElementById("src").src = "#";
}

function closeDescription() {
   document.getElementById("close-desciption").src = "images/open-description.png";
   document.getElementById("close-desciption").setAttribute( "onClick", "openDescription()");
   document.getElementById("video-tag").style.display = "none";
}

function openDescription() {
   document.getElementById("close-desciption").src = "images/close-description.png";
   document.getElementById("close-desciption").setAttribute( "onClick", "closeDescription()");
   document.getElementById("video-tag").style.display = "inherit";
}

