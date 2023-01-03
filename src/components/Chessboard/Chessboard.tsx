import React from 'react'
import Tile from '../Tile/Tile';
import './Chessboard.css'

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]

interface Piece {
    image: string
    x: number
    y: number
}

const pieces: Piece[] = []
for(let i = 0; i < 8; i++){
    pieces.push({image: "assets/images/pawn_b.png", x: i, y: 6})
    pieces.push({image: 'assets/images/pawn_w.png', x: i, y: 1})
}
for(let p = 0; p < 2; p++ ){
    const type = p === 0 ? "b" : "w"
    const y =  p === 0 ? 7: 0
    pieces.push({image: `assets/images/rook_${type}.png`, x: 0, y: y})
    pieces.push({image: `assets/images/rook_${type}.png`, x: 7, y: y})
    pieces.push({image: `assets/images/knight_${type}.png`, x: 1, y: y})
    pieces.push({image: `assets/images/knight_${type}.png`, x: 6, y: y})
    pieces.push({image: `assets/images/bishop_${type}.png`, x: 2, y: y})
    pieces.push({image: `assets/images/bishop_${type}.png`, x: 5, y: y})
    pieces.push({image: `assets/images/queen_${type}.png`, x: 3, y: y})
    pieces.push({image: `assets/images/king_${type}.png`, x: 4, y: y})
}

let activePiece: HTMLElement | null = null

function grabPiece(e: React.MouseEvent){
    const element = e.target as HTMLElement
    if(element.classList.contains("chess-piece")){
        console.log(e)

        const x = e.clientX - 50
        const y = e.clientY - 50
        element.style.position = "absolute"
        element.style.left = `${x}px`
        element.style.top = `${y}px`
        activePiece = element
    }
}

function movePice(e: React.MouseEvent){
    const element = e.target as HTMLElement
    if(activePiece){
        const x = e.clientX - 50
        const y = e.clientY - 50
        activePiece.style.position = "absolute"
        activePiece.style.left = `${x}px`
        activePiece.style.top = `${y}px`
    }
}

function dropPiece(e: React.MouseEvent){
    if(activePiece){
        activePiece = null
    }
}



export default function Chessboard(){

    let board = [];
    
    for(let j = verticalAxis.length - 1; j >= 0; j--){
        for(let i = 0; i < horizontalAxis.length; i++){
            const number = j + i + 2;
            let image = undefined
            pieces.forEach(p => {
                if(p.x === i && p.y === j){
                    image = p.image
                }
            })
            board.push(<Tile key={`${j}, ${i}`} image={image} number={number} />)
            
        }
    }

    return (
        <div onMouseUp={e => dropPiece(e)} onMouseMove={e => movePice(e)} onMouseDown={e => grabPiece(e)} id='chessboard'>
            {board}
        </div>
    )
}