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

const knightMove = (field, fields) => {
    let allowedMoves = new Set()

    const MOVES = [6, 10, 15, 17]

    for (let i = 0; i < 4; i++) {
        if (field.id - MOVES[i] < 0) continue
        if ((field.id % 8 === 0) && ((MOVES[i] === MOVES[3]) || (MOVES[i] === MOVES[1]))) continue
        if (((field.id - 1) % 8 === 0) && (MOVES[i] === MOVES[1])) continue       
        if (((field.id + 1) % 8 === 0) && ((MOVES[i] === MOVES[2]) || (MOVES[i] === MOVES[0]))) continue
        if (((field.id + 2) % 8 === 0) && (MOVES[i] === MOVES[0])) continue
        if (fields[field.id - MOVES[i]].figure) {
            if (fields[field.id - MOVES[i]].figure.color === field.figure.color) continue
        }
        allowedMoves.add(field.id - MOVES[i])
    }

    for (let i = 0; i < 4; i++) {
        if (MOVES[i] + field.id > 63) continue
        if ((field.id % 8 === 0) && ((MOVES[i] === MOVES[0]) || (MOVES[i] === MOVES[2]))) continue
        if (((field.id - 1) % 8 === 0) && (MOVES[i] === MOVES[0])) continue       
        if (((field.id + 1) % 8 === 0) && ((MOVES[i] === MOVES[1]) || (MOVES[i] === MOVES[3]))) continue
        if (((field.id + 2) % 8 === 0) && (MOVES[i] === MOVES[1])) continue
        if (fields[field.id + MOVES[i]].figure) {
            if (fields[field.id + MOVES[i]].figure.color === field.figure.color) continue
        }
        allowedMoves.add(field.id + MOVES[i])
    }

    return Array.from(allowedMoves)
}

const queenMove = (field, fields) => {
    return [...bishopMove(field, fields), ...rookMove(field, fields)]
}

const kingMove = (field, fields) => {
    let allowedMoves = new Set()

    for (let i = field.id - 9; i < field.id - 6; i++) {
        if (field.id < 8) break
        if (((field.id % 8 === 0) && (i === field.id - 9)) || (((field.id + 1) % 8 === 0) && (i === field.id - 7))) continue
        if (fields[i].figure) {
            if (field.figure.color === fields[i].figure.color) continue        
        }   
        allowedMoves.add(i)
    }

    for (let i = field.id + 7; i < field.id + 10; i++) {
        if (field.id > 55) break
        if (((field.id % 8 === 0) && (i === field.id + 7)) || (((field.id + 1) % 8 === 0) && (i === field.id + 9))) continue
        if (fields[i].figure) {
            if (field.figure.color === fields[i].figure.color) continue        
        }   
        allowedMoves.add(i)
    }

    if (field.id % 8 !== 0) {
        if (fields[field.id - 1].figure) {
            if (fields[field.id - 1].figure.color !== field.figure.color) allowedMoves.add(field.id - 1)
        } else allowedMoves.add(field.id - 1)
    }

    if ((field.id + 1) % 8 !== 0) {
        if (fields[field.id + 1].figure) {
            if (fields[field.id + 1].figure.color !== field.figure.color) allowedMoves.add(field.id + 1)
        } else allowedMoves.add(field.id + 1)
    }

    return Array.from(allowedMoves)
}

export { pawnMove, bishopMove, rookMove, knightMove, queenMove, kingMove }