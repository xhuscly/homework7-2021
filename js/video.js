var video = document.getElementById("player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate  * 0.95;
	console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log(video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime < 15){
		video.currentTime = 0;
		console.log(video.currentTime)
	} else {
		video.currentTime = video.currentTime + 15;
		console.log(video.currentTime);
	}	
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==false){
		video.muted =true;
		document.querySelector("#mute").innerHTML ='Unmute';
	}else{
		video.muted= false;
		document.querySelector("#mute").innerHTML ='Mute';
	}
});
document.querySelector("#slider").addEventListener("change", function() {
	video.volume= this.value/100 ;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
