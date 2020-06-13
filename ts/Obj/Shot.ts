import { Ball } from "./Formats/Ball";
import { Animation } from '../Animation/Animation';
import { KeyBoard } from "../KeyBoard/KeyBoard";

export class Shot extends Ball{

    private _inBounds:boolean;

    constructor(ctx:CanvasRenderingContext2D,animation:Animation){
        super(ctx);
        this._animation = animation;
        this._inBounds = true;
    }

    public update():void{
        if(!this._inBounds){
            this._animation.popSprite(this);
            return;
        }
            
        this.accelerate();
        
        
        this.isInBounds();
    }

    private isInBounds():void{
        if(this._x-this._radius > this._ctx.canvas.width || 
           this._x+this._radius < 0 || 
           this._y-this._radius > this._ctx.canvas.height ||
           this._y+this._radius < 0){
                this._inBounds = false;
        }
        else
           this._inBounds = true;
    }

    private accelerate():void{
        //Acelerate the ball
        this._x += this.dx;
        this._y += this.dy;
    }

    public draw():void{
        if(this._inBounds){
            this._ctx.save();
        
            this._ctx.beginPath();
            this._ctx.arc(this._x,this._y,this._radius,0,Math.PI*2,false);
            //this._ctx.strokeStyle = this._color;
            this._ctx.fillStyle = this._color;
            //this._ctx.stroke();
            this._ctx.fill();

            this._ctx.restore();
        }
    }

}