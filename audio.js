var data = {
    title: [
        "Aaron Smith - Dancin",
        "Joseline Hernandez - Vegas",
        "NEJ' - Paro",
        "Powfu - Death bed",
        "Willow Smith - Wait a minute!",
        "Dhruv - Double take",
        "Ruth B. - Dandelions"
    ],
    song: [
        "music/Aaron Smith - Dancin.mp3",
        "music/Joseline Hernandez - Vegas.mp3",
        "music/Nej - Paro.mp3",
        "music/Powfu - death bed (coffee for your head)(feat. feat. beabadoobee).mp3",
        "music/Willow Smith - Wait a minute (duckhead edit).mp3",
        "music/dhruv - double take.mp3",
        "music/Ruth B. - Dandelions.mp3"
    ],
    poster: [
        "https://i.pinimg.com/originals/3f/0e/42/3f0e42c19efa42d4e42aa0ff7fd77914.gif",
        "https://media0.giphy.com/media/SFRsMtRn0ouEnWz3P5/giphy.gif",
        "https://media4.giphy.com/media/VzelniMUprJ4qu9MWZ/giphy.gif?cid=ecf05e47twzome903i4f8we2uo36wmwega1ddvk6y4btyyna&rid=giphy.gif&ct=g",
        "https://media0.giphy.com/media/xThta0yq8q9JwHL8kg/200w.webp?cid=ecf05e47b1vsswgqqb1m18dfy4ifcptk795mzgxj4fqm3c6a&rid=200w.webp&ct=g",
        "https://media3.giphy.com/media/3ohhwiSbK4IdpTIB0Y/200w.webp?cid=ecf05e474w4f54qcu4xcq7e2l5nkzn0r96faptj1sg8pc52p&rid=200w.webp&ct=g",
        "https://media0.giphy.com/media/3FvGyrAxbdCmxu8kzg/giphy.gif?cid=790b7611e7cf5538c5995ac0f87c7be970ac2bc1d9549944&rid=giphy.gif&ct=g",
        "https://i.pinimg.com/originals/cf/58/95/cf58956871574d1e5bcfca8adfd1c6ce.gif"
    ],

}



var song = new Audio()
var currentSong = 5


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");


    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main");
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}

function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play();
        play.src = "images/pause.png";
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png";
    }
}

song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);
    let fill = document.getElementById("fill")
    // console.log(fill);
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; // fill

    convertTime(song.currentTime) // cur. time

    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;



    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
    console.log(seconds);
    console.log(min);


}


function totalTime(seconds) {
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    if (isNaN(min) || isNaN(sec)) {
        return false
    } else {

        currentTime.textContent += " / " + min + " : " + sec
    }


}



// updateProgress = (x) => {
//     let { duration, currentTime } = x.srcElement
//     let progressProcent = (currentTime / duration) * 100
//     progress.style.width = `${progressProcent}%`
// }
// audio.addEventListener("timeupdate", updateProgress)

// setProgress = (e) => {
//     let clickX = e.offsetX
//     let duration = song.duration
//     song.currentTime = (clickX / 329) * duration
// }

// progressContainer.addEventListener('click', setProgress)

function next() {
    currentSong++
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong()
    play.src = "images/pause.png"

}

function pre() {
    currentSong--
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong()
    play.src = "images/pause.png"

}


function muted() {
    var mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png" //mute
    } else {
        song.muted = true
        mute.src = "images/volume-mute.png"
        //unmute
    }
}


function increase() {
    song.volume += 0.2;
}

function decrease() {
    song.volume -= 0.2;
}