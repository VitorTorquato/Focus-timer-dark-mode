import state from "./state.js";
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes,seconds){
    state.minutes = minutes
    state.seconds = seconds

    events.RegisterControls() 
    timer.updateDisplay(minutes,seconds)
    events.RegisterCards()
    
}