import { Piece, Position, samePosition, TeamType } from "../../Constants"
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied } from "./GeneralRules"

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