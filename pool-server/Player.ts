export class Player {
    playerName:string;
    win:number;
    loss:number;
    AVG:number;
    playerID: string
    constructor(playerName:string, win:number, AVG:number, loss:number, playerID: string) {
        this.playerName = playerName;
        this.win = win;
        this.loss = loss;
        this.AVG = AVG;
        this.playerID = playerID;
    }
}

const _players: Player[] = [new Player("Jeremy Skrdlant", 90, 100, 0, "1"), new Player("Harlan Tasci", 100, 100, 0, "2")]