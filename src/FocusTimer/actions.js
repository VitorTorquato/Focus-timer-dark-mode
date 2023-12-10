import { minutes } from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'


export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
    sounds.btnPlayPauseStop.play()
}

export function reset(){
    state.isRunning = document.documentElement.classList.remove('running')
   timer.updateDisplay()
    sounds.btnPlayPauseStop.play()
}

export function increase(){
    timer.addMinutes()
    sounds.btnPlayPauseStop.play()
}

export function decrease(){
    timer.removeMinutes()
    sounds.btnPlayPauseStop.play()
}

export function toggleForestSound(){
    state.isMute = document.querySelector('.ph-tree').classList.toggle('secondary')


    if(state.isMute){
        sounds.forestSound.play()
        return
    }

    sounds.forestSound.pause()
}
export function toggleRainSound(){
    state.isMute = document.querySelector('.ph-cloud-rain').classList.toggle('secondary')

    if(state.isMute){
        sounds.rainSound.play()
        return
    }

    sounds.rainSound.pause()
}
export function togglePlaceSound(){
    state.isMute = document.querySelector('.ph-storefront').classList.toggle('secondary')

    if(state.isMute){
        sounds.storeSound.play()
        return
    }

    sounds.storeSound.pause()
}
export function toggleFirePlaceSound(){
    state.isMute = document.querySelector('.ph-fire').classList.toggle('secondary')

    if(state.isMute){
        sounds.firePlaceSound.play()
        return
    }

    sounds.firePlaceSound.pause()
}