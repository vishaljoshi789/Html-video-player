let video_player = document.getElementById('video-player')
let play_pause_btn = document.getElementById('play_pause');
let small_play_pause_btn = document.getElementById('small_play_pause')
let volume = document.querySelector('.volume')
let currentTimeElement = document.querySelector('.current')
let durationTimeElement = document.querySelector('.duration')
let left_skip = document.querySelector('.left_skip')
let right_skip = document.querySelector('.right_skip')

// play pause function 
// play_pause_btn.addEventListener('click',()=>{
//     if(video_player.paused){
//         play_pause_btn.classList.remove('play')
//         play_pause_btn.classList.add('pause')
//         // small_play_pause_btn.classList.remove('small_play')
//         // small_play_pause_btn.classList.add('small_pause')
//         video_player.play()
//     }else{
//         play_pause_btn.classList.remove('pause')
//         play_pause_btn.classList.add('play')
//         // small_play_pause_btn.classList.remove('small_pause')
//         // small_play_pause_btn.classList.add('small_play')
//         video_player.pause()
//     }
// })

// small_play_pause_btn.addEventListener('click',()=>{
//     if(video_player.paused){
//         play_pause_btn.classList.remove('play')
//         play_pause_btn.classList.add('pause')
//         small_play_pause_btn.classList.remove('small_play')
//         small_play_pause_btn.classList.add('small_pause')
//         video_player.play()
//     }else{
//         play_pause_btn.classList.remove('pause')
//         play_pause_btn.classList.add('play')
//         small_play_pause_btn.classList.remove('small_pause')
//         small_play_pause_btn.classList.add('small_play')
//         video_player.pause()
//     }
// })


// volume

// volume.addEventListener('mousemove', (e)=>{
//     video_player.volume = e.target.value
// })


// currentTime and duration

let currentTime = ()=> {
    let currentMinutes = Math.floor(video_player.currentTime / 60);
    let currentSeconds = Math.floor(video_player.currentTime - currentMinutes * 60)
    let durationMinutes = Math.floor(video_player.duration / 60);
    let durationSeconds = Math.floor(video_player.duration - durationMinutes * 60)

    currentTimeElement.innerHTML = `${currentMinutes < 10 ? '0'+ currentMinutes : currentMinutes}:${currentSeconds < 10 ? '0'+ currentSeconds : currentSeconds}`
    durationTimeElement.innerHTML = `${durationMinutes < 10 ? '0'+ durationMinutes : durationMinutes}:${durationSeconds < 10 ? '0'+ durationSeconds : durationSeconds}`
}

video_player.addEventListener('timeupdate', currentTime)


// left right skip 

left_skip.addEventListener('click',()=>{
    video_player.currentTime = video_player.currentTime - 10
})
right_skip.addEventListener('click',()=>{
    video_player.currentTime = video_player.currentTime + 10
})