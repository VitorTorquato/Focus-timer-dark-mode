import { reset } from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import { alarm } from './sounds.js'


export function countDown(){
    clearTimeout(state.countDownID)
    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--
    if(seconds < 0 ){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        alarm.play()

        return
    }

    updateDisplay(minutes , seconds)
    state.countDownID = setTimeout(() => countDown() , 1000)
}


export function addMinutes(){
    let minutes = Number(el.minutes.textContent)
    el.minutes.textContent = String(minutes + 5).padStart(2,'0')
}
export function removeMinutes(){
    let minutes = Number(el.minutes.textContent)
    if(minutes > 5){
     el.minutes.textContent = String(minutes - 5).padStart(2,'0')
   }else{ 
       updateDisplay()
   }


   
}

export function updateDisplay(minutes , seconds){
   
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent =  String(minutes).padStart(2,'0')
    el.seconds.textContent =  String(seconds).padStart(2,'0')
    
}
