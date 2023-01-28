import { Piece, Position, samePosition, TeamType } from "../../Constants"
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules"

export const queenMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
    for(let i = 1; i < 8; i++){

        let multiplierX = (desiredPosition.x < initialPosition.x) ? -1 : (desiredPosition.x > initialPosition.x) ? 1 : 0
        let multiplierY = (desiredPosition.y < initialPosition.y) ? -1 : (desiredPosition.y > initialPosition.y) ? 1 : 0
        
        let passedPostion : Position = {x: initialPosition.x + (i* multiplierX), y: initialPosition.y + (i * multiplierY)}
        if(samePosition(passedPostion, desiredPosition)){
            if(tileIsEmptyOrOccupiedByOpponent(passedPostion, boardState, team)){
                return true
            }
        }else {
            if(tileIsOccupied(passedPostion, boardState)){
                break
            }
        }
    }
    return false
}
export const getPossibleQueenMoves = (queen: Piece, boardState: Piece[]): Position[] => {
    const possibleMoves: Position[] = []

    //top movement
    for (let i = 1; i < 8; i++){
        const destination: Position = {x: queen.position.x, y: queen.position.y + i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }
    //bottom movement
    for (let i = 1; i < 8; i++){
        const destination: Position = {x: queen.position.x, y: queen.position.y - i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }
    //left movement
    for (let i = 1; i < 8; i++){
        const destination: Position = {x: queen.position.x - i, y: queen.position.y}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }
    //right movement
    for (let i = 1; i < 8; i++){
        const destination: Position = {x: queen.position.x + i, y: queen.position.y}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }
    // upper ritght movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: queen.position.x + i, y: queen.position.y + i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }
    // bottom right movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: queen.position.x + i, y: queen.position.y - i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }

    //bottom left movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: queen.position.x - i, y: queen.position.y - i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }

    // top left movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: queen.position.x - i, y: queen.position.y + i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, queen.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }

    return possibleMoves
}