import { CLICK } from './actionTypes'
export const onClick = (id) => {
    return ({
        type: CLICK,
        data: "click now"
    })
}