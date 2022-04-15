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
    }

    return Array.from(allowedMoves)
}

const bishopMove = (field, fields) => {
    let allowedMoves = new Set()

    for (let i = field.id; i > 0; i -= 9) {
        if ((i === field.id) && (i % 8 !== 0)) continue
        else if ((i === field.id) && (i % 8 === 0)) break
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
        if (i % 8 === 0) break
    }
    
    for (let i = field.id; i < 64; i += 7) {
        if ((i === field.id) && (i % 8 !== 0)) continue
        else if ((i === field.id) && (i % 8 === 0)) break
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
        if (i % 8 === 0) break
    }

    for (let i = field.id; i > 0; i -= 7) {
        if ((i === field.id) && ((i + 1) % 8 !== 0)) continue
        else if ((i === field.id) && ((i + 1) % 8 === 0)) break
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
        if ((i + 1) % 8 === 0) break
    }

    for (let i = field.id; i < 64; i += 9) {
        if ((i === field.id) && ((i + 1) % 8 !== 0)) continue
        else if ((i === field.id) && ((i + 1) % 8 === 0)) break
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
        if ((i + 1) % 8 === 0) break
    }

    return Array.from(allowedMoves)
}

const rookMove = (field, fields) => {
    let allowedMoves = new Set()

    for (let i = field.id; i > 0; i -= 8) {
        if (i === field.id) continue
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
    }

    for (let i = field.id; i < 64; i += 8) {
        if (i === field.id) continue
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
    }

    for (let i = field.id; ; i--) {
        if ((i === field.id) && (i % 8 !== 0)) continue
        else if ((i === field.id) && (i % 8 === 0)) break
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
        if (i % 8 === 0) break
    }

    for (let i = field.id; ; i++) {
        if ((i === field.id) && ((i + 1) % 8 !== 0)) continue
        else if ((i === field.id) && ((i + 1) % 8 === 0)) break
        if (fields[i].figure) {
            if (field.figure.color !== fields[i].figure.color) allowedMoves.add(i)
            break
        }
        if (!fields[i].figure) allowedMoves.add(i)
        if ((i + 1) % 8 === 0) break
    }

    return Array.from(allowedMoves)
}

export { pawnMove, bishopMove, rookMove }