import * as actions from './actions.js'
import { controls } from './elements.js'
import { cards } from './elements.js'

export function RegisterControls (){
    controls.addEventListener('click' , (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        actions[action]()
    })
}

export function RegisterCards (){
    cards.addEventListener('click' , (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }
        actions[action]()
    })
}