document.getElementById('stop').addEventListener('click', function(){
    window.location.reload(true);
})

function fullcall(id, disksrc, songsrc){
    document.getElementById(id).addEventListener('click', function(){
        const disk = document.getElementById('img');
        disk.classList.add('img');
        disk.src = disksrc;

        const songs = document.getElementById(id);
        songs.classList.add('bg-custome')
    
        const song = document.getElementById('song');
        song.src = songsrc;
        audio.load();
    })
}

fullcall('song1', './images/disk1.svg', './audios/audio1.mp3');
fullcall('song2', './images/disk2.svg', './audios/audio2.mp3');
fullcall('song3', './images/disk3.svg', './audios/audio3.mp3');
fullcall('song4', './images/disk4.svg', './audios/audio4.mp3');
fullcall('song5', './images/disk5.svg', './audios/audio5.mp3');
fullcall('song6', './images/disk6.svg', './audios/audio6.mp3');
fullcall('song7', './images/disk7.svg', './audios/audio7.mp3');
fullcall('song8', './images/disk8.svg', './audios/audio8.mp3');
fullcall('song9', './images/disk9.svg', './audios/audio9.mp3');
fullcall('song10', './images/disk10.svg', './audios/audio10.mp3');
fullcall('song11', './images/disk11.svg', './audios/audio11.mp3');
fullcall('song12', './images/disk12.svg', './audios/audio12.mp3');
fullcall('song13', './images/disk13.svg', './audios/audio13.mp3');
fullcall('song14', './images/disk14.svg', './audios/audio14.mp3');
fullcall('song15', './images/disk15.svg', './audios/audio15.mp3');
fullcall('song16', './images/disk16.svg', './audios/audio16.mp3');
fullcall('song17', './images/disk17.svg', './audios/audio17.mp3');
fullcall('song18', './images/disk18.svg', './audios/audio18.mp3');
fullcall('song19', './images/disk19.svg', './audios/audio19.mp3');
fullcall('song20', './images/disk20.svg', './audios/audio20.mp3');
