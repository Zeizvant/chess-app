import { Piece, Position, samePosition, TeamType } from "../../Constants"
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules"

 export const bishopMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]): boolean => {
        
    for(let i = 1; i < 8; i++){
        // up right movement
        if(desiredPosition.x > initialPosition.x && desiredPosition.y > initialPosition.y){
            let passedPostion : Position = {x: initialPosition.x + i, y: initialPosition.y + i}
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
        // bottom right movement
        if(desiredPosition.x > initialPosition.x && desiredPosition.y < initialPosition.y){
            let passedPostion : Position = {x: initialPosition.x + i, y: initialPosition.y - i}
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
        // bottom left movement
        if(desiredPosition.x < initialPosition.x && desiredPosition.y < initialPosition.y){
            let passedPostion : Position = {x: initialPosition.x - i, y: initialPosition.y - i}
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
        // top left movement
        if(desiredPosition.x < initialPosition.x && desiredPosition.y > initialPosition.y){
            let passedPostion : Position = {x: initialPosition.x - i, y: initialPosition.y + i}
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
    }
    return false 
    
}

export const getPossibleBishopMoves = (bishop: Piece, boardState: Piece[]):Position[] => {
    const possibleMoves: Position[] = []

    // upper ritght movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: bishop.position.x + i, y: bishop.position.y + i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }
    // bottom right movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: bishop.position.x + i, y: bishop.position.y - i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }

    //bottom left movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: bishop.position.x - i, y: bishop.position.y - i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }

    // top left movement
    for(let i = 1;  i < 8; i++){
        const destination: Position = {x: bishop.position.x - i, y: bishop.position.y + i}
        if(!tileIsOccupied(destination, boardState)){
            possibleMoves.push(destination)
        }else if(tileIsOccupiedByOpponent(destination, boardState, bishop.team)){
            possibleMoves.push(destination)
            break
        } else {
            break
        }
    }

    return possibleMoves
}