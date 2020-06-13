import { Animable } from '../Animation/Animation';

export class AnimableImage implements Animable{

    protected _ctx:CanvasRenderingContext2D;
    protected _image:ImageBitmap;
    protected _numRow:number;
    protected _numColumn:number;
    protected _gap:number;
    protected _line:number;
    protected _column:number;

    constructor(ctx:CanvasRenderingContext2D,image:ImageBitmap,row:number,column:number){
        this._ctx = ctx;
        this._image = image;
        this._numRow = row;
        this._numColumn = column;
        this._gap = 0;
        this._line = 0;
        this._column = 0
    }

    draw():void{
        console.log("Implements this method");
    }
    
    update():void{
        console.log("Implements this method");
    }
}