document.addEventListener('keydown', function(e){
    let audio = document.querySelector(`audio[data-key="${e.key}"]`) // select audio based on the key
    if(!audio) return // return if the audio is not found
    let key = document.querySelector(`div[data-key="${e.key}"]`) // select the div for css styles
    key.classList.add('pressed')
    audio.currentTime = 0 // reset the player timer
    audio.play() // play the audio  
    setTimeout(() => { // remove the css class after 0.4 sec
        key.classList.remove('pressed')
    }, 400);
})