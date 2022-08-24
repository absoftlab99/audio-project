document.getElementById('stop').addEventListener('pointerenter', function(){
    window.location.reload(true);
})

function playaudio(disksrc, songsrc){
        const disk = document.getElementById('img');
        disk.classList.add('img');
        disk.src = disksrc;
    
        const song = document.getElementById('song');
        song.src = songsrc;
        audio.load();
}

document.getElementById('song1').addEventListener('click', function(){
    playaudio('./images/disk1.svg', './audios/audio1.mp3');
})
document.getElementById('song2').addEventListener('click', function(){
    playaudio('./images/disk2.svg', './audios/audio2.mp3');
})
document.getElementById('song3').addEventListener('click', function(){
    playaudio('./images/disk3.svg', './audios/audio3.mp3');
})
document.getElementById('song4').addEventListener('click', function(){
    playaudio('./images/disk4.svg', './audios/audio4.mp3');
})
document.getElementById('song5').addEventListener('click', function(){
    playaudio('./images/disk5.svg', './audios/audio5.mp3');
})
document.getElementById('song6').addEventListener('click', function(){
    playaudio('./images/disk6.svg', './audios/audio6.mp3');
})
document.getElementById('song7').addEventListener('click', function(){
    playaudio('./images/disk7.svg', './audios/audio7.mp3');
})
document.getElementById('song8').addEventListener('click', function(){
    playaudio('./images/disk8.svg', './audios/audio8.mp3');
})
document.getElementById('song9').addEventListener('click', function(){
    playaudio('./images/disk9.svg', './audios/audio9.mp3');
})
document.getElementById('song10').addEventListener('click', function(){
    playaudio('./images/disk10.svg', './audios/audio10.mp3');
})
document.getElementById('song11').addEventListener('click', function(){
    playaudio('./images/disk11.svg', './audios/audio11.mp3');
})
document.getElementById('song12').addEventListener('click', function(){
    playaudio('./images/disk12.svg', './audios/audio12.mp3');
})
document.getElementById('song13').addEventListener('click', function(){
    playaudio('./images/disk13.svg', './audios/audio13.mp3');
})
document.getElementById('song14').addEventListener('click', function(){
    playaudio('./images/disk14.svg', './audios/audio14.mp3');
})
document.getElementById('song15').addEventListener('click', function(){
    playaudio('./images/disk15.svg', './audios/audio15.mp3');
})
document.getElementById('song16').addEventListener('click', function(){
    playaudio('./images/disk16.svg', './audios/audio16.mp3');
})
document.getElementById('song17').addEventListener('click', function(){
    playaudio('./images/disk17.svg', './audios/audio17.mp3');
})
document.getElementById('song18').addEventListener('click', function(){
    playaudio('./images/disk18.svg', './audios/audio18.mp3');
})
document.getElementById('song19').addEventListener('click', function(){
    playaudio('./images/disk19.svg', './audios/audio19.mp3');
})
document.getElementById('song20').addEventListener('click', function(){
    playaudio('./images/disk20.svg', './audios/audio20.mp3');
})