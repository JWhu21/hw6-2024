var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener('DOMContentLoaded', function() {
    // Access video and control elements
    var video = document.getElementById('player1');
    var playButton = document.getElementById('play');
    var pauseButton = document.getElementById('pause');
    var slowerButton = document.getElementById('slower');
    var fasterButton = document.getElementById('faster');
    var skipButton = document.getElementById('skip');
    var muteButton = document.getElementById('mute');
    var volumeSlider = document.getElementById('slider');
    var oldSchoolButton = document.getElementById('vintage');
    var originalButton = document.getElementById('orig');
    var volumeDisplay = document.getElementById('volume');

    // Initialize video properties
    video.autoplay = false;
    video.loop = false;

    // Function to update volume display
    function updateVolumeDisplay() {
        var volumePercentage = Math.round(video.volume * 100); // Calculate percentage
        volumeDisplay.innerText = volumePercentage + '%'; // Update display
    }

    // Play button functionality
    playButton.addEventListener('click', function() {
        console.log("Play Video");
    	video.play();
    	updateVolumeInfo();
    });


    // Pause button functionality
    pauseButton.addEventListener('click', function() {
        video.pause();
    });

    // Slow down button functionality
    slowerButton.addEventListener('click', function() {
        video.playbackRate -= video.playbackRate * 0.1;
        console.log('New speed:', video.playbackRate);
    });

    // Speed up button functionality
    fasterButton.addEventListener('click', function() {
        video.playbackRate /= 0.9;
        console.log('New speed:', video.playbackRate.toFixed(5));
    });

    // Skip ahead button functionality
    skipButton.addEventListener('click', function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log('Current video location:', video.currentTime);
    });

    // Mute/unmute button functionality
    muteButton.addEventListener('click', function() {
        video.muted = !video.muted;
        muteButton.innerText = video.muted ? 'Unmute' : 'Mute';
    });

    // Volume slider functionality
    volumeSlider.addEventListener('input', function() {
        console.log("Changing volume to " + this.value);
        video.volume = this.value / 100;
        // Update volume display directly here as well
        volumeDisplay.innerText = Math.round(video.volume * 100) + '%';
    });
	
    // Old School button functionality
    oldSchoolButton.addEventListener('click', function() {
        video.classList.add('oldSchool');
    });

    // Original button functionality
    originalButton.addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });

    // Initialize volume display on page load
    volumeDisplay.innerText = Math.round(video.volume * 100) + '%';
});
