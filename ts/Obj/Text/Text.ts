import { Entity } from "../Formats/Entity";

export class TextEntity extends Entity{

    private _text:string;
    private _font:string;
    private _size:string;

    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
        this._text = "PLACE HOLDER";
        this._size = "30px";
        this._font = this._size+" Arial";
        this._x = 0;
        this._y = 0;
        this._color = 'black';
    }

    public update():void{
        if(!window.localStorage.getItem('playerScore'))
            this._text = "SCORE: 0";
        else
            this._text = "SCORE: " +  window.localStorage.getItem('playerScore');
        
    }

    public draw():void{
        this._ctx.save();
        this._ctx.globalCompositeOperation = 'source-over';
        this._ctx.font = this._font;
        this._ctx.fillStyle = this._color;
        this._ctx.fillText(this._text,this._x,this._y);
        this._ctx.restore();
    }

    private resolveFont():void{
            this._font = this._size + " " + this._font;
    }

    
    public set sText(v : string) {
        this._text = v;
        this.resolveFont();
    }
    
    public get sText() : string {
        return this._text;
    }


    public set sFont(v : string) {
        this._font = v;
    }

    public get sFont() : string {
        return this._font;
    }


    public set sSize(v : string) {
        this._size = v.replace(" ","");
    }

    public get sSize() : string {
        return this._size;
    }
    

}