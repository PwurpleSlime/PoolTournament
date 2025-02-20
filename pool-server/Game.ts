enum gameType{
    NORMAL,
    EIGHTBALL,
    NINEBALL
}
export class Game {
    gameType: gameType;
    solidPlayer:string;
    stripesPlayer:string;
    gameID:string;
    constructor (gameType:gameType, solidPlayer:string, stripesPlayers:string, gameID:string){
            this.gameType = gameType
            this.solidPlayer = solidPlayer;
            this.stripesPlayer = stripesPlayers;
            this.gameID = gameID;
        }
    }

const _game: Game[] = [new Game(gameType.NORMAL, "1", "2", "1"), new Game(gameType.NINEBALL, "2", "1", "2")]
