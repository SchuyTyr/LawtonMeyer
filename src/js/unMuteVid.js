/*-- unMuteVid.js // Schuyler Meyer // 2024 --*/

const vid = document.getElementById('mainVideo');
const muteButtonIcon = document.getElementById('muteButtonIcon');
const muteButton = document.getElementById('muteButton');

let onOff = true;

function unMute() {
    if (onOff) {
        //muteButtonIcon.innerHTML = '&#x1F50A';
        muteButtonIcon.style.backgroundImage = "url(../Lawton/src/icons/SpeakerSound.png)";
        vid.muted = !vid.muted;
        muteButton.title = "To Mute";
        onOff = false;
    }
    else {
        //muteButtonIcon.innerHTML = '&#x1F508';
        muteButtonIcon.style.backgroundImage = "url(../Lawton/src/icons/SpeakerMute.png)";
        vid.muted = !vid.muted;
        muteButton.title = "To Unmute";
        onOff = true;
    }
}