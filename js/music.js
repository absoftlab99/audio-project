document.getElementById('btn1').addEventListener('click', function(){
    const disk = document.getElementById('img');
    disk.classList.add('img')
    disk.src = './images/21FebruaryDisk.svg'

    const elips = document.getElementById('elips');
    elips.classList.add('img');

    const song = document.getElementById('song');
    song.src = './audios/amarVaierRokteRangano.mp3';
    audio.load();
})