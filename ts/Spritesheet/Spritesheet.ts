import { AnimableImage } from "./AnimableImage";

export class Spritesheet extends AnimableImage{

    private _lastTime:number;
    private _x:number;
    private _y:number;

    constructor(ctx:CanvasRenderingContext2D,image:ImageBitmap,row:number,column:number){
        super(ctx,image,row,column);
    }

    nextFrame():void{
        let now = new Date().getTime();

        if(! this._lastTime) this._lastTime = now;

        if(now - this._lastTime < this._gap) return;
        
        if (this._column < this._numColumn - 1)
            this._column++;
        else
            this._column = 0;
    
    
        this._lastTime = now;
    }

    draw():void{
        let weigthC = this._image.width / this._numColumn;
        let heightC = this._image.height / this._numRow;

        /*this._ctx.drawImage(
            this._image,
            weigthC * this._column,
            heightC * this._line,
            this._x,
            this._y,
            weigth,
            height
        );*/
    }
         
    
}