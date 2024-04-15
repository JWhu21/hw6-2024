var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    updateVolumeInfo();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    if (video.playbackRate > 0.1) {
        video.playbackRate -= 0.1;
    }
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    if (video.playbackRate < 2.0) {
        video.playbackRate += 0.1;
    }
    console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("Mute/Unmute");
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    console.log("Change Volume");
    video.volume = this.value / 100;
    updateVolumeInfo();
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Styled");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original");
    video.classList.remove("oldSchool");
});

function updateVolumeInfo() {
    var volumeInfo = document.querySelector("#volume");
    volumeInfo.textContent = Math.round(video.volume * 100) + "%";
}
