import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";
console.log(iframe)

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(evt) {
   const currentTime = evt.seconds;
   localStorage.setItem(STORAGE_KEY, currentTime);
}
const savedTime = localStorage.getItem(STORAGE_KEY);
console.log(savedTime)
if (savedTime) {
   player.setCurrentTime(savedTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});
};