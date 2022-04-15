const WHITE = true
const BLACK = false

const createChessBoard = () => {
    let arr = []
    for (let i = 0; i < 64; i++) {
        arr.push({
            id: i,
            figure: null
        })
    }
    return arr
}

const initializeFigures = (chessBoard) => {
    const pawFill = (first, last, color) => {
        for (let i = first; i < last; i++) {
            chessBoard[i].figure = {
                priority: 1,
                image: require(`../../assets/chesses/${color}-1.png`)
            }
        }
    }

    pawFill(48, 56, 'w')

    chessBoard[57].figure = chessBoard[62].figure = {
        priority: 2,
        image: require('../../assets/chesses/w-2.png')
    }

    chessBoard[58].figure = chessBoard[61].figure = {
        priority: 3,
        image: require('../../assets/chesses/w-3.png')
    }

    chessBoard[56].figure = chessBoard[63].figure = {
        priority: 4,
        image: require('../../assets/chesses/w-4.png')
    }

    chessBoard[59].figure = {
        priority: 5,
        image: require('../../assets/chesses/w-5.png')
    }

    chessBoard[59].figure = {
        priority: 5,
        image: require('../../assets/chesses/w-5.png')
    }

    chessBoard[60].figure = {
        priority: 6,
        image: require('../../assets/chesses/w-6.png')
    }

    for (let i = 48; i < 64; i++) {
        chessBoard[i].figure.color = WHITE
    }

    pawFill(8, 16, 'b')

    chessBoard[1].figure = chessBoard[6].figure = {
        priority: 2,
        image: require('../../assets/chesses/b-4.png')
    }

    chessBoard[2].figure = chessBoard[5].figure = {
        priority: 3,
        image: require('../../assets/chesses/b-3.png')
    }

    chessBoard[0].figure = chessBoard[7].figure = {
        priority: 4,
        image: require('../../assets/chesses/b-2.png')
    }

    chessBoard[3].figure = {
        priority: 5,
        image: require('../../assets/chesses/b-5.png')
    }

    chessBoard[4].figure = {
        priority: 6,
        image: require('../../assets/chesses/b-6.png')
    }

    for (let i = 0; i < 16; i++) {
        chessBoard[i].figure.color = BLACK
    }

    return chessBoard
}

export { createChessBoard, initializeFigures, WHITE, BLACK }