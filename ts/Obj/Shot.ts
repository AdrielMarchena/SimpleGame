import { Ball } from "./Formats/Ball";
import { Animation } from '../Animation/Animation';

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
    /**
     * Check to see if the shoot still in Bounds (inside of Canvas)
     */
    private isInBounds():void{
        if(this.x-this.radius > this._ctx.canvas.width || 
           this.x+this.radius < 0 || 
           this.y-this.radius > this._ctx.canvas.height ||
           this.y+this.radius < 0){
                this._inBounds = false;
        }
    }

    private accelerate():void{
        //Acelerate the ball
        this.x += this.dx;
        this.y += this.dy;
    }

    public draw():void{
        if(this._inBounds){
            this._ctx.save();
            //Make the shot be in a "Second" layer
            this._ctx.globalCompositeOperation = 'destination-over';
            this._ctx.beginPath();
            this._ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
            //this._ctx.strokeStyle = this._color;
            this._ctx.fillStyle = this.color;
            //this._ctx.stroke();
            this._ctx.fill();

            this._ctx.restore();
        }
    }
}