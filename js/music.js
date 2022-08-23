document.getElementById('btn1').addEventListener('click', function(){
    const disk = document.getElementById('img');
    disk.classList.add('img')

    const song = document.getElementById('song');
    song.src = './audios/amarVaierRokteRangano.mp3';
    audio.load();
})