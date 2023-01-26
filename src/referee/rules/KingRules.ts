import { Piece, Position, samePosition, TeamType } from "../../Constants"
import { tileIsEmptyOrOccupiedByOpponent, tileIsOccupied } from "./GeneralRules"

export const kingMove = (initialPosition: Position, desiredPosition: Position, team: TeamType, boardState: Piece[]) => {
    for(let i = 1; i < 2; i++){

        //diagonal
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