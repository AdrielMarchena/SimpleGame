import { Square } from "./Formats/Square";
import { Animation } from '../Animation/Animation';
import { KeyBoard } from "../KeyBoard/KeyBoard";
import { Colisions } from "../Colision/Colision";

export class Enemy extends Square implements Colisions.colisibleObj{

    public static readonly O_LEFT = 1;
    public static readonly O_RIGHT = 2;
    public static readonly O_UP = 3;
    public static readonly O_DOWN = 4;
    public orientation:number;

    constructor(ctx:CanvasRenderingContext2D,keybord:KeyBoard,animation:Animation){
        super(ctx);
        this._keyboard = keybord;
        this._animation = animation;
    }

    public update():void{
        this.x -= 1;
    }

    public draw():void{
        this._ctx.save();
        this._ctx.globalCompositeOperation = 'destination-over';
        this._ctx.beginPath();
        this._ctx.rect(this.x,this.y,this.width,this.height);
        //this._ctx.strokeStyle = this._color;
        this._ctx.fillStyle = this.color;
        //this._ctx.stroke();
        this._ctx.fill();

        this._ctx.restore();
    }

    getUtilInfo():Colisions.UtilInfo{
        return new Colisions.UtilInfo(this.x,this.y,this.height,this.width,Colisions.TypesOnColision.ENEMY);
    }

    public callBackMessageFunc(cause:Colisions.colisibleObj,colisionInstance?:Colisions.Colision){
        
    }

}