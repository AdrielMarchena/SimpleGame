import { Square } from "./Formats/Square";
import { Colisions } from "../Colision/Colision";

export class Ground extends Square implements Colisions.colisibleObj{
    
    constructor(ctx:CanvasRenderingContext2D){
        super(ctx);
    }

    public update():void{
    }

    public draw():void{
        this._ctx.save();
        this._ctx.globalCompositeOperation = 'destination-over';
        this._ctx.beginPath();
        this._ctx.rect(this.x,this.y,this.width,this.height);
        this._ctx.fillStyle = this.color;
        this._ctx.fill();
        this._ctx.restore();
    }

    getUtilInfo():Colisions.UtilInfo{
        const tempUtilInfo = new Colisions.UtilInfo();
        tempUtilInfo.x = this.x;
        tempUtilInfo.y = this.y;
        tempUtilInfo.h = this.height;
        tempUtilInfo.w = this.width;
        return tempUtilInfo;
    }

    callBackMessageFunc(){}
}