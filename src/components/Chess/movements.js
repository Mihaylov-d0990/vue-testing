import { WHITE, BLACK } from "./initialization"

const pawnMove = (field, fields) => {
    let allowedMoves = new Set()
    
    if (field.figure.color === WHITE) {
        if (47 < field.id && field.id < 56) {
            if (!fields[field.id - 16].figure) allowedMoves.add(field.id - 16)
        } 
        if (field.id > 7) {
            if (!fields[field.id - 8].figure) allowedMoves.add(field.id - 8)
        } 
        if (field.id > 6) {
            if (fields[field.id - 7].figure) {
                if (fields[field.id - 7].figure.color !== field.figure.color) allowedMoves.add(field.id - 7)
            }
        }
        if (field.id > 8 && field.id % 8 !== 0) {
            if (fields[field.id - 9].figure) {
                if (fields[field.id - 9].figure.color !== field.figure.color) allowedMoves.add(field.id - 9)
            }
        }
    } else if (field.figure.color === BLACK) {
        if (7 < field.id && field.id < 16) {
            if (!fields[field.id + 16].figure) allowedMoves.add(field.id + 16)
        } 
        if (field.id < 56) {
            if (!fields[field.id + 8].figure) allowedMoves.add(field.id + 8)
        } 
        if (field.id < 55) {
            if (fields[field.id + 7].figure) {
                if (fields[field.id + 7].figure.color !== field.figure.color) allowedMoves.add(field.id + 7)
            }
        }
        if (field.id < 56 && (field.id + 1) % 8 !== 0) {
            if (fields[field.id + 9].figure) {
                if (fields[field.id + 9].figure.color !== field.figure.color) allowedMoves.add(field.id + 9)
            }
        }
    } else return -1

    return allowedMoves
}

export { pawnMove }