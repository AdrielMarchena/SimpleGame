import { Entity } from "../Formats/Entity";

export class TextEntity extends Entity{

    public text:string;
    private _font:string;
    private _size:string;

    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
        this.text = "PLACE HOLDER";
        this._size = "30px";
        this._font = this._size+" Arial";
        this.x = 0;
        this.y = 0;
        this.color = 'black';
    }

    public draw():void{
        this._ctx.save();
        this._ctx.globalCompositeOperation = 'source-over';
        this._ctx.font = this._font;
        this._ctx.fillStyle = this.color;
        this._ctx.fillText(this.text,this.x,this.y);
        this._ctx.restore();
    }

    private resolveFont():void{
            this._font = this._size + " " + this._font;
    }

    public set sFont(v : string) {
        this._font = v;
        this.resolveFont();
    }

    public get sFont() : string {
        return this._font;
    }


    public set sSize(v : string) {
        this._size = v.replace(" ","");
        this.resolveFont();
    }

    public get sSize() : string {
        return this._size;
    }
    

}