let prebtn = document.getElementById('pre');
prebtn = 0;
let nextbtn = document.getElementById('next');
nextbtn = 1;

document.getElementById('pre').addEventListener('click', function(){
    const button = document.getElementById('next');
    button.disabled = false;

    nextbtn = nextbtn - 1;
    console.log(nextbtn);

    if(nextbtn <= 0){
        const button = document.getElementById('pre');
        button.disabled = true;

    }else if(nextbtn > 0){
        const button1 = document.getElementById('pre');
        button1.disabled = false;
    }

    const disk = document.getElementById('disk');
    disk.classList.add('img');
    disk.src = `./images/disk${nextbtn}.svg`;

    const song = document.getElementById('song-m');
    song.src = `./audios/audio${nextbtn}.mp3`;
    song.load();

    const serial = document.getElementById('number');
    serial.innerText = nextbtn;
})


document.getElementById('next').addEventListener('click', function(){
    
    const button1 = document.getElementById('pre');
    button1.disabled = false;

    nextbtn = nextbtn + 1;
    console.log(nextbtn);

    if(nextbtn >= 20){
        const button = document.getElementById('next');
        button.disabled = true;
    }else{
        const button = document.getElementById('next');
        button.disabled = false;
    }

    const disk = document.getElementById('disk');
    disk.classList.add('img');
    disk.src = `./images/disk${nextbtn}.svg`;

    const song = document.getElementById('song-m');
    song.src = `./audios/audio${nextbtn}.mp3`;
    song.load();

    const serial = document.getElementById('number');
    serial.innerText = nextbtn;
})

document.getElementById('stop-m').addEventListener('click', function(){
    nextbtn = 0;
    const disk = document.getElementById('disk');
    disk.classList.remove('img');
    disk.src = './images/disk0.svg';
    const stop = document.getElementById('song-m');
    stop.src = "";
    const serial = document.getElementById('number');
    serial.innerText = '0';
    const allsongs = document.getElementsByClassName('remove');
    allsongs.classList.remove('bg-custome');
})
