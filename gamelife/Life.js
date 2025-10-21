const LIVE=1, DEAD=0

class Life{
    constructor(_row, _col){
        this.row = _row;
        this.col = _col;
        this.grid=[]
        //dynamic 2d array
        {
        if (row < 0 || col < 0) { return DEAD };
        if (col >= this.col) { return DEAD };
        if (row >= this.row) { return DEAD };
        return this.grid[row][col]; 
        }
    }
}

var myGame1 = new Life(10,10)
var myGame2 = new Life(5,5)
console.log(myGame1);
console.log(myGame2);