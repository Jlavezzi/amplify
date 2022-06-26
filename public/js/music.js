//assigning variables
var trackArt = $('.track-art');
var trackName =$('.track-name');
var trackArtist = $('.track-artist');
var playPausebtn =$('.play-pause-track');
var nextBtn = $('.next-track');
var prevBtn = $('.prev-track');
var seekSlider = $('.seek-slider');
var currentTime =$('.current-time');
var durationTime = $('.total-duration');
var zero = $('.zero');
var one = $('.one');
var two = $('.two');
var three = $('.three');
var four = $('.four');
var five = $('.five');
//
let trackIndex = 0;
let updateTimer;
var playing = false;
//create html element
var currentTrack = document.createElement('audio')
// list of songs
function TrackList(image, name, artist, path){
  this.image = image;
  this.name = name;
  this.artist =artist
  this.path = path
}

var trackAudio=[ new TrackList('image URL','Life boats', 'Jorja Smith','url'),

 new TrackList('image URL','Overjoyed','Victory','url'),

 new TrackList('image URL','Dont misunderstand','Harold Mabern (feat. Norah Jones)','url'),

new TrackList('image URL','Starlight','Dave','url'),

new TrackList('image URL','Stand Strong','Davido','url'),

new TrackList('image URL','Doctor','Sam Burchfield','url') ]

//loading selected track into the audio HTML element
function loadTrack(trackIndex){
  //
  clearInterval(updateTimer);
  //resets timers back to default after a song is done
  resetValues();

  //ataching the selected audio file to a source in the audio to make it available to be played
  trackName.text(trackAudio[trackIndex].name)
  trackArtist.text(trackAudio[trackIndex].artist)
 currentTrack.src  = trackAudio[trackIndex].path
 //
 currentTrack.load()
 // update timer every  second
 updateTimer = setInterval(seekUpdate, 1000);
 //automatically moves to the next when a song is done
 currentTrack.addEventListener('ended',nextButton)

}
// reset value to default default
function resetValues(){
  currentTime.textContent = '00:00'
  durationTime.textContent = '00:00'
  seekSlider.value = 0
}

function play_pauseButton(){
//play music

loadTrack(trackIndex)
currentTrack.play()
playing = true
//pause music
if (!playing) {
  currentTrack.pause()
//playPausebtn.src =
}else {
  currentTrack.pause()
//  playPausebtn.src =
}
}
//change to next music
function nextButton(){

if (trackIndex < trackAudio.length-1) {
  trackIndex++
}else {
  trackIndex = 0
}
 play_pauseButton()
}

// change to previous music
function prev(){
  if (trackIndex > 0) {
    trackIndex--
  }else {
    trackIndex = trackAudio.length - 1
  }
  play_pauseButton()
}
// play music clicked on
 function zeroplaybutton(){
   trackIndex = 0
   play_pauseButton()
}
function oneplaybutton(){
 trackIndex=1
 play_pauseButton()
}
function twoplaybutton(){
  trackIndex=2
play_pauseButton()
}
function threeplaybutton(){
  trackIndex =3
  play_pauseButton()
}
function fourplaybutton(){
  trackIndex = 4
play_pauseButton()
}
function fiveplaybutton(){
  trackIndex=5
  play_pauseButton()
}
//updates the slider
function seekUpdate() {
  let seekPosition = 0
// if current track duration is not a number, convert it to a number
  if (! isNaN(currentTrack.duration)) {
    seekPosition = currentTrack.currentTime *(100 / currentTrack.duration);
    seekSlider.value = seekPosition;
// logic to convert each of the defined variables to integers
    let currentMinutes = Math.floor(currentTrack.currentTime/ 60);
    let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(currentTrack.duration / 60);
    let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);
//if the below selected are below ten, add 0 before them to make them double digits
    if(currentSeconds < 10){ currentSeconds = '0' + currentSeconds;}
    if (durationSeconds < 10) { durationSeconds = '0' + durationSeconds;}
    if (currentMinutes < 10) { currentMinutesm='0'+ currentMinutes;}
    if(durationMinutes < 10) {durationMinutes = '0' + durationMinutes;}
//update text content
    currentTime.textContent = currentMinutes + ':' + currentSeconds;
    duration.textContent = durationMinutes + ':' + durationSeconds;

    }
  }
